import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Hello from './views/pages/Hello'


export default new VueRouter({
    // base: '/ExpenseManager',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            components:{
                default:()=> import(/* webpackChunkName: "Login" */'./views/pages/Login'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/change_password',
            name: 'change_password',
            components:{
                default:()=> import(/* webpackChunkName: "ChangePassword" */'./views/pages/ChangePassword'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/home',
            name: 'home',
            components:{
                default:()=> import(/* webpackChunkName: "Home" */'./views/pages/Home'),
                Nav:()=> import(/* webpackChunkName: "NavBar" */'./views/pages/NavBar'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/new_category',
            name: 'new_category',
            components:{
                default:()=> import(/* webpackChunkName: "ExpenseCategory" */'./components/ExpenseCategory'),
                Nav:()=> import(/* webpackChunkName: "NavBar" */'./views/pages/NavBar'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/new_expense',
            name: 'new_expense',
            components:{
                default:()=> import(/* webpackChunkName: "Expenses" */'./components/Expenses'),
                Nav:()=> import(/* webpackChunkName: "NavBar" */'./views/pages/NavBar'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            },
        },
        {
            path: '/new_users',
            name: 'new_users',
            components:{
                default:()=> import(/* webpackChunkName: "Users" */'./components/Users'),
                Nav:()=> import(/* webpackChunkName: "NavBar" */'./views/pages/NavBar'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/expense_chart',
            name: 'expense_chart',
            components:{
                default:()=> import(/* webpackChunkName: "ExpenseChart" */'./components/ExpenseChart'),
                Nav:()=> import(/* webpackChunkName: "NavBar" */'./views/pages/NavBar'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/roles',
            name: 'roles',
            components:{
                default:()=> import(/* webpackChunkName: "UserRoles" */'./components/UserRoles'),
                Nav:()=> import(/* webpackChunkName: "NavBar" */'./views/pages/NavBar'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        {
            path: '/create_account',
            name: 'create_account',
            components:{
                default:()=> import(/* webpackChunkName: "CreateAccount" */'./views/pages/CreateAccount'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            },
            
        },
        {
            path: '/forgot_password',
            name: 'forgot_password',
            components:{
                default:()=> import(/* webpackChunkName: "ForgotPassword" */'./views/pages/ForgotPassword'),
                Footer:()=> import(/* webpackChunkName: "Footer" */'./views/pages/Footer')
            }
        },
        
        
    ],
});