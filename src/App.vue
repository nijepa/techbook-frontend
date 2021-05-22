<template>
  <div class="home">
    <Header />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Sidebar from '@/components/Sidebar.vue';

  export default {
    //name: 'Home',
    
    components: {
      Sidebar, Header
    },
  }
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
