<template>
  <div class="section-heading" v-if="lang">
      <img :src="getUrl(lang.img_url, 'logos')" alt="" />
      <h1>{{ lang.title }}</h1>
      <ul v-if="lang.groups.length">
        <li v-for="group in lang.groups" :key="group" class="links__article" id="cont">

          <a href="" @click.prevent="selectGroup(group.name)" id="box">
            {{ group.name }}
          </a>

        </li>
      </ul>
    </div>

    <Loader v-if="!lang" />
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";
import { onMounted } from '@vue/runtime-core';
import Loader from '@/components/Loader.vue'

export default {
  name: "Front",

  props: { art: Array },

  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);
    let gru = ref('')

    const selectGroup = (group = null) => {
      console.log(group)
      gru.value = group
      if (!group) {
        store.dispatch("fetchArticles", lang);
      }
    };

    onMounted(() => selectGroup())

    return { lang, getUrl, selectGroup };
  },

  components: {
    Loader
  }
}
</script>

<style>

</style>