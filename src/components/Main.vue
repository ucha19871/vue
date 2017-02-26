<template>
  <div class="main">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <nav>
      <router-link to="test">Test</router-link>
      <router-link to="test2">Test 2</router-link>
    </nav>

  </div>
</template>

<script>
import Test from './Test.vue';
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue Project'
    }
  },
  methods:{
    something(){
      alert('something')
    },
    doSomething(){
      Event.$on('applied',() => alert('Something'))
    }
  },

}
</script>

