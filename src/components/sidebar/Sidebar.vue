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
          lang && language._id === lang._id ? 'selected-lang' : '',
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
import Loader from "@/components/Loader.vue";
import HeaderLink from "@/components/header/HeaderLink";
import { isEmpty } from "@/helpers/isEmptyObject";
import { getUrl } from "@/helpers/getUrl";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "Sidebar",

  components: {
    Loader,
    HeaderLink,
  },

  setup() {
    const store = useStore();

    store.dispatch("fetchLanguages");

    const tech = computed(() => store.getters.getTech);
    const languages = computed(() =>
      store.getters.getLanguagesByTechs(tech.value)
    );
    const lang = computed(() => store.getters.getOneLanguage);

    const selectLanguage = async (language) => {
      if (language._id) await store.dispatch("fetchLanguage", language);
      await store.dispatch("articleClear");
      await store.dispatch("articlesClear");
      await store.dispatch("fetchArticles", language);
      await store.dispatch("changeLoading", false);
    };

    return { getUrl, isEmpty, selectLanguage, tech, languages, lang };
  },
};
</script>

<style lang="scss"></style>
