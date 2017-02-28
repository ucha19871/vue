<template>
    <div class="main">
        <h1>Main Public area</h1>

    </div>
</template>

<script>
    import auth from '../auth/index'

    export default {
        name: 'main',
        data () {
            return {
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

