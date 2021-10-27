<template>
<div class="container-fluid">
    <v-card class="pa-6">
        <v-toolbar light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                Permission Type
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
                    <th style="background-color:#F28DBC;color:white">Name</th>
                    <th style="background-color:#F28DBC;color:white">Status</th>
                    <th style="background-color:#F28DBC;color:white">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in permission_lists" :key="list.role_id">
                    <td>{{list.role_id}}.</td>
                    <td>
                        <span v-show="!list.edit">{{list.name}}</span>
                        <v-text-field v-show="list.edit" dense v-model="list.name"></v-text-field>
                    </td>
                    <td>
                        <v-chip x-small :color="getColor(list.deleted_at)" dark dense>
                            {{ list.deleted_at}}
                        </v-chip>
                    </td>
                    <td>
                        <v-btn icon dense x-small v-if="!list.edit" @click="edit_permission(list.role_id)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon dense x-small v-else @click="save_edit_permission(list)">
                            <v-icon>mdi-content-save</v-icon>
                        </v-btn>
                        <v-icon small v-if="list.deleted_at == 'Deleted'" @click="restore_permission(list)">
                            mdi-restore
                        </v-icon>
                        <v-btn icon x-small v-if="list.deleted_at == 'Active'" @click="delete_permission(list)">
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
                            <v-text-field v-model="permission_type" label="Permission Name" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="close">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_new_permission">
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
                <v-btn color="teal darken-1" text @click="deletePermissionConfirm">OK</v-btn>
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
                <v-btn color="teal darken-1" text @click="restorePermissionConfirm">OK</v-btn>
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
            permission_type: null,
            permission_lists: {},
        }
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Permission Type' : 'Edit Permission Type'
        },
    },
    created() {
        this.permission_table()
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
        save_edit_permission(permission) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditPermission', {
                user_id: this.user.id,
                role_id:permission.role_id,
                name: permission.name
            }).then(res => {
                this.permission_table()
            })
        },
        edit_permission(role_id) {
            for (let x = 0; x < this.permission_lists.length; x++) {
                if (role_id == this.permission_lists[x].role_id) {
                    if (this.permission_lists[x].edit) {
                        this.permission_lists[x].edit = false
                    } else {
                        this.permission_lists[x].edit = true
                    }
                }
                console.log(this.permission_lists)
            }

        },
        getColor(deleted_at) {
            if (deleted_at == 'Active') return 'green'
            else return 'red'
        },
        deletePermissionConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/DeletePermission', {
                user_id: this.user.id,
                role_id: this.permission_list.role_id
            }).then(res => {
                this.permission_table()
                this.closeDelete()
            })
        },
        delete_permission(list) {
            this.dialogDelete = true
            this.permission_list = list
        },
        restore_permission(list) {
            this.dialogRestore = true
            this.permission_list = list
        },
        restorePermissionConfirm() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/RestorePermission', {
                user_id: this.user.id,
                role_id: this.permission_list.role_id
            }).then(res => {
                this.permission_table()
                this.closeRestore()
            })
        },
        permission_table() {
            axios.get('api/Permission')
                .then(res => {
                    this.permission_lists = res.data
                    for (var i = 0; i < this.permission_lists.length; i++) {
                        this.$set(this.permission_lists[i], 'edit', false)
                        if (this.permission_lists[i].deleted_at) {
                            this.permission_lists[i].deleted_at = 'Deleted';
                        } else {
                            this.permission_lists[i].deleted_at = 'Active';
                        }
                    }
                })
        },
        save_new_permission() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/Permission', {
                user_id: this.user.id,
                permission_type: this.permission_type
            }).then(res => {
                this.dialog = false
                this.permission_table()
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
