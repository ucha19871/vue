import Vue from "vue";
import Router from "vue-router";
import Main from "components/Main";
import Test from "components/Test";
import Test2 from "components/Test2";
import Login from "components/Login";
import Signup from "components/Signup";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Main', component: Main},
        {path: '/login', name: 'Login', component: Login},
        {path: '/signup', name: 'Signup', component: Signup},
        {path: '/test', name: 'Test', component: Test},
        {path: '/test2', name: 'Test2', component: Test2},

    ]
})
