<template>
  <header>
    <h1 @click="clearTech()">tech book</h1>
    <nav>
      <div class="nav-card" 
            v-for="tech in getTechs.data" 
            :key="tech.id"
            :class="tech.id === getTech.id ? 'sel-tech' : 'all-tech'" 
            @click="selectTech(tech)">
        <img :src="getSvgUrl(tech.img)" alt="">
        <h3>{{ tech.title }}</h3>
      </div>
<!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Header',

    computed: {
      ...mapGetters([ 'getTechs',
                      'getTech', ]),
    },
    methods: {
      ...mapActions([ 'fetchTechs', 
                      'fetchTech',
                      'techClear',
                      'languageClear',
                      'articlesClear',
                      'articleClear' ]),

      selectTech(tech) {
        this.clearTech();
        this.fetchTech(tech);
      },

      clearTech() {
        this.articleClear();
        this.articlesClear();
        this.languageClear();
        this.techClear();
        this.$router.push('/');
      },

      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg');
      },
    },

    async created()  {
      await this.fetchTechs();
    }
  }
</script>

<style>

</style>