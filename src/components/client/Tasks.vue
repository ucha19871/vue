<template>
    <div class="task">
        <br>
        <h1>Tasks</h1>


        <table class="table  is-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Created</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks">
                <td>{{task.id}}</td>
                <td>{{task.title}}</td>
                <td>
                    <el-checkbox v-model="task.completed" @change="updateTask(task)"></el-checkbox>
                </td>
                <td>{{task.created_at}}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

    export default {
        name: 'tasks',
        data () {
            return {
                tasks: {}
            }
        },
        mounted(){
            this.getTasks()
        },
        methods: {
            getTasks() {
                this.$http.get(this.$conf.API_URL + 'task')
                    .then(res => this.tasks = res.data.data)
                    .catch(res => console.log(res))
            },
            createTask(){
                this.$http.get(this.$conf.API_URL + 'task/store')
                    .then(res => this.tasks.push(res.data.data) )
                    .catch(res => console.log(res))
            },
            updateTask(task){
                this.$http.put(this.$conf.API_URL + 'task/update/' + task.id, {"completed": task.completed})
                    .catch(res => console.log(res))
            }
        }
    }
</script>

<style scoped>
    .task {
        margin-top: 100px;
    }
</style>