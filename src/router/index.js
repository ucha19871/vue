import Vue from "vue";
import Router from "vue-router";
import Main from "components/Main";
import Test from "components/Test";
import Test2 from "components/Test2";
import Login from "components/Login";
import Signup from "components/Signup";


Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {path: '/', name: 'Main', component: Main, meta : {auth:false}},
        {path: '/login', name: 'Login', component: Login, meta : {auth:false}},
        {path: '/logout', name: 'Logout', component: Login, meta : {auth:false}},
        {path: '/signup', name: 'Signup', component: Signup, meta : {auth:false}},
        {path: '/test', name: 'Test', component: Test, meta : {auth:false}},
        {path: '/test2', name: 'Test2', component: Test2, meta : {auth:true}},

    ]
});

