<template>
  <aside id="sidenav">
    <ul>
      <li
        :class="[
          isEmpty(getTech) || getTech._id === language.tech._id
            ? 'selected-tech'
            : '',
          getOneLanguage && language._id === getOneLanguage._id
            ? 'selected-lang'
            : '',
        ]"
        v-for="language in languages"
        :key="language._id"
        @click="selectLanguage(language)"
      >
        <img :src="getSvgUrl(language.img)" alt="" />
        <a>{{ language.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Sidebar",

  data() {
    return {
      tech: {},
      languages: [],
    };
  },

  computed: {
    ...mapGetters([
      "getAllLanguages",
      "getOneLanguage",
      "getTech",
      "getAllArticles",
    ]),
    checkTech() {
      return this.getTech;
    },
  },
  methods: {
    ...mapActions([
      "fetchLanguages",
      "fetchLanguage",
      "fetchArticles",
      "articlesClear",
      "articleClear",
      "fetchTechs",
      "fetchTech",
    ]),

    async selectLanguage(language) {
      await this.fetchLanguage(language);
      await this.articlesClear();
      await this.articleClear();
      await this.fetchArticles(language._id);
    },

    isEmpty(obj) {
      return Object.keys(obj).length === 0;
    },

    getSvgUrl(pic) {
      return require("@/assets/logos/" + pic + ".svg");
    },
  },

  async created() {
    await this.fetchTechs();
    await this.fetchLanguages();
    this.languages = this.getAllLanguages.data;
  },
};
</script>

<style></style>
