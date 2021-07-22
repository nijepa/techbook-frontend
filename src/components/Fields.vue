<template>
  <div id="">
    <Loader v-if="!languages" />
    <div v-else class="tree">
      <ul v-for="language in languages"
          :key="language._id">
        <li @click="selectLanguage(language)">
          <a>
            <img :src="getUrl(language.img_url, 'logos')" alt="" />
            {{ language.title }}
          </a>
          <ul class="">
            <li v-for="group in language.groups" :key="group._id">
              <a href="">{{ group.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { isEmpty } from "../helpers/isEmptyObject";
import { getUrl } from "../helpers/getUrl";
import Loader from "./Loader.vue";

export default {
  name: "Fields",

  components: {
    Loader,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    //store.dispatch("fetchTechs");
    //store.dispatch("fetchLanguages");

    const tech = computed(() => store.getters.getTech);
    const languages = computed(() =>
      store.getters.getLanguagesByTechs(tech.value)
    );
    //const languages = computed(() => store.getters.getAllLanguages.data);
    const lang = computed(() => store.getters.getOneLanguage);
    console.log("888", languages);
    const selectLanguage = async (language) => {
      if (language._id) await store.dispatch("fetchLanguage", language);
      router.push("/front");
    };

    return { getUrl, isEmpty, selectLanguage, tech, languages, lang };
  },
};
</script>

<style lang="scss">
$border-width: 2px;
$reverse: true;

.tree {
  @if $reverse {
    //transform: rotate(180deg);
    //transform-origin: 50%;
  }
}

.tree ul img {
  width: 2em;
}

.tree ul {
  position: relative;
  padding: 1em 0;
  white-space: nowrap;
  margin: 0 auto;
  text-align: center;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.tree li {
  display: inline-block; // need white-space fix
  vertical-align: top;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 1em 0.5em 0 0.5em;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: $border-width dotted $blue-lighter;
    width: 50%;
    height: 1em;
  }
  &::after {
    right: auto;
    left: 50%;
    border-left: $border-width dotted $blue-lighter;
  }
  &:only-child::after,
  &:only-child::before {
    display: none;
  }
  &:only-child {
    padding-top: 0;
  }
  &:first-child::before,
  &:last-child::after {
    border: 0 none;
  }
  &:last-child::before {
    border-right: $border-width dotted $blue-lighter;
    border-radius: 0 5px 0 0;
  }
  &:first-child::after {
    border-radius: 5px 0 0 0;
  }
}

.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: $border-width dotted $blue-lighter;
  width: 0;
  height: 1em;
}

.tree ul li a {
  cursor: pointer;
  display: inline-grid;
  justify-items: center;
}

.tree li a {
  border: $border-width solid $blue-lighter;
  padding: 0.5em 0.75em;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  color: #333;
  position: relative;
  top: $border-width;
  @if $reverse {
    //transform: rotate(180deg);
  }
}

.tree li a:hover {
  background: $blue-darkest !important;
}
.tree li a:hover,
.tree li a:hover + ul li a {
  background: $blue-darker;
  color: #fff;
  border: $border-width solid $blue-darkest;
}

.tree li a:hover + ul li::after,
.tree li a:hover + ul li::before,
.tree li a:hover + ul::before,
.tree li a:hover + ul ul::before {
  border-color: $blue-darker;
}
</style>
