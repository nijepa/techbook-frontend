<template>
  <aside id="sidenav">
    <Loader v-if="!languages" />
    <ul v-else>
      <li
        :class="[
          isEmpty(tech) || tech._id === language.tech._id
            ? 'selected-tech'
            : '',
          lang && language._id === lang._id
            ? 'selected-lang'
            : '',
        ]"
        v-for="language in languages"
        :key="language._id"
        @click="selectLanguage(language)"
      >
        <img :src="getUrl(language.img_url, 'logos')" alt="" />
        <a>{{ language.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { isEmpty } from '../helpers/isEmptyObject'
import { getUrl } from '../helpers/getUrl'
import Loader from './Loader.vue'

export default {
  name: "Sidebar",

  components : {
    Loader
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    store.dispatch("fetchTechs");
    store.dispatch("fetchLanguages");

    const tech = computed(() => store.getters.getTech);
    const languages = computed(() => store.getters.getAllLanguages.data);
    const lang = computed(() => store.getters.getOneLanguage);

    const selectLanguage = async (language) => {
      if (language._id) await store.dispatch("fetchLanguage", language)
      await store.dispatch("articleClear")
      await store.dispatch("articlesClear")
      await store.dispatch("fetchArticles", language._id)
      await router.push("/");
    }

    return { getUrl, isEmpty, selectLanguage, tech, languages, lang }
  },

/*   data() {
    return {
      tech: {},
      languages: [],
    };
  }, */

/*   computed: {
    ...mapGetters([
      "getAllLanguages",
      "getOneLanguage",
      "getTech",
      "getAllArticles",
    ]),
    checkTech() {
      return this.getTech;
    },
  }, */
  methods: {
/*     ...mapActions([
      "fetchLanguages",
      "fetchLanguage",
      "fetchArticles",
      "articlesClear",
      "articleClear",
      "fetchTechs",
      "fetchTech",
    ]), */

    /* async selectLanguage(language) {
      if (language._id) await this.fetchLanguage(language);
      await this.articlesClear();
      await this.articleClear();
      await this.fetchArticles(language._id);
      this.$router.push("/");
    }, */

/*     isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }, */

/*     getSvgUrl(pic) {
      return require("@/assets/logos/" + pic + ".svg");
    }, */
  },

/*   async created() {
    await this.fetchTechs();
    await this.fetchLanguages();
    this.languages = this.getAllLanguages.data;
  }, */
};
</script>

<style></style>
