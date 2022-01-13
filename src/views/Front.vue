<template>
  <div class="home">
    <Header />
    <Sidebar />
    <!-- <Main msg="Technology book"/>  -->
    <router-view />
    <sidebar-right v-if="width > 1282" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import SidebarRight from "@/components/sidebar/Sidebar_right.vue";
import useBreakpoints from "@/composables/useBreakpoints";

export default {
  name: "Front",

  components: {
    Header,
    Footer,
    Sidebar,
    SidebarRight
  },

  setup() {
    const { width, type } = useBreakpoints();

    return {
      width,
      type
    }
  },
};
</script>

<style>

.div {
  color: #2f4f4f;
}
</style>
