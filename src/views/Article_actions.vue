<template>
  <main class="">
    <h1>New</h1>
    <form class="go-bottom" action="">
      <div>
        <input
          v-model="article.title"
          id="name"
          name="name"
          type="text"
          required
        />
        <label for="name">Title</label>
      </div>
      <div>
        <textarea
          v-model="article.description"
          id="desc"
          name="desc"
          rows="10"
        ></textarea>
        <label for="desc">Description</label>
      </div>
      <div>
        <textarea
          v-model="article.code"
          class="coding"
          id="code"
          name="code"
          rows="15"
        ></textarea>
        <label for="code">Code</label>
      </div>
      <button type="submit" @click="saveArticle()">Save</button>
    </form>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ArticleActions",

  data() {
    return {
      article: {
        title: "",
        description: "",
        code: "",
        lang: "",
      },
    };
  },

  computed: {
    ...mapGetters(["getAllArticles", "getOneArticle", "getOneLanguage"]),
  },

  methods: {
    ...mapActions(["fetchArticles", "fetchArticle", "addArticle"]),

    saveArticle() {
      this.article.lang = this.getOneLanguage._id;
      this.addArticle(this.article);
    },
  },
};
</script>

<style></style>
