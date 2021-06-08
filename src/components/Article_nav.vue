<template>
  <div class="article-nav">
    <a class="article-link" @click="clearArticle"
      ><img :src="getSvgUrl('list')" alt="" /> All</a
    >
    <div class="article-actions">
      <a class="article-link" @click="addArticle"
        ><img :src="getSvgUrl('add')" alt="" /> Add</a
      >
      <!-- <router-link to="/article"><img :src="getSvgUrl('add')" alt=""> Add</router-link> -->
      <!-- <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('add')" alt=""> Add</a> -->
      <!-- <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('edit')" alt=""> Edit</a>
      <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('delete')" alt=""> Delete</a> -->
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "ArticleNav",

  setup() {
    const store = useStore();
    const router = useRouter();

    const clearArticle = () => {
      store.dispatch("articleClear");
    };

    const addArticle = () => {
      clearArticle();
      router.push("/article");
    };

    const getSvgUrl = (pic) => {
      return require("../assets/images/" + pic + ".svg");
    };

    return { addArticle, clearArticle, getSvgUrl };
  },

  methods: {
    //...mapActions([ 'articleClear' ]),
    /*       getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg');
      }, */
  },
};
</script>

<style></style>
