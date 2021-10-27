<template>
<div class="container-fluid">
    <v-card class="pa-6">
        <v-toolbar light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                Expense Category List
            </v-toolbar-title>
            <template v-slot:extension>
                <v-btn fab color="#F28DBC" class="white--text" bottom right absolute @click="dialog = !dialog">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </v-toolbar>
        <hr>
        <v-simple-table class="mt-2" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:#F28DBC;color:white">No.</th>
                    <th style="background-color:#F28DBC;color:white">Category Name</th>
                    <th style="background-color:#F28DBC;color:white">Status</th>
                    <th style="background-color:#F28DBC;color:white">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in category_lists" :key="list.category_id">
                    <td>{{list.category_id}}.</td>
                    <td>
                        <span v-show="!list.edit">{{list.category_name}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.category_name"></v-text-field>
                    </td>
                    <td>
                        <v-chip x-small :color="getColor(list.deleted_at)" dark dense>
                            {{ list.deleted_at}}
                        </v-chip>
                    </td>
                    <td>
                        <v-btn icon dense x-small v-if="!list.edit" @click="edit_category(list.category_id)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon dense x-small v-else @click="save_edit_category(list)">
                            <v-icon>mdi-content-save</v-icon>
                        </v-btn>
                        <v-icon small v-if="list.deleted_at == 'Deleted'" @click="restore_category(list)">
                            mdi-restore
                        </v-icon>
                        <v-btn icon x-small v-if="list.deleted_at == 'Active'" @click="delete_category(list)">
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
                                <v-text-field v-model="category_name" label="Category name" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="close">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_new_category">
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
                <v-btn color="teal darken-1" text @click="deleteCategoryConfirm">OK</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogRestore" max-width="280px">
        <v-card>
            <v-card-title align="center">Are you sure you want to retrieve this process?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeRestore">Cancel</v-btn>
                <v-btn color="teal darken-1" text @click="restoreCategoryConfirm">OK</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            dialogRestore: false,
            editedIndex: -1,
            category_name: null,
            category_lists: {},
        }
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Expende Category' : 'Edit Item'
        },
    },
    created() {
        this.category_list_table()
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
        save_edit_category(category) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditCategory', {
                user_id : this.user.id,
                category_id: category.category_id,
                category_name: category.category_name
            }).then(res => {
                this.category_list_table()
            })
        },
        edit_category(category_id) {
            for (let x = 0; x < this.category_lists.length; x++) {
                if (category_id == this.category_lists[x].category_id) {
                    if (this.category_lists[x].edit) {
                        this.category_lists[x].edit = false
                    } else {
                        this.category_lists[x].edit = true
                    }
                }
                console.log(this.category_lists)
            }

        },
        
        getColor(deleted_at) {
            if (deleted_at == 'Active') return 'green'
            else return 'red'
        },
        deleteCategoryConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/DeleteCategory', {
                user_id : this.user.id,
                category_id: this.category_list.category_id,
            }).then(res => {
                this.category_list_table()
                this.closeDelete()
            })
        },
        delete_category(list) {
            this.dialogDelete = true
            this.category_list = list
        },
        restore_category(list) {
            this.dialogRestore = true
            this.category_list = list
        },
        restoreCategoryConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/RestoreCategory', {
                user_id : this.user.id,
                category_id: this.category_list.category_id
            }).then(res => {
                this.category_list_table()
                this.closeRestore()
            })
        },
        category_list_table() {
            axios.get('api/Category')
                .then(res => {
                    this.category_lists = res.data
                    for (var i = 0; i < this.category_lists.length; i++) {
                        this.$set(this.category_lists[i], 'edit', false)
                        if (this.category_lists[i].deleted_at) {
                            this.category_lists[i].deleted_at = 'Deleted';
                        } else {
                            this.category_lists[i].deleted_at = 'Active';
                        }
                    }
                })
        },
         save_new_category() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/Category', {
                user_id : this.user.id,
                category_name: this.category_name
            }).then(res => {
                this.dialog = false
                this.category_list_table()
            }).catch(
                error => {
                    console.log(error)
                }
            )
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
