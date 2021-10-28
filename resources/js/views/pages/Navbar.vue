<template>
<div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <div style="text-align:center;" class="mt-5">
            <h6 style="font-family: Trebuchet MS">{{user_details.firstname}} {{user_details.lastname}}</h6>
            <v-chip outlined small color="teal">

                <v-icon left>mdi-account-circle</v-icon>
                <span style="font-family: Trebuchet MS">LOGGED-IN AS {{role}}</span>
            </v-chip>

        </div>
        <hr>
        <v-list dense>
            <template v-for="item in items" :to="item.to" v-show="item.accessibleBy.includes(user_details.role)">
                <v-row v-if="item.heading" :key="item.heading" align="center">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <a href="#!" class="body-2 black--text">EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" v-show="item.accessibleBy.includes(user_details.role)">
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item class="a" v-for="(child, i) in item.children" :key="i" link :to="child.to" v-show="item.accessibleBy.includes(user_details.role)">
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item class="a" v-else :key="item.text" link :to="item.to" v-show="item.accessibleBy.includes(user_details.role)">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dense color="teal" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">EXPENSE MANAGER</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
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
        items: [{
                icon: 'mdi-cash',
                text: 'My Expenses',
                to: 'new_expense',
                accessibleBy: [1, 2]
            },
             {
                icon: 'mdi-chart-bar',
                text: 'Expense Chart',
                to: 'expense_chart',
                accessibleBy: [1, 2]
            },
            {
                icon: 'mdi-account-key',
                text: 'Change Password',
                to: 'change_password',
                accessibleBy: [1, 2]
            },
            {
                icon: 'mdi-chevron-up',
                'icon-alt': 'mdi-chevron-down',
                text: 'Settings',
                accessibleBy: [1],
                children: [{
                        icon: 'mdi-plus',
                        text: 'Expense Category',
                        to: 'new_category'
                    },
                    {
                        icon: 'mdi-account-plus',
                        text: 'Users',
                        to: 'new_users'
                    },
                    {
                        icon: 'mdi-account-cash',
                        text: 'Track Users Expenses',
                        to: 'users_expenses'
                    },
                    {
                        icon: 'mdi-account-cog',
                        text: 'User Type',
                        to: 'roles'
                    },
                ]
            },

        ]
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
