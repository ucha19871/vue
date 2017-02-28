<template>
    <div class="main">
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>

        <nav class="navbar navbar-default">
            <div class="container">
                <ul class="nav navbar-nav">
                    <router-link v-if="!user.authenticated"  to="test">Test</router-link> |
                    <router-link v-if="!user.authenticated"  to="test2">Test 2</router-link> |
                    <router-link v-if="!user.authenticated"  to="login">Login</router-link> |
                    <router-link v-if="!user.authenticated"  to="signup">Sign Up</router-link>  |
                    <router-link v-if="!user.authenticated"  to="logout" @click="logout()">Logout</router-link>  |
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import auth from '../auth/index'
    export default {
        name: 'main',
        data () {
            return {
                msg: 'Welcome to Your Vue Project',
                user: auth.user
            }
        },
        methods: {
            logout() {
                auth.logout()
            }
        }
    }
</script>

