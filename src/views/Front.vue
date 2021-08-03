<template>
  <div class="home">
    <Header />
    <Sidebar />
    <!-- <Main msg="Technology book"/>  -->
    <router-view />
    <sidebar-right />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import SidebarRight from "@/components/sidebar/Sidebar_right.vue";

export default {
  name: "Front",

  components: {
    Header,
    Footer,
    Sidebar,
    SidebarRight
  },

  setup() {},
};
</script>

<style>
.div {
  color: #2f4f4f;
}
</style>
