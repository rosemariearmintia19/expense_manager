<template>
<div class="container-fluid mt-10">
    <highcharts :options="chartOptions"></highcharts>
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
            chartOptions: {
                chart: {
                    type: 'column'
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
                role : this.user.role,
                user_id : this.user.id
            })
            .then(res => {
                this.chartOptions.series[0].data = res.data.map((m) => m.total_amount);
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
