import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Hello from './views/pages/Hello'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            components:{
                default:()=> import('./views/pages/Login'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/change_password',
            name: 'change_password',
            components:{
                default:()=> import('./views/pages/ChangePassword'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/home',
            name: 'home',
            components:{
                default:()=> import('./views/pages/Home'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/new_category',
            name: 'new_category',
            components:{
                default:()=> import('./components/ExpenseCategory'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/new_expense',
            name: 'new_expense',
            components:{
                default:()=> import('./components/Expenses'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/new_users',
            name: 'new_users',
            components:{
                default:()=> import('./components/Users'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/expense_chart',
            name: 'expense_chart',
            components:{
                default:()=> import('./components/ExpenseChart'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/users_expenses',
            name: 'users_expenses',
            components:{
                default:()=> import('./components/UsersExpenses'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/roles',
            name: 'roles',
            components:{
                default:()=> import('./components/UserRoles'),
                Nav:()=> import('./views/pages/NavBar'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/create_account',
            name: 'create_account',
            components:{
                default:()=> import('./views/pages/CreateAccount'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        {
            path: '/forgot_password',
            name: 'forgot_password',
            components:{
                default:()=> import('./views/pages/ForgotPassword'),
                Footer:()=> import('./views/pages/Footer')
            }
        },
        
        
    ],
});