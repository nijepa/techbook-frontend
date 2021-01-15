<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Header />
    <Sidebar /> -->
    <Main msg="Technology book"/>
  </div>
</template>

<script>
// @ is an alias to /src
  // import Header from '@/components/Header.vue'
  import Main from '@/components/Main.vue';
  //import Sidebar from '@/components/Sidebar.vue';

  export default {
    name: 'Home',
    
    components: {
      Main, //Sidebar, Header
    },
  }
</script>
