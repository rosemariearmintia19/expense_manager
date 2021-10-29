<template>
<div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <div style="text-align:center;" class="mt-5">
            <h6 style="font-family: Trebuchet MS">{{user_details.name}}</h6>
            <v-chip outlined small color="teal">
                <v-icon left>mdi-account-circle</v-icon>
                <span style="font-family: Trebuchet MS">LOGGED-IN AS {{role}}</span>
            </v-chip>

        </div>
        <hr>
        <v-list dense>
            <v-list nav dense>
                <v-list-item class="a" link :to="{ name: 'expense_chart'}">
                    <v-list-item-icon>
                        <v-icon>mdi-cash</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <span style="font-weight:bold" v-show="user_details.role == 1">
                    User Management
                </span>
                <v-list-item class="a" link :to="{ name: 'roles'}" v-show="user_details.role == 1">
                    <v-list-item-icon>
                        <v-icon>mdi-account-cog</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >Roles</v-list-item-title>
                </v-list-item>
                <v-list-item link class="a" :to="{ name: 'users'}"  v-show="user_details.role == 1">
                    <v-list-item-icon>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item>
                <span style="font-weight:bold">
                    Expense Management
                </span>
                <v-list-item link class="a" :to="{ name: 'new_category'}"  v-show="user_details.role == 1">
                    <v-list-item-icon>
                        <v-icon>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Expense Category</v-list-item-title>
                </v-list-item>
                <v-list-item link class="a" :to="{ name: 'new_expense'}">
                    <v-list-item-icon>
                        <v-icon>mdi-cash</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Expense</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dense color="teal" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <span class="hidden-sm-and-down">Welcome to Expense Management</span>
        <v-btn icon style="text-decoration: none;" @click="logout()">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>

<script>
export default {

    data: () => ({
        dialog: false,
        drawer: null,
        user_details: {},
        role: null,
    }),
    created() {
        this.users()
        var user = localStorage.getItem('user')
    },
    methods: {
        logout() {
            this.$router.push({
                name: 'login'
            })

        },
        users() {
            this.user_details = JSON.parse(localStorage.getItem('user'))
            this.role = this.user_details.role == 1 ? 'ADMIN' : 'USER';

        },
    },
    props: {
        source: String
    }
}
</script>

<style scoped>
.a:hover {
    cursor: pointer;
    color: teal;
    text-decoration: none;
}
</style>
