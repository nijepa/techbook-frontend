<template>
  <div class="home">
    <Header />
    <!-- <Sidebar />  -->
    <Fields />
    <!-- <Main msg="Technology book"/> -->

  </div>
</template>
<script>
import Header from '@/components/Header.vue'
//import Sidebar from '@/components/Sidebar.vue';
//import Main from '@/components/Main.vue';
import Fields from '@/components/Fields.vue';

export default {
  name: 'abo',
  components: {
      Fields, Header, //Sidebar,  //Main
    },
}
</script>
