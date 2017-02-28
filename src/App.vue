<template>
    <div>

        <div id="app" class="container ">

            <navigation></navigation>

            <router-view></router-view>

            <br><br><br><br><br>
        </div>
        <div class="footer">
            <div class="notification">
                This container is <strong>Footer</strong> for the page.
            </div>
        </div>

    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    export default {
        name: 'app',
        components:{
            Navigation
        }
    }
</script>

