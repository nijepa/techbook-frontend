<template>
  <section>
    <div class="section-heading" v-if="lang">
      <img :src="getUrl(lang.img_url, 'logos')" alt="" />
      <h1>{{ lang.title }}</h1>
    </div>

    <ul v-if="!article._id">
      <li
        v-for="article in articles"
        :key="article._id"
        @click="selectArticle(article)"
      >
        <h3>{{ article.title }}</h3>
      </li>
    </ul>

    <div class="article" v-else>
      <Article />
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import Article from "./Article.vue";
import { computed } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";

export default {
  name: "Language",

  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);
    const articles = computed(() => store.getters.getAllArticles);
    const article = computed(() => store.getters.getOneArticle);

    const selectArticle = async (article) => {
      await store.dispatch("fetchArticle", article);
    };

    return { lang, articles, article, selectArticle, getUrl };
  },

  components: {
    Article,
  },
};
</script>

<style></style>
