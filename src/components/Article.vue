<template>
  <article>
    <h3>
      {{ article.title }}
    </h3>
    <p>
      {{ article.description }}
    </p>
    <code v-if="article.code">
      {{ article.code }}
    </code>
    <ul v-if="article.links.length">
      <li v-for="link in article.links" :key="link">
        {{ link }}
      </li>
    </ul>
    <router-link to="/article">Edit</router-link>
    <button @click.prevent="deleteArticle">Delete</button>
  </article>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "Article",

  setup() {
    const store = useStore();
    const article = computed(() => store.getters.getOneArticle);

    const deleteArticle = () => {
      store.dispatch("articleDelete", article.value);
      store.dispatch("articleClear");
    };

    return { article, deleteArticle };
  },

  /*   computed: {
    ...mapGetters([ 'getAllArticles',
                    'getOneArticle' ]),
  },*/

  methods: {
    /*...mapActions([ 'fetchArticles',
                    'fetchArticle' ]), */

    selectArticle(article) {
      this.fetchArticle(article);
    },
  },
};
</script>

<style></style>
