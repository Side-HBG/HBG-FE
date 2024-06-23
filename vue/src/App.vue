<template>
  <commonHeader />
  <router-view />
  <commonFooter />
</template>

<script>
import commonHeader from './views/common/commonHeader.vue';
import commonFooter from './views/common/commonFooter.vue';

export default {
  name: 'App',
  components:{
    commonHeader,
    commonFooter
  },
  mounted(){
    console.log(process.env.VUE_APP_API_URL);
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
