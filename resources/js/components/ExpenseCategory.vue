<template>
<div class="container-fluid">
    <v-card class="mt-10">
        <v-toolbar class="mt-10" light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                Expense Categories
            </v-toolbar-title>
        </v-toolbar>
        <hr>

        <v-simple-table class="mt-10" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:teal;color:white">No.</th>
                    <th style="background-color:teal;color:white">Display Name</th>
                    <th style="background-color:teal;color:white">Description</th>
                    <th style="background-color:teal;color:white">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in category_lists" :key="list.category_id">
                    <td>{{list.category_id}}.</td>
                    <td>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on" class="aa" @click="UpdateCategory(list)">{{list.category_name}}</span>
                            </template>
                            <span>Update</span>
                        </v-tooltip>
                    </td>
                    <td>
                        <span>{{list.description}}</span>
                    </td>
                    <td>
                        {{ list.created_at}}
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
    <v-btn color="teal" class="white--text" bottom right absolute @click="dialog = !dialog">
        Add Category
    </v-btn>
    <v-dialog v-model="dialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:teal;color:white">
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="category_name" label="Category name" outlined dense></v-text-field>
                            <v-text-field v-model="description" label="Description" outlined dense></v-text-field>
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
    <v-dialog v-model="UpdateCategoryDialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:teal;color:white">
                <span class="headline">Update Category</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="edit_display_name" label="Display Name" outlined dense>{{edit_display_name}}</v-text-field>
                            <v-text-field v-model="edit_description" label="Description" outlined dense>{{edit_description}}</v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-btn color="teal darken-1" text @click="delete_category(category_id)">
                    Delete
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeEdit">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_edit_category(category_id)">
                    Update
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import moment from 'moment/moment'
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            dialogRestore: false,
            editedIndex: -1,
            category_name: null,
            description: null,
            category_lists: {},
            UpdateCategoryDialog: false,
            edit_display_name: null,
            edit_description: null,
        }
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Add Category' : 'Edit Item'
        },
    },
    created() {
        this.category_list_table()
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
    },
    methods: {
        delete_category(category_id) {
            if (confirm("Do you really want to delete?")) {
                this.user = JSON.parse(localStorage.getItem('user'))
                axios.post('api/DeleteCategory', {
                    updated_by: this.user.id,
                    category_id: category_id
                }).then(res => {
                    this.category_list_table()
                    this.UpdateCategoryDialog = false
                })
            }
        },
        save_edit_category(category_id) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditCategory', {
                update_by: this.user.id,
                category_id: category_id,
                category_name: this.edit_display_name,
                description: this.edit_description
            }).then(res => {
                this.category_list_table()
                this.UpdateCategoryDialog = false
            })
        },
        UpdateCategory(list) {
            this.UpdateCategoryDialog = true
            this.category_id = list.category_id
            this.edit_display_name = list.category_name
            this.edit_description = list.description
        },
        category_list_table() {
            axios.get('api/Category')
                .then(res => {
                    this.category_lists = res.data
                    for (var i = 0; i < this.category_lists.length; i++) {
                        this.category_lists[i].created_at = moment(res.data[i].created_at).format('YYYY-MM-DD')
                    }
                })
        },
        save_new_category() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/Category', {
                user_id: this.user.id,
                category_name: this.category_name,
                description: this.description
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
        closeEdit() {
            this.UpdateCategoryDialog = false
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
