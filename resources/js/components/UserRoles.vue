<template>
<div class="container-fluid">
    <v-card class="pa-6">
        <v-toolbar light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                Permission Type
            </v-toolbar-title>
        </v-toolbar>
        <hr>
        <v-simple-table class="mt-2" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:teal;color:white">No.</th>
                    <th style="background-color:teal;color:white">Name</th>
                    <th style="background-color:teal;color:white">Description</th>
                    <th style="background-color:teal;color:white">Creted at</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in permission_lists" :key="list.role_id">
                    <td>{{list.role_id}}.</td>
                    <td v-if="list.role_id == 1">
                        <span>{{list.name}}</span>
                    </td>
                    <td v-else>
                        <span class="aa" @click="UpdateRole(list)">{{list.name}}</span>
                    </td>
                    <td>
                        <span>{{list.description}}</span>
                    </td>
                    <td>
                        <span>{{list.created_at}}</span>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
    <v-btn color="teal" class="white--text" bottom right absolute @click="dialog = !dialog">
        Add Role
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
                            <v-text-field v-model="permission_type" label="Display Name" outlined dense></v-text-field>
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
                <v-btn color="teal darken-1" text @click="save_new_permission">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="UpdateDialog" max-width="400px">
        <v-card>
            <v-card-title style="background-color:teal;color:white">
                <span class="headline">Update Role</span>
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
                <v-btn color="teal darken-1" text @click="delete_role(role_id)">
                    Delete
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="closeEdit">
                    Cancel
                </v-btn>
                <v-btn color="teal darken-1" text @click="save_edit_role(role_id)">
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
            permission_type: null,
            description: null,
            permission_lists: {},
            UpdateDialog: false,
            role_id: '',
            edit_display_name: null,
            edit_description: null
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
    },
    methods: {
        delete_role(role_id) {
            if (confirm("Do you really want to delete?")) {
                this.user = JSON.parse(localStorage.getItem('user'))
                axios.post('api/DeletePermission', {
                    user_id: this.user.id,
                    role_id: role_id
                }).then(res => {
                    this.permission_table()
                })
            }
        },
        save_edit_role(role_id) {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveEditPermission', {
                user_id: this.user.id,
                role_id: role_id,
                name: this.edit_display_name,
                description: this.edit_description
            }).then(res => {
                this.permission_table()
                this.UpdateDialog = false
            })
        },
        UpdateRole(list) {
            this.UpdateDialog = true
            this.role_id = list.role_id
            this.edit_display_name = list.name
            this.edit_description = list.description
        },
        permission_table() {
            axios.get('api/Permission')
                .then(res => {
                    this.permission_lists = res.data
                    for (var i = 0; i < this.permission_lists.length; i++) {
                        this.permission_lists[i].created_at = moment(res.data[i].created_at).format('YYYY-MM-DD')
                    }
                })
        },
        save_new_permission() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/Permission', {
                user_id: this.user.id,
                permission_type: this.permission_type,
                description: this.description
            }).then(res => {
                this.dialog = false
                this.permission_table()
            }).catch(
                error => {
                    console.log(error)
                }
            )
        },
        closeEdit() {
            this.UpdateDialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        close() {
            this.dialog = false
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
