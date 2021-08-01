<template>
  <aside id="sidenav">
    <div class="tech__list">
      <header-link />
    </div>
    

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
        <a>{{ language.title }}</a>
        <img :src="getUrl(language.img_url, 'logos')" alt="" />
      </li>
    </ul>
  </aside>
</template>

<script>
import { computed } from "@vue/reactivity";
//import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { isEmpty } from '../helpers/isEmptyObject'
import { getUrl } from '../helpers/getUrl'
import Loader from './Loader.vue'
import HeaderLink from "@/components/header/HeaderLink";

export default {
  name: "Sidebar",

  components : {
    Loader, HeaderLink
  },

  setup() {
    //const router = useRouter();
    const store = useStore();

    //store.dispatch("fetchTechs");
    store.dispatch("fetchLanguages");

    const tech = computed(() => store.getters.getTech);
    const languages = computed(() => store.getters.getLanguagesByTechs(tech.value));
    console.log('000', tech.value)
    const lang = computed(() => store.getters.getOneLanguage);

    const selectLanguage = async (language) => {
      if (language._id) await store.dispatch("fetchLanguage", language)
      await store.dispatch("articleClear")
      await store.dispatch("articlesClear")
      await store.dispatch("fetchArticles", language)
      //router.push("/main");
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

<style lang="scss">
  .tech__list {
    display: grid;
    justify-items: stretch;
    border-bottom: 2px solid $blue-lighter;

    .nav-card {
      width: auto;
      padding: 0;
      margin: 0;
      background-image: none;
      border-radius: 0;
      box-shadow: none;
      //transform: rotate(0) scale(1);
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: .5em;
      text-align: right;
      
      img {
        width: 30px;
        height: 30px;
      }

      h3 {
        font-size: 1em;
        color: $blue-dark !important;
        font-weight: 400;
      }
    }

    .nav-card:hover {
      background: $blue-lighter;
    }
  }

  .sel-tech {
    background: $blue-lighter !important;
    border-right: 5px solid #dba81a;

    h3 {
      color: $blue-darkest !important;
      font-weight: 600 !important;
    }
  }

  @media(max-width: 700px) {
    .tech__list {
      width: 50px;

      .nav-card {
        width: 59px;
      }
      
      h3 {
        display: none;
      }
    }
  }
</style>
