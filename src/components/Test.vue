<template>
    <div class="test">

        
        <h2>Testing Test2 component</h2>
        <test2 @applied="onApplied" :disabled="textApplied"></test2>
        <div v-if="textApplied">Text was applied</div>



        <hr>
        <br><br><br>
        <ul>
            <li v-for="name in names"><h3>{{name}}</h3></li>
        </ul>


        <input type="text" v-model="newName" @keyup.enter="addName">
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

        <hr>
        <h2>Modal</h2>
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete"></button>
                </header>
                <section class="modal-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci consectetur consequuntur,
                    enim esse eveniet facilis fugiat iure laborum laudantium libero maxime odit perspiciatis quasi
                    repellat sequi tempora tenetur voluptatibus.
                </section>
                <footer class="modal-card-foot">
                    <a class="button is-success">Save changes</a>
                    <a class="button">Cancel</a>
                </footer>
            </div>
        </div>


        <br><br><br>
    </div>
</template>

<script>
    import Test2 from './Test2.vue';
    export default {
        name: 'test',
        data () {
            return {
                textApplied: false,
                isActiveModal: false,
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
            },

            onApplied(){
                this.textApplied = true;
                //alert('Parrent applied');
            }

        },

        computed: {
            reverseMessage(){
                return this.buttonTitle.split('').reverse().join('');
            },
            incompleteTasks(){
                return this.tasks.filter(task => !task.completed);
            }
        },

        components: {
            'test2': Test2
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