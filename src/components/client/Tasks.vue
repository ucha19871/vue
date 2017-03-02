<template>
    <div class="task">
        <br>
        <el-button type="primary" @click="dialogVisible = true" icon="plus">New Task</el-button>

        <el-dialog title="Create new task" v-model="dialogVisible" size="tiny">

            <form @submit.prevent="validateBeforeSubmit('form-2')" class="columns column is-multiline is-12" data-vv-scope="form-2">

                <div class="column is-12">
                    <label class="label">Title</label>
                    <p class="control has-icon has-icon-right">
                        <textarea name="title" v-model="title" v-validate="'required|min:5|max:255'" :class="{'textarea': true, 'is-danger': errors.has('title') }" type="text" placeholder="Text"></textarea>
                        <i v-show="errors.has('title')" class="fa fa-warning"></i>
                        <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
                    </p>
                </div>

                <span slot="footer" class="dialog-footer">
                    <button class="button is-primary" :class="{'is-loading':loading}" type="submit" name="button">Save</button>
                </span>
            </form>

        </el-dialog>

        <hr>
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
                    <el-checkbox v-model="task.completed" @change.prevent="updateTask(task)"></el-checkbox>
                </td>
                <td>{{task.created_at}}</td>
            </tr>
            </tbody>
        </table>
        <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
    </div>
</template>

<script>

    export default {
        name: 'tasks',
        data () {
            return {
                dialogVisible: false,
                loading:false,
                tasks: {},
                title: '',
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
                this.$http.post(this.$conf.API_URL + 'task/store',
                    {
                        'title': {'en': this.title, 'ge': this.title},
                        "completed" : 0,
                        'user_id' : 1
                    })
                    .then(res => this.tasks.push(res.data.data))
                    .catch(res => console.log(res))
            },
            updateTask(task){
                this.$http.put(this.$conf.API_URL + 'task/update/' + task.id, {"completed": task.completed})
                    .catch(res => console.log(res))
            },
            validateBeforeSubmit() {
                this.loading = true;
                // Validate All returns a promise and provides the validation result.
                this.$validator.validateAll().then(success => {

                    if (! success) {
                        // handle error
                        return;
                    }else {
                        this.createTask()
                        this.loading = false;
                    }

                });
            }
        }
    }
</script>

<style scoped>
    .task {
        margin-top: 100px;
    }
</style>