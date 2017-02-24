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
            <li v-for="task in tasks">{{task.title}} <button :disabled="task.completed" @click="completeTask(task.id)">Complete</button></li>
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
                    {id:1,title:'Go to store',completed:true},
                    {id:2,title:'Finish coding',completed:false},
                    {id:3,title:'Clean table',completed:true},
                    {id:4,title:'Go to Bank',completed:false},
                    {id:5,title:'Clear inbox',completed:true},
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
            },

            completeTask(id){
                let t = this.tasks.find(task => task.id == id);
                return t.completed = true
                //console.log(t);
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