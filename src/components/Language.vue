<template>
  <section>
    <div class="section-heading" v-if="lang">
      <img :src="getUrl(lang.img_url, 'logos')" alt="" />
      <h1>{{ lang.title }}</h1>
      <ul v-if="lang.groups.length">
        <li v-for="group in lang.groups" :key="group" class="links__article">
          <a href="" @click.prevent="selectGroup(group.name)">{{
            group.name
          }}</a>
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
    let art = computed(() => store.getters.getAllArticles);
    const article = computed(() => store.getters.getOneArticle);
    let articles = ref(art)

    const selectArticle = async (article) => {
      await store.dispatch("fetchArticle", article);
    };

    const selectGroup = (group = null) => {
      
      // const a = articles.value.map((element) => {
      //   return {...element, groups: element.groups.filter((subElement) => subElement === group)}
      // })
/*       if (group) {
        articles = props.art.filter(val => {
          let filteredArticles = val.groups.some(g => g === group)
          return filteredArticles
        })  
      } else {
        articles = props.art.filter(val => {
          let menu = val.groups.some(g => g !== group)
          return menu
        })
      } */
      articles = computed(() => store.getters.getAllArticlesByGroups(group));
    };

    onMounted(() => selectGroup())

    return { lang, articles, article, selectArticle, getUrl, selectGroup };
  },

  components: {
    Article,
  },
};
</script>

<style></style>
