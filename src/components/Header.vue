<template>
  <header>
    <h1 @click="clearTech()">techbook</h1>
    <nav>
      <div class="nav-cards" 
            v-for="tech in getTechs" 
            :key="tech.id">
        <div class="nav-card" 
              :class="tech.id === getTech.id ? 'sel-tech' : 'all-tech'" 
              @click="selectTech(tech)">
          <img :src="getSvgUrl(tech.img)" alt="">
          <h3>{{ tech.name }}</h3>
        </div>
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
                      'articleClear' ]),

      selectTech(tech) {
        this.fetchTech(tech);
      },

      clearTech() {
        //this.articleClear();
        //this.languageClear();
        this.techClear();
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