<template>
  <article>
    <h3>
      {{ getOneArticle.title }}
    </h3>
    <p>
      {{ getOneArticle.content }}
    </p>
    <code>
      {{ getOneArticle.code }}
    </code>
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