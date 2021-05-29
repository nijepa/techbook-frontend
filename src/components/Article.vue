<template>
  <article>
    <h3>
      {{ getOneArticle.title }}
    </h3>
    <p>
      {{ getOneArticle.description }}
    </p>
    <code v-if="getOneArticle.code">
      {{ getOneArticle.code }}
    </code>
    <ul v-if="getOneArticle.links.length">
      <li v-for="link in getOneArticle.links" :key="link">
        {{ link }}
      </li>
    </ul>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Article',

  computed: {
    ...mapGetters([ 'getAllArticles',
                    'getOneArticle' ]),
  },

  methods: {
    ...mapActions([ 'fetchArticles',
                    'fetchArticle' ]),

    selectArticle(article) {
      this.fetchArticle(article);
    },
  },

  created()  {
    //this.fetchArticle();
  }
}
</script>

<style>

</style>