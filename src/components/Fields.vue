<template>
  <Loader v-if="!languages" />

  <div v-else class="tree">
    <ul v-for="language in languages" :key="language._id">
      <li @click="selectLanguage(language)">
        <a>
          <img :src="getUrl(language.img_url, 'logos')" alt="" />
          <h5>{{ language.title }}</h5>
        </a>
        <ul class="">
          <li v-for="group in language.groups" :key="group._id">
            <a href="">{{ group.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
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

    const tech = computed(() => store.getters.getTech);
    const languages = computed(() =>
      store.getters.getLanguagesByTechs(tech.value)
    );
    const lang = computed(() => store.getters.getOneLanguage);

    const selectLanguage = async (language) => {
      if (language._id) {
        await store.dispatch("fetchLanguage", language);
        await store.dispatch("fetchArticles", language);
      }

      router.push("/main");
    };

    return { getUrl, isEmpty, selectLanguage, tech, languages, lang };
  },
};
</script>

<style lang="scss" scoped>
$border-width: 2px;
$reverse: true;

.tree {
  margin-top: 50px;
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
  transition: all 0.8s ease;
  @if $reverse {
    //transform: rotate(180deg);
  }
}
.tree li a h5 {
  visibility: hidden;
}

.tree li a:hover h5 {
  visibility: visible;
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
@media (max-width: 1050px) {
  .tree ul {
    display: grid;

    .tree li {
      &::before,
      &::after {
        border-top: none !important;
      }

      &::after {
        border-left: none;
      }
    }
  }

  .tree li::after {
    border-top: none !important;
  }
  .tree li::before {
    border-top: none !important;
  }
}
</style>
