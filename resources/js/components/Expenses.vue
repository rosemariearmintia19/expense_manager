<template>
<div class="container-fluid mt-5">
    <v-toolbar light extended height="4">
        <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
            My Expenses
        </v-toolbar-title>
        <template v-slot:extension>
            <v-btn fab color="#F28DBC" class="white--text" bottom right absolute @click="dialog = !dialog">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
    </v-toolbar>
    <hr>
    <v-card>
        <v-simple-table class="mt-2" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:#F28DBC;color:white">No.</th>
                    <th style="background-color:#F28DBC;color:white">Entry Date</th>
                    <th style="background-color:#F28DBC;color:white">Expense Category</th>
                    <th style="background-color:#F28DBC;color:white">Description</th>
                    <th style="background-color:#F28DBC;color:white">Amount</th>
                    <th style="background-color:#F28DBC;color:white">Status</th>
                    <th style="background-color:#F28DBC;color:white">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in expense_list" :key="list.expense_id">
                    <td>{{list.expense_id}}.</td>
                     <td>
                        <span v-show="!list.edit">{{list.created_at}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.created_at"></v-text-field>
                    </td>
                    <td>
                        <span v-show="!list.edit">{{list.category_name}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.category_name"></v-text-field>
                    </td>
                    <td>
                        <span v-show="!list.edit">{{list.description}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.description"></v-text-field>
                    </td>
                    <td>
                        <span v-show="!list.edit">{{list.amount}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.amount"></v-text-field>
                    </td>
                    <td>
                        <v-chip x-small :color="getColor(list.deleted_at)" dark dense>
                            {{ list.deleted_at}}
                        </v-chip>
                    </td>
                    <td>
                        <v-btn icon dense x-small v-if="!list.edit" @click="edit_expenses(list.expense_id)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon dense x-small v-else @click="save_edit_expenses(list)">
                            <v-icon>mdi-content-save</v-icon>
                        </v-btn>
                        <v-icon small v-if="list.deleted_at == 'Deleted'" @click="restore_expenses(list)">
                            mdi-restore
                        </v-icon>
                        <v-btn icon x-small v-if="list.deleted_at == 'Active'" @click="delete_expenses(list)">
                            <v-icon dense>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="400px">
        <v-card>
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-select v-model="expense_category" label="Expense Category" :items="expense_categories" item-value="category_id" item-text="category_name" outlined dense></v-select>
                            <v-text-field v-model="description" label="Description" outlined dense></v-text-field>
                            <v-text-field v-model="amount" label="Amount" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="close">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_new_expenses">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="280px">
        <v-card>
            <v-card-title align="center">Are you sure you want to delete this process?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="teal darken-1" text @click="deleteExpenseConfirm">OK</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogRestore" max-width="280px">
        <v-card>
            <v-card-title align="center">Are you sure you want to retrieve this process?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" @click="closeDelete" text>Cancel</v-btn>
                <v-btn color="teal darken-1" @click="restoreExpenseConfirm" text>OK</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            dialogRestore: false,
            editedIndex: -1,
            expense_list: {},
            description: null,
            expense_categories: [],
            expense_category: null,
            amount: null,
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Expenses' : 'Edit Item'
        },
    },
    created() {
        this.get_categories()
        this.get_expenses()
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },
    methods: {
        restoreExpenseConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/RestoreExpenses', {
                user_id : this.user.id,
                expense_id: this.expense_lists.expense_id
            }).then(res => {
                this.get_expenses()
                this.closeRestore()
            })
        },
        restore_expenses(list) {
            this.dialogRestore = true
            this.expense_lists = list
        },
        deleteExpenseConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/DeleteExpenses', {
                user_id : this.user.id,
                expense_id: this.expense_lists.expense_id,
            }).then(res => {
                this.get_expenses()
                this.closeDelete()
            })
        },
        delete_expenses(list) {
            this.dialogDelete = true
            this.expense_lists = list
        },
        save_edit_expenses(expenses) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditExpenses', {
                user_id : this.user.id,
                expense_id: expenses.expense_id,
                description: expenses.description,
                amount: expenses.amount
            }).then(res => {
                this.get_expenses()
            })
        },
        edit_expenses(expense_id) {
            for (let x = 0; x < this.expense_list.length; x++) {
                if (expense_id == this.expense_list[x].expense_id) {
                    if (this.expense_list[x].edit) {
                        this.expense_list[x].edit = false
                    } else {
                        this.expense_list[x].edit = true
                    }
                }
                console.log(this.expense_list)
            }
        },
        getColor(deleted_at) {
            if (deleted_at == 'Active') return 'green'
            else return 'red'
        },
        get_expenses() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/GetExpenses',{
                user_id : this.user.id
            })
                .then(res => {
                    console.log(res.data)
                    this.expense_list = res.data
                    for (var i = 0; i < this.expense_list.length; i++) {
                        this.$set(this.expense_list[i], 'edit', false)
                        if (this.expense_list[i].deleted_at) {
                            this.expense_list[i].deleted_at = 'Deleted';
                        } else {
                            this.expense_list[i].deleted_at = 'Active';
                        }
                        this.expense_list[i].created_at = moment(res.data[i].created_at).format('YYYY-MM-DD')
                    }
                })
        },
        save_new_expenses() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/Expenses', {
                    user_id : this.user.id,
                    expense_category: this.expense_category,
                    description: this.description,
                    amount: this.amount
                })
                .then(res => {
                    this.dialog = false
                    this.get_expenses()
                })
        },
        get_categories() {
            axios.get('api/GetCategory')
                .then(res => {
                    this.expense_categories = res.data
                    console.log(res.data);
                })
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        closeRestore() {
            this.dialogRestore = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
    }
}
</script>

<style>
.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,
.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
    font-size: 12px !important;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
