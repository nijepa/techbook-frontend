<template>
  <div class="content-side">
    <div class="lang-about">
      <img :src="getUrl(lang.img_url, 'logos')" alt="" />
      <h1>{{ lang.title }}</h1>
      <p>{{ lang.description }}</p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { getUrl } from "@/helpers/getUrl";

export default {
  name: 'SidebarRight',

  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);

    return { lang, getUrl }
  }
}
</script>

<style lang="scss">
    
  .content-side {
    grid-area: sideright;
    grid-column: auto;
    display: grid;
    justify-content: left;
    align-content: baseline;
    background-color: $blue-light;
    border-top: 5px solid $blue-lightest;
    border-bottom: 5px solid $blue-lightest;
    border-left: 2px solid $blue-lightest;
    margin-top: 50px;

    .lang-about {
      margin: .5em .5em;
      padding: .3em;
      border: 2px solid $blue-lightest;
      border-radius: 3px;
      box-shadow: 0px 0px 3px 1px #6887aebf;
      background-color: $blue-lighter;
      min-width: 150px;

      img {
        width: 70px;
        height: 70px;
      }
    }
  }

</style>