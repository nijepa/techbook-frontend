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
/* import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";
import { onMounted } from '@vue/runtime-core'; */
//import Loader from '@/components/Loader.vue'

export default {
  name: "Front",
components: {
  Header, Sidebar, Main
},









  props: { art: Array },

  setup() {
  /*   const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);
    let gru = ref('')

    const selectGroup = (group = null) => {
      console.log(group)
      gru.value = group
      if (!group) {
        store.dispatch("fetchArticles", lang);
      }
    };

    onMounted(() => selectGroup())

    return { lang, getUrl, selectGroup }; */
  },
}
</script>

<style>

</style>