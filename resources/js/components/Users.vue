<template>
<div class="container-fluid">
    <v-card class="pa-6">
        <v-toolbar light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                User List
            </v-toolbar-title>
            <template v-slot:extension>
                <v-btn fab color="#F28DBC" class="white--text" bottom right absolute @click="dialog = !dialog">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </v-toolbar>
        <hr>
        <v-simple-table dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:#F28DBC;color:white">No.</th>
                    <th style="background-color:#F28DBC;color:white">Firstname</th>
                    <th style="background-color:#F28DBC;color:white">LastName</th>
                    <th style="background-color:#F28DBC;color:white">Email</th>
                    <th style="background-color:#F28DBC;color:white">Role</th>
                    <th style="background-color:#F28DBC;color:white">Status</th>
                    <th style="background-color:#F28DBC;color:white">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in user_list" :key="list.id">
                    <td>{{list.id}}.</td>
                    <td>
                        <span v-show="!list.edit">{{list.firstname}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.firstname"></v-text-field>
                    </td>
                     <td>
                        <span v-show="!list.edit">{{list.lastname}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.lastname"></v-text-field>
                    </td>
                    <td>
                        <span v-show="!list.edit">{{list.email}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.email"></v-text-field>
                    </td>
                    <td>
                        <span v-show="!list.edit">{{list.name}}</span>
                        <v-select class="mt-2" v-show="list.edit" v-model="list.role_id" dense outlined label="Role" :items="roles" item-value="role_id" item-text="name"></v-select>
                    </td>
                    <td>
                        <v-chip x-small :color="getColor(list.deleted_at)" dark dense>
                            {{ list.deleted_at}}
                        </v-chip>
                    </td>
                    <td>
                        <v-btn icon dense x-small v-if="!list.edit" @click="edit_user(list.id)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon dense x-small v-else @click="save_edit_user(list)">
                            <v-icon>mdi-content-save</v-icon>
                        </v-btn>
                        <v-icon small v-if="list.deleted_at == 'Deleted'" @click="restore_user(list)">
                            mdi-restore
                        </v-icon>
                        <v-btn icon x-small v-if="list.deleted_at == 'Active'" @click="delete_user(list)">
                            <v-icon dense>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
    <v-dialog v-model="dialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:#F28DBC;color:white">
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
                <v-container class="mt-5">
                    <v-row>
                        <v-col>
                            <v-text-field class="mt-2" v-model="firstname" dense outlined label="Firstname"></v-text-field>
                            <v-text-field v-model="lastname" dense outlined label="Lastname"></v-text-field>
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
    <v-dialog v-model="dialogDelete" max-width="280px">
        <v-card>
            <v-card-title align="center">Are you sure you want to delete this staff?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="teal darken-1" text @click="deleteUserConfirm">OK</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogRestore" max-width="280px">
        <v-card>
            <v-card-title align="center">Are you sure you want to retrieve this staff?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeRestore">Cancel</v-btn>
                <v-btn color="teal darken-1" text @click="restoreUserConfirm">OK</v-btn>
                <v-spacer></v-spacer>
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
            user_list:{},
            firstname : null,
            lastname : null,
            email : null,
            role: '',
            roles:[],
            password:null,
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
                    }
                })
        },
        restoreUserConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/RestoreUser', {
                user_id : this.user.id,
                id: this.user_lists.id,
            }).then(res => {
                this.get_lists()
                this.closeRestore()
            })
        },
        restore_user(list) {
            this.dialogRestore = true
            this.user_lists = list
        },
        deleteUserConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/DeleteUser', {
                user_id : this.user.id,
                id: this.user_lists.id,
            }).then(res => {
                this.get_lists()
                this.closeDelete()
            })

        },
        delete_user(list) {
            this.dialogDelete = true
            this.user_lists = list
        },
        save_edit_user(list) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditUser', {
                user_id : this.user.id,
                id: list.id,
                firstname: list.firstname,
                lastname: list.lastname,
                email: list.email,
                role: list.role_id
            }).then(res => {
                this.get_lists()
            })
        },
        edit_user(id) {
            for (let x = 0; x < this.user_list.length; x++) {
                if (id == this.user_list[x].id) {
                    if (this.user_list[x].edit) {
                        this.user_list[x].edit = false
                    } else {
                        this.user_list[x].edit = true
                    }
                }
            }

        },
        save_new_users() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/User', {
                user_id : this.user.id,
                firstname: this.firstname,
                lastname: this.lastname,
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
