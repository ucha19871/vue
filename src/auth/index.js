import {router} from "vue-router";
import axios from "axios";
const API_URL = 'http://api.local/api/'
const LOGIN_URL = API_URL + 'auth'
const SIGNUP_URL = API_URL + 'register'


export default {

    user: {
        authenticated: false
    },

    login(context, creds, redirect) {
        axios.post(LOGIN_URL, creds)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                this.user.authenticated = true
                if (redirect) {
                    //this.$router.go('/')
                    window.location.href = redirect
                }
            })
            .catch(error => context = error);
    },

    // signup(context, creds, redirect) {
    //     context.$http.post(SIGNUP_URL, creds, (data) => {
    //         localStorage.setItem('token', data.token)
    //
    //         this.user.authenticated = true
    //
    //         if (redirect) {
    //             router.go(redirect)
    //         }
    //
    //     }).error((err) => {
    //         context.error = err
    //     })
    // },

    logout() {
        localStorage.removeItem('token')
        this.user.authenticated = false
    },

    checkAuth() {
        var jwt = localStorage.getItem('token')
        if (jwt) {
            return this.user.authenticated = true
        }
        else {
            return this.user.authenticated = false
        }
    },

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }
}