<template>
  <div class="home">
    <Header />
    <Sidebar />
    <Main msg="Technology book"/>

  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'abo',
  components: {
      Sidebar, Header, Main
    },
}
</script>
