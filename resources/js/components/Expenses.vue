<template>
<div class="container-fluid mt-5">
    <v-toolbar light extended height="4">
        <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
            Expenses
        </v-toolbar-title>
    </v-toolbar>
    <hr>
    <v-card>
        <v-simple-table class="mt-2" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:teal;color:white">No.</th>
                    <th style="background-color:teal;color:white">Expense Category</th>
                    <th style="background-color:teal;color:white">Amount</th>
                    <th style="background-color:teal;color:white">Entry Date</th>
                    <th style="background-color:teal;color:white">Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in expense_list" :key="list.expense_id">
                    <td>{{list.expense_id}}.</td>
                    <td>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on" class="aa" @click="UpdateExpense(list)">{{list.category_name}}</span>
                            </template>
                            <span>Update</span>
                        </v-tooltip>
                    </td>
                    <td>
                        <span>{{list.amount}}</span>
                    </td>
                    <td>
                        <span>{{list.entry_date}}</span>
                    </td>
                    <td>
                        <span>{{list.created_at}}</span>
                    </td>

                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
    <v-btn color="teal" class="white--text mt-10" bottom right absolute @click="dialog = !dialog">
        Add Expenses
    </v-btn>
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
                            <v-text-field v-model="amount" label="Amount" outlined dense></v-text-field>
                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="entry_date" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="entry_date" label="Entry Date" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="entry_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.menu.save(entry_date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>

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
    <v-dialog v-model="UpdateExpenseDialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:teal;color:white">
                <span class="headline">Update Category</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-select v-model="edit_category" label="Expense Category" :items="expense_categories" item-value="category_id" item-text="category_name" outlined dense>{{edit_category}}</v-select>
                            <v-text-field v-model="edit_amount" label="Amount" outlined dense></v-text-field>
                            <v-menu ref="edit_menu" v-model="edit_menu" :close-on-content-click="false" :return-value.sync="edit_entry_date" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="edit_entry_date" label="Entry Date" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="edit_entry_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="edit_menu = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.edit_menu.save(edit_entry_date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-btn color="teal darken-1" text @click="delete_expense(expense_id)">
                    Delete
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeEdit">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_edit_expense(expense_id)">
                    Update
                </v-btn>
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
            entry_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            edit_menu: false,
            UpdateExpenseDialog: false,
            edit_category: null,
            edit_amount: null,
            edit_entry_date: null
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
        delete_expense(expense_id) {
            if (confirm("Do you really want to delete?")) {
                this.user = JSON.parse(localStorage.getItem('user'))
                axios.post('api/DeleteExpenses', {
                    updated_by: this.user.id,
                    expense_id: expense_id
                }).then(res => {
                    this.get_expenses()
                    this.UpdateExpenseDialog = false
                })
            }
        },
        save_edit_expense(expense_id) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditExpenses', {
                update_by: this.user.id,
                expense_id: expense_id,
                category_name: this.edit_category,
                amount: this.edit_amount,
                entry_date: this.edit_entry_date
            }).then(res => {
                this.get_expenses()
                this.UpdateExpenseDialog = false
            })
        },
        UpdateExpense(list) {
            this.UpdateExpenseDialog = true
            this.expense_id = list.expense_id
            this.edit_category = list.category_name
            this.edit_amount = list.amount
            this.edit_entry_date = list.entry_date
        },
        get_expenses() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/GetExpenses', {
                    user_id: this.user.id
                })
                .then(res => {
                    console.log(res.data)
                    this.expense_list = res.data
                    for (var i = 0; i < this.expense_list.length; i++) {
                        this.expense_list[i].entry_date = moment(res.data[i].entry_date).format('YYYY-MM-DD')
                        this.expense_list[i].created_at = moment(res.data[i].created_at).format('YYYY-MM-DD')
                    }
                })
        },
        save_new_expenses() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/Expenses', {
                    user_id: this.user.id,
                    expense_category: this.expense_category,
                    amount: this.amount,
                    entry_date: this.entry_date
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

        closeEdit() {
            this.UpdateExpenseDialog = false
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
.aa:hover {
    cursor: pointer;
    color: teal
}
</style>
