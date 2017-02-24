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
        <hr>
        <h3>{{reverseMessage}}</h3>
        <hr>
        <h3>Tasks</h3>
        <ul>
            <li v-for="task in tasks">{{task.title}} <button :disabled="task.completed">Complete Task</button></li>
        </ul>

        <h3>inCompleted Tasks</h3>
        <ul>
            <li v-for="itask in incompleteTasks">{{itask.title}} </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                isLoading: false,
                className: 'color-red',
                buttonTitle: 'text to show  up on hovering on the button',
                newName: '',
                names: ['Ucha', 'Tucha', 'Dgucha', 'Bucha', 'Nucha', 'Sucha', 'Klucha', 'Tynucha'],
                tasks:[
                    {title:'Go to store',completed:true},
                    {title:'Finish coding',completed:false},
                    {title:'Clean table',completed:true},
                    {title:'Go to Bank',completed:false},
                    {title:'Clear inbox',completed:true},
                ]
            }
        },

        methods: {
            addName(){
                this.names.push(this.newName)
                this.newName = '';
                console.log('Clicked')
            },

            toggleClass(){
                this.isLoading = !this.isLoading;
            }

        },

        computed: {
            reverseMessage(){
                return this.buttonTitle.split('').reverse().join('');
            },
            incompleteTasks(){
                return this.tasks.filter(task => !task.completed);
            }
        }


    }
</script>

<style scoped>
    .test {
        text-align: left;
    }

    .color-red {
        color: red;
    }

    .color-blue {
        color: blue;
    }

    .isLoading {
        background: red;
    }
</style>