<template>
  <LoginMainPage msg="Welcome to Your Vue.js App 여기가 그거구만"/>
</template>

<script>
import LoginMainPage from './views/common/LoginMainPage.vue'

export default {
  name: 'App',
  components: {
    LoginMainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
