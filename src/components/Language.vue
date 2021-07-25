<template>
  <section>
    <div class="section-headin" v-if="lang">
      <div class="heading__lang" @click.prevent="selectGroup()">
        <img :src="getUrl(lang.img_url, 'logos')" alt="" />
        <h1>{{ lang.title }}</h1>
      </div>
      
      <ul v-if="lang.groups.length">
        <li
          v-for="group in lang.groups"
          :key="group"
          class="links__article"
          :class="isEmpty(gru) ? '' : group._id === gru._id ? 'group__selected' : ''"
          id="cont"
        >
          <a href="" @click.prevent="selectGroup(group)" id="box">
            {{ group.name }}
          </a>
        </li>
      </ul>
    </div>

    <article-nav />
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
            <h4>{{ article.title }}</h4>
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
import ArticleNav from "@/components/Article_nav.vue";
import { computed, ref } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";
//import { onMounted } from "@vue/runtime-core";
import { isEmpty } from '../helpers/isEmptyObject'
import Loader from "./Loader.vue";

export default {
  name: "Language",

  props: { art: Array },

  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);
    const articles = computed(() =>
      store.getters.getAllArticlesByGroups(gru.value)
    );
    const article = computed(() => store.getters.getOneArticle);
    let gru = ref(null);

    const selectArticle = async (article) => {
      await store.dispatch("fetchArticle", article);
    };

    const selectGroup = (group = null) => {
      gru.value = group;
      console.log(gru)
      if (isEmpty(group)) {
        //store.dispatch("fetchArticles", lang);
      }
    };

    //onMounted(() => selectGroup());

    return { lang, articles, article, selectArticle, getUrl, selectGroup, isEmpty, gru };
  },

  components: {
    Article,
    Loader,
    ArticleNav,
  },
};
</script>

<style lang="scss">
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

.group__selected a {
  color: $blue-lightest !important;
}

.section-headin {
  display: flex;
  align-items: center;
  //margin-left: .3em;
  background-color: $blue-light;
  border-bottom: 2px solid $blue-lightest;
  border-left: 2px solid $blue-lightest;
  border-top: 5px solid $blue-lightest;

  .heading__lang {
    display: flex;
    cursor: pointer;
    img {
      width: 25px;
      height: auto;
      margin-left: 0.5em;
    }

    h1 {
      font-size: 1em;
      margin: 0 0.5em;
    }
  }

  .heading__lang:hover {
    color: $blue-lightest;
  }

  

  ul {
    margin: 0 0.5em;
  }

  ul .links__article {
    margin: 0;
    border-radius: 1px;
    position: relative;
    padding: 0.3em 0.8em;
  }

  ul .links__article:nth-child(odd)::before {
    content: "";
    color: $blue-lightest;
    border-right: 2px solid $blue-lightest;
    //position: relative;
    //display: inline-block;
    //left: -5px;
    transform: rotate(20deg);
    display: block;
    position: absolute;
    top: -2px;
    left: -5px;
    width: 2px;
    height: 110%;
  }

  ul .links__article:nth-child(even)::after {
    content: "";
    color: $blue-lightest;
    border-right: 2px solid $blue-lightest;
    //position: relative;
    //display: inline-block;
    //left: 5px;
    transform: rotate(-20deg);
    display: block;
    position: absolute;
    top: -2px;
    left: -5px;
    width: 2px;
    height: 110%;
  }
}
</style>
