<template>
    <div class="task">
        <h1>Tasks</h1>

        <table class="table  is-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks">
                    <td>{{task.id}}</td>
                    <td>{{task.title}}</td>
                    <td><el-checkbox v-model="task.completed"></el-checkbox></td>
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
            console.log(this.tasks)
        },
        methods: {
            getTasks() {
                this.$http.get(this.$conf.API_URL + 'task')
                    .then(res => this.tasks = res.data.data)
                    .catch(res => console.log(res))
            }
        }
    }
</script>

