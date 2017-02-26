<template>

  <div>
  <el-row>
    <el-col :span="8">
    
    <h2>{{ msg }}</h2>
    <el-input v-validate="'required'" name="tt"  type="text" @blur="testUpdated" :disabled="textApplied">
    <span v-show="errors.has('tt')" class="help is-danger">{{ errors.first('email') }}</span>
    <hr>

    </el-col>

    <el-col :span="8">
      <div class="column is-12">
          <label class="label" for="email">Email</label>
          <p :class="{ 'control': true }">
              <input v-validate="'required|email'" 
              :class="{'input': true, 'is-danger': errors.has('email') }" 
              name="email" 
              type="text"
               placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
      </div>
    </el-col>


  </el-row>
    
    <el-row>
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="ID">ID</abbr></th>
            <th><abbr title="Title">Title</abbr></th>
            <th><abbr title="Body">Body</abbr></th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="post in posts">
            <th>{{post.id}}</th>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
            
          </tr>
          
        </tbody>
      </table>
      

    </el-row>


  </div>

</template>

<script>

export default {
  name: 'test2',
  data () {
    return {
      posts: [],
      textApplied: false,
      msg: 'Welcome to Your Vue Project'
    }    
  },




  methods:{

      testUpdated(){
        this.textApplied = true;
        this.$emit('applied')
      },

      getPosts(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.posts = res.data )
        .catch(error => console.log(error));
      }


    },

    computed: {
    pageCount: function () {
      return this.posts.length
    }
  },

  created(){
    this.getPosts();
  }
}
</script>

