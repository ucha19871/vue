<template>

  <div>
    
    <h2>{{ msg }}</h2>
    <input type="text" @blur="testUpdated" :disabled="textApplied">
    
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

