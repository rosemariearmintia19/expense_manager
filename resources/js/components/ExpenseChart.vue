<template>
<div class="container-fluid mt-10">
    <div class="row">
        <div class="col-sm-6">
            <v-card class="pa-6">
                <v-toolbar light extended height="4">
                    <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                        My Expenses
                    </v-toolbar-title>
                </v-toolbar>
                <v-simple-table class="mt-2">
                    <thead>
                        <tr>
                            <th style="background-color:teal">Categories</th>
                            <th style="background-color:teal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in expenses" :key="list.expense_id">
                            <td>{{list.category}}</td>
                            <td>${{list.total_amount}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>

        </div>
        <div class="col-sm-6">
            <highcharts :options="chartOptions"></highcharts>
        </div>
    </div>

</div>
</template>

<script>
import {
    Chart
} from 'highcharts-vue'
export default {
    components: {
        highcharts: Chart
    },
    data() {
        return {
            expenses: {},
            chartOptions: {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Expense Chart'
                },
                xAxis: [{
                    categories: []
                }],
                series: [{
                    name: 'User Expenses',
                    data: [],
                    color: '#6fcd98',
                }]
            }
        }
    },
    created() {
        this.getTotalExpenses()
    },
    methods: {

        getTotalExpenses: function () {
            this.user = JSON.parse(localStorage.getItem('user'))
            var vm = this;
            axios.post('api/GetTotalExpenses', {
                    role: this.user.role,
                    user_id: this.user.id
                })
                .then(res => {
                    this.expenses = res.data
                    this.chartOptions.series[0].data= res.data.map((m) => m.total_amount);
                    this.chartOptions.xAxis[0].categories = res.data.map((m) => m.category);
                })

        }
    }
}
</script>

<style scoped>
.a:hover {
    cursor: pointer;
    color: #26c6da
}

p {
    font-family: Trebuchet MS
}

.red {
    background-color: red;
}
</style>
