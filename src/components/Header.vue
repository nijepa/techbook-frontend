<template>
  <header>
    <h1 @click="clearTech()">tech book</h1>
    <nav>
<!--       <div
        class="nav-card"
        v-for="tech in techs.data"
        :key="tech._id"
        :class="tech._id === techSingle._id ? 'sel-tech' : 'all-tech'"
        @click="selectTech(tech)"
      >
        <img :src="getUrl(tech.img)" alt="" />
        <h3>{{ tech.title }}</h3>
      </div> -->
      <HeaderLink />
      <!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
  </header>
</template>

<script>
//import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getUrl } from "@/helpers/getUrl";
import HeaderLink from "@/components/header/HeaderLink";

export default {
  name: "Header",

  components: {
    HeaderLink
  },

  setup() {
    const store = useStore();
    const router = useRouter();

/*     const techs = computed(() => store.getters.getTechs);
    const techSingle = computed(() => store.getters.getTech);

    const selectTech = async (tech) => {
      clearTech();
      await store.dispatch("fetchTech", tech);
    }; */

    const clearTech = async () => {
      await store.dispatch("articleClear");
      await store.dispatch("articlesClear");
      await store.dispatch("languageClear");
      //await store.dispatch("techClear");
      router.push("/");
    };

    //store.dispatch("fetchTechs");

    return {  clearTech, getUrl };
  },

  /*     computed: {
      ...mapGetters([ 'getTechs',
                      'getTech', ]),
    },
    methods: {
      ...mapActions([ 'fetchTechs', 
                      'fetchTech',
                      'techClear',
                      'languageClear',
                      'articlesClear',
                      'articleClear' ]), */

  /* async selectTech(tech) {
        this.clearTech();
        await this.fetchTech(tech);
      },

      async clearTech() {
        await this.articleClear();
        await this.articlesClear();
        await this.languageClear();
        await this.techClear();
        this.$router.push('/');
      }, */

  /*       getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg');
      },
    }, */

  /*     async created()  {
      await this.fetchTechs();
    } */
};
</script>

<style lang="scss" scoped>
</style>
