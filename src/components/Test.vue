<template>
    <div class="test">

        <ul>
            <li v-for="name in names"><h3>{{name}}</h3></li>
        </ul>


        <input type="text" v-model="newName">
        <button @click="addName">Add Name</button>

        <hr>
        <button :title="buttonTitle">Hover over</button>

        <h1 :class="className">Something </h1>

        <button :class="{'isLoading':isLoading}" @click="toggleClass">Cllllick</button>


    </div>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                isLoading: false,
                className:'color-red',
                buttonTitle: 'text to show  up on hovering on the button',
                newName:'',
                names: ['Ucha', 'Tucha', 'Dgucha', 'Bucha', 'Nucha', 'Sucha', 'Klucha', 'Tynucha']
            }
        },

        methods:{
            addName(){
                this.names.push(this.newName)
                this.newName = '';
                console.log('Clicked')
            },

            toggleClass(){
                this.isLoading = !this.isLoading;
            }

        }


    }
</script>

<style scoped>
    .test {
        text-align: left;
    }
    .color-red{
        color:red ;
    }
    .color-blue{
        color:blue ;
    }
    .isLoading{
        background: red;
    }
</style>