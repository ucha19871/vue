import Vue from "vue";
import Router from "vue-router";
import Main from "components/Main";
import Test from "components/Test";
import Test2 from "components/Test2";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Main', component: Main},
        {path: '/test', name: 'Test', component: Test},
        {path: '/test2', name: 'Test2', component: Test2},

    ]
})
