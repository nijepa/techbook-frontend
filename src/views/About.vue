<template>
  <div class="home">
    <Header />
    <Sidebar />
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Main',
  components: {
      Sidebar, Header
    },
}
</script>
