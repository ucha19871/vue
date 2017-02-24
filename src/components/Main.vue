<template>
  <div class="main">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <nav>
      <router-link to="test">Test</router-link>
      <router-link to="test">Something</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue Project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
