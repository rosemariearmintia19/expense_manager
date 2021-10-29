<template>
<div class="container-fluid">
    <v-card class="pa-6">
        <v-toolbar light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                User List
            </v-toolbar-title>
        </v-toolbar>
        <v-simple-table class="mt-2" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:teal;color:white">No.</th>
                    <th style="background-color:teal;color:white">Name</th>
                    <th style="background-color:teal;color:white">Email</th>
                    <th style="background-color:teal;color:white">Role</th>
                    <th style="background-color:teal;color:white">Creted At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in user_list" :key="list.id">
                    <td>{{list.id}}.</td>
                    <td v-if="list.role_id == 1">
                        <span>{{list.name}}</span>
                    </td>
                    <td v-else>
                        <span class="aa" @click="UpdateUser(list)">{{list.name}}</span>
                    </td>
                    <td>
                        <span v-show="!list.edit">{{list.email}}</span>
                    </td>
                    <td>
                        <span>{{list.role}}</span>
                    </td>
                    <td>{{ list.created_at}}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
    <v-btn color="teal" class="white--text" bottom right absolute @click="dialog = !dialog">
        Add User
    </v-btn>
    <v-dialog v-model="dialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:teal;color:white">
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
                <v-container class="mt-5">
                    <v-row>
                        <v-col>
                            <v-text-field class="mt-2" v-model="fullname" dense outlined label="Fullname"></v-text-field>
                            <v-text-field class="mt-2" v-model="email" dense outlined label="Email"></v-text-field>
                            <v-select v-model="role" label="Roles" :items="roles" item-value="role_id" item-text="name" outlined dense></v-select>
                            <v-text-field v-model="password" dense outlined label="Password" type="password"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="close">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_new_users">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="UpdateUserDialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:teal;color:white">
                <span class="headline">Update User</span>
            </v-card-title>
            <v-card-text>
                <v-container class="mt-5">
                    <v-row>
                        <v-col>
                            <v-text-field class="mt-2" v-model="edit_fullname" dense outlined label="Fullname"></v-text-field>
                            <v-text-field class="mt-2" v-model="edit_email" dense outlined label="Email"></v-text-field>
                            <v-select v-model="edit_role" label="Roles" :items="roles" item-value="role_id" item-text="name" outlined dense></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-btn color="teal darken-1" text @click="delete_user(user_id)">
                    Delete
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeEdit">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_edit_user(user_id)">
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
            user_list: {},
            fullname: null,
            email: null,
            role: '',
            roles: [],
            password: null,
            editedIndex: -1,
            editedItem: {
                employee_code: '',
                employee_name: '',
                department: '',
                section: '',
                team: '',
                deleted_at: '',
            },
            defaultItem: {
                name: '',
            },
            edit_fullname: null,
            edit_email: null,
            edit_role: null,
            UpdateUserDialog: false

        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Users' : 'Edit Item'
        },
    },
    created() {
        this.get_lists()
        this.get_roles()

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
        delete_user(user_id) {
            if (confirm("Do you really want to delete?")) {
                this.user = JSON.parse(localStorage.getItem('user'))
                axios.post('api/DeleteUser', {
                    updated_by: this.user.id,
                    user_id: user_id
                }).then(res => {
                    this.get_lists()
                })
            }
        },
        save_edit_user(user_id) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditUser', {
                updated_by: this.user.id,
                user_id: user_id,
                name: this.edit_fullname,
                email: this.edit_email,
                role_id: this.edit_role
            }).then(res => {
                this.get_lists()
                this.UpdateUserDialog = false
            })
        },
        UpdateUser(list) {
            this.UpdateUserDialog = true
            this.user_id = list.id
            this.edit_fullname = list.name
            this.edit_email = list.email
            this.edit_role = list.role
        },
        get_roles() {
            axios.get('api/GetRoles')
                .then(res => {
                    this.roles = res.data
                    console.log(res.data);
                })
        },
        getColor(deleted_at) {
            if (deleted_at == 'Active') return 'green'
            else return 'red'
        },
        get_lists() {
            axios.get('api/User')
                .then(res => {
                    this.user_list = res.data
                    for (var i = 0; i < this.user_list.length; i++) {
                        this.$set(this.user_list[i], 'edit', false)
                        if (this.user_list[i].deleted_at) {
                            this.user_list[i].deleted_at = 'Deleted';
                        } else {
                            this.user_list[i].deleted_at = 'Active';
                        }
                        this.user_list[i].created_at = moment(res.data[i].created_at).format('YYYY-MM-DD')
                    }
                })
        },
        save_new_users() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/User', {
                user_id: this.user.id,
                fullname: this.fullname,
                email: this.email,
                role: this.role,
                password: this.password,
            }).then(res => {
                this.dialog = false
                this.get_lists()
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
            this.UpdateUserDialog = false
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

<style scoped>
.aa:hover {
    cursor: pointer;
    color: teal
}
</style>
