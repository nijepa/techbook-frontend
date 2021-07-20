<template>
  <aside id="">
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
        <div v-if="language.groups.length" class="">
          <li v-for="group in language.groups" :key="group._id">
            {{ group.name }}
          </li>
        </div>
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
  name: "Fields",

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
      router.push("/main");
    }

    return { getUrl, isEmpty, selectLanguage, tech, languages, lang }
  },
};
</script>

<style></style>

