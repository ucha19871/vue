<template>

  <div>
  <el-row>
    <el-col :span="8">
    
    <h2>{{ msg }}</h2>
    <el-input type="text" @blur="testUpdated" :disabled="textApplied">
    <hr>

    </el-col>
  </el-row>
    
    


  </div>

</template>

<script>

export default {
  name: 'test2',
  data () {
    return {
      textApplied: false,
      msg: 'Welcome to Your Vue Project'
    }    
  },

  methods:{

      testUpdated(){
        this.textApplied = true;
        this.$emit('applied')
      }

    }
}
</script>

