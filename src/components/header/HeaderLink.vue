<template>
  <div
    class="nav-card"
    v-for="tech in techs.data"
    :key="tech._id"
    :class="tech._id === techSingle._id ? 'sel-tech' : 'all-tech'"
    @click="selectTech(tech)"
  >
    <img :src="getUrl(tech.img)" alt="" class="lang-logo" />
    <h3>{{ tech.title }}</h3>
  </div>
</template>

<script>
import { getUrl } from "@/helpers/getUrl";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "HeaderLink",

  props: { front: Boolean },

  emits: ["loadin"],

  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    const techs = computed(() => store.getters.getTechs);
    const techSingle = computed(() => store.getters.getTech);

    const handleLoading = () => {
      emit("loadin");
    };

    const selectTech = async (tech) => {
      handleLoading();

      await store.dispatch("fetchTech", tech);

      clearTech();
      //if (props.front) router.push("/fields");
      router.push("/fields");
    };

    const clearTech = async () => {
      await store.dispatch("articleClear");
      await store.dispatch("articlesClear");
      await store.dispatch("languageClear");
    };

    return { techs, techSingle, selectTech, clearTech, getUrl };
  },
};
</script>

<style lang="scss" scoped>
.nav-card {
  position: relative;
  width: 8em;
  padding: 1em;
  margin-left: -1em;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: -5px 5px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px 5px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -5px 5px 3px 0px rgba(0, 0, 0, 0.75);
}

.nav-card:hover {
  background-image: linear-gradient($blue-main, $blue-main);
  //background-image: radial-gradient($blue-main, $blue-dark);
  color: $blue-darkest;
  transform: rotate(0) scale(1);
  z-index: 3;

  .lang-logo {
    transform: rotateY(180deg);
  }
  img {
    transform: rotate(0deg) scale(1);
  }

  h3 {
    transform: rotate(0deg) scale(1);
  }
}
img {
  height: 50px;
  transform: rotate(-3deg) scale(1);
}

h3 {
  font-size: 1.5em;
  transform: rotate(-3deg) scale(1);
}

a {
  font-weight: bold;
  color: $blue-darkest;

  &.router-link-exact-active {
    color: $orange-main;
  }
}

a:hover {
  color: $orange-light;
}

.sel-tech {
  background: $blue-lighter;
  border-right: 5px solid $orange-main;

  h3 {
    color: $blue-darkest !important;
    font-weight: 600 !important;
  }
}
</style>
