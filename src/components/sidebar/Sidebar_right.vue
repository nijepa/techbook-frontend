<template>
  <div v-if="!isEmpty(lang)" class="content-side">
    <div  class="lang-about">
      <button type="submit" @click="editLang()" class="form__btn svg-back">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Stroke 1"
            d="M12.0002 2.75C5.06324 2.75 2.75024 5.063 2.75024 12C2.75024 18.937 5.06324 21.25 12.0002 21.25C18.9372 21.25 21.2502 18.937 21.2502 12"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5285 4.30364V4.30364C18.5355 3.42464 17.0185 3.51664 16.1395 4.50964C16.1395 4.50964 11.7705 9.44464 10.2555 11.1576C8.73853 12.8696 9.85053 15.2346 9.85053 15.2346C9.85053 15.2346 12.3545 16.0276 13.8485 14.3396C15.3435 12.6516 19.7345 7.69264 19.7345 7.69264C20.6135 6.69964 20.5205 5.18264 19.5285 4.30364Z"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 5"
            d="M15.009 5.80078L18.604 8.98378"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>edit</span>
      </button>
      <img :src="getUrl(lang.img_url, 'logos')" alt="" />
      <h1>{{ lang.title }}</h1>
      <p v-html="lang.description"></p>
      <ul v-if="lang.links.length" class="links__article">
        <li v-for="link in lang.links" :key="link" class="links-item">
          <a href="" @click.prevent="updateLink(link)">{{ link }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUrl } from "@/helpers/getUrl";
import { isEmpty } from "@/helpers/isEmptyObject";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "SidebarRight",

  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getOneLanguage);
    const router = useRouter();

    const editLang = () => {
      router.push("/lang");
    };

    return { lang, getUrl, editLang, isEmpty };
  },
};
</script>

<style lang="scss" scoped>
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
  padding-top: 0;

  .lang-about {
    margin: 0.5em 0.5em;
    padding: 0.3em;
    border: 2px solid $blue-lightest;
    border-radius: 3px;
    box-shadow: 0px 0px 3px 1px #6887aebf;
    background-color: $blue-lighter;
    min-width: 150px;

    img {
      width: 50px;
      height: 50px;
      margin-top: 0.5em;
    }
  }
}

@media(max-width: 1024px) {
  .content-side {
    margin-top: 100px;
  }
}
</style>
