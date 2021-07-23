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

    <Loader v-if="!articles.length" />
    <transition-group name="component-fade" mode="out-in">
    <ul v-if="!article._id">
      
      <li
        v-for="article in articles"
        :key="article._id"
        @click="selectArticle(article)"
        class="articles__list"
      >
      <transition name="component-fade" mode="out-in">
        <h3>{{ article.title }}</h3>
        </transition>
      </li>
      
    </ul>

    <div class="article" v-else>
      <Article />
    </div>
    </transition-group>
  </section>
</template>

<script>
import { useStore } from "vuex";
import Article from "./Article.vue";
import { computed, ref } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";
import { onMounted } from '@vue/runtime-core';
import Loader from './Loader.vue'

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
        //store.dispatch("fetchArticles", lang);
      }
    };

    onMounted(() => selectGroup())

    return { lang, articles, article, selectArticle, getUrl, selectGroup };
  },

  components: {
    Article, Loader
  },
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.6s ease;
  max-height: 0px;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
  max-height: 0px;
}

</style>
