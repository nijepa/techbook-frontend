<template>
  <main>
    <div class="" v-if="!isEmpty(lang)">
      <Language :art="articles" />
      <!-- <article-nav /> -->
      <router-view/>
    </div>
    <div class="main-title" v-else>
      <h1>{{ msg }}</h1>
      <img :src="getUrl('coding')" alt="" />
    </div>
  </main>
</template>

<script>
import Language from "@/components/Language.vue";
//import ArticleNav from "@/components/Article_nav.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { isEmpty } from "@/helpers/isEmptyObject";
import { getUrl } from "@/helpers/getUrl";

export default {
  name: "Main",

  setup() {
    const store = useStore();
    
    const lang = computed(() => store.getters.getOneLanguage);
    const articles = computed(() => store.getters.getAllArticles);

    return { lang, articles, isEmpty, getUrl };
  },

  props: {
    msg: String,
  },

  components: {
    Language,
    //ArticleNav,
  },
};
</script>
