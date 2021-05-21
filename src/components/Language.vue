<template>
  <section>
    <div class="section-heading" v-if="getOneLanguage">
      <img :src="getSvgUrl(getOneLanguage.logo)" alt="">
      <h1> {{ getOneLanguage.name }}</h1>
    </div>
    
    <!--  <article-nav />-->

    <ul v-if="!getOneArticle.id">
      <li v-for="article in getAllArticles" 
          :key="article.id"
          @click="selectArticle(article)">
        <h3>{{ article.title }}</h3>
      </li>
    </ul>

    <div class="article" v-else>
      <!-- <a @click="articleClear()">All</a> -->
      <Article />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Article from './Article.vue';
//import ArticleNav from '@/components/Article_nav.vue';

export default {
  name: 'Language',

  components: {
    Article, //ArticleNav
  },

  computed: {
    ...mapGetters([ 'getAllLanguages',
                    'getOneLanguage',
                    'getAllArticles',
                    'getOneArticle' ]),
  },

  methods: {
    ...mapActions([ 'fetchLanguages', 
                    'fetchLanguage',
                    'fetchArticles',
                    'fetchArticle',
                    'articleClear' ]),

    selectArticle(article) {
      this.fetchArticle(article);
    },

    getSvgUrl(pic) {
      return require('../assets/logos/' + pic + '.svg');
    },
  },

  created()  {
    this.fetchLanguage();
    this.fetchArticles();
  }
}
</script>

<style>

</style>