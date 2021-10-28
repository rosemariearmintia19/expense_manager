<template>
<div class="container-fluid">
    <v-card class="pa-6">
        <v-toolbar light extended height="4">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                User Expense List
            </v-toolbar-title>
        </v-toolbar>
        <hr>
        <v-text-field outlined label="Search" v-model="search" prepend-icon="mdi-magnify"></v-text-field>
        <v-simple-table class="mt-2" dense fixed-header height="400">
            <thead>
                <tr>
                    <th style="background-color:teal;color:white">No.</th>
                    <th style="background-color:teal;color:white">Entry Date</th>
                    <th style="background-color:teal;color:white">Name</th>
                    <th style="background-color:teal;color:white">Expense Category</th>
                    <th style="background-color:teal;color:white">Description</th>
                    <th style="background-color:teal;color:white">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in user_expenses_list" :key="list.expense_id">
                    <td>{{list.expense_id}}.</td>
                     <td>
                        {{list.created_at}}
                    </td>
                    <td>
                        {{list.firstname}} {{list.lastname}}
                    </td>
                    <td>
                        {{list.category_name}}
                    </td>
                    <td>
                        {{list.description}}
                    </td>
                    <td>
                        {{list.amount}}
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
</div>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
           user_expenses_list:{},
           search:''
        }
    },
    created() {
        this.GetUsersExpenses()
    },
    watch: {
    },
    methods: {

        GetUsersExpenses(){
            axios.get('api/GetUsersExpenses')
            .then(res => {
                this.user_expenses_list = res.data
                for (var i = 0; i < this.user_expenses_list.length; i++) {
                        this.user_expenses_list[i].created_at = moment(res.data[i].created_at).format('YYYY-MM-DD')
                    }
                })
        }
   
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
