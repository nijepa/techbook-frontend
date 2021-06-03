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
      <ul v-if="article.links.length">
        <li
          v-for="linki in article.links"
          :key="linki"
          @click="updateLink(linki)"
        >
          {{ linki }}
          <button @click="removeLink(linki)">Remove</button>
        </li>
      </ul>
      <div class="links">
        <div>
          <input v-model="link" id="link" name="link" type="text" required />
          <label for="link">Link</label>
        </div>
        <button @click="saveLink(link)">Save link</button>
      </div>
      <button type="submit" @click="saveArticle()">Save</button>
      <button type="submit" @click="cancelSave()">Cancel</button>
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
        links: [],
      },
      link: "",
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

    cancelSave() {
      this.$router.push("/");
    },

    saveLink(link) {
      console.log('rrr')
      this.article.links.push(link);
      this.link = "";
    },

    updateLink(link) {
      this.link = link;
    },

    removeLink(link) {
      this.article.links = this.article.links.filter((a) => a !== link);
    },
  },
};
</script>

<style>
.links {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>
