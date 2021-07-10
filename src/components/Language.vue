<template>
  <section>
    <div class="section-heading" v-if="lang">
      <img :src="getUrl(lang.img_url, 'logos')" alt="" />
      <h1>{{ lang.title }}</h1>
      <ul v-if="lang.groups.length">
        <li v-for="group in lang.groups" :key="group" class="links__article" id="cont">

          <a href="" @click.prevent="selectGroup(group.name)" id="box">
            {{ group.name }}
          </a>

        </li>
      </ul>
    </div>

    <ul v-if="!article._id">
      <li
        v-for="article in articles"
        :key="article._id"
        @click="selectArticle(article)"
        class="articles__list"
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
import { computed, ref } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";
import { onMounted } from '@vue/runtime-core';

export default {
  name: "Language",

  props: { art: Array },

  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);
    const articles = computed(() => store.getters.getAllArticlesByGroups(gru.value));
    const article = computed(() => store.getters.getOneArticle);
    let gru = ref('')

    const selectArticle = async (article) => {
      await store.dispatch("fetchArticle", article);
    };

    const selectGroup = (group = null) => {
      gru.value = group
      if (!group) {
        store.dispatch("fetchArticles", lang);
      }
    };

    onMounted(() => selectGroup())

    return { lang, articles, article, selectArticle, getUrl, selectGroup };
  },

  components: {
    Article,
  },
};
</script>

<style>

</style>
