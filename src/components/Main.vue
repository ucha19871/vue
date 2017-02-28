<template>
    <div class="main">
        <h1>{{ msg }}</h1>
        <nav class="navbar navbar-default">
            <div class="container">
                <ul class="nav navbar-nav">

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
                authenticated: auth.checkAuth()
            }
        },
        methods: {
            logout() {
                auth.logout()
            }
        }
    }
</script>

