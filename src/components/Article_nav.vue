<template>
  <div class="article-nav">
    <a class="article-link" @click="clearArticle"
      ><img :src="getUrl('list')" alt="" /> All</a
    >
    <div class="article-actions">
      <a
        class="article-link"
        v-if="!isEmpty(article)"
        @click="deleteArticle(article)"
        ><img :src="getUrl('delete')" alt="" /> Delete</a
      >
      <a class="article-link" v-if="!isEmpty(article)" @click="addArticle(true)"
        ><img :src="getUrl('edit')" alt="" /> Edit</a
      >
      <a class="article-link" @click="addArticle"
        ><img :src="getUrl('add')" alt="" /> Add</a
      >
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getUrl } from "../helpers/getUrl";
import { isEmpty } from "../helpers/isEmptyObject";

export default {
  name: "ArticleNav",

  setup() {
    const store = useStore();
    const router = useRouter();

    const article = computed(() => store.getters.getOneArticle);

    const clearArticle = () => {
      store.dispatch("articleClear");
    };

    const addArticle = (isEdit = false) => {
      isEdit || clearArticle();
      router.push("/article");
    };

    const deleteArticle = (article) => {
      store.dispatch("articleDelete", article);
      store.dispatch("articleClear");
    };

    return {
      addArticle,
      deleteArticle,
      clearArticle,
      article,
      isEmpty,
      getUrl,
    };
  },
};
</script>

<style></style>
