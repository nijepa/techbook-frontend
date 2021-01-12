<template>
  <aside id="sidenav">
    <ul>
      <li :class="[(getTech.id !== language.tech_id || getTech == {} ? 'selected-tech' : ''), 
                  (getOneLanguage && language.id === getOneLanguage.id ? 'selected-lang' : '')]" 
          v-for="language in getAllLanguages" 
          :key="language.id" 
          @click="selectLanguage(language)">
        <img :src="getSvgUrl(language.logo)" alt="">
        <a >{{ language.name }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Sidebar',

  data() {
    return {
      tech: {},
    }
  },

  computed: {
    ...mapGetters([ 'getAllLanguages',
                    'getOneLanguage',
                    'getTech',
                    'getAllArticles' ]),
    checkTech() {
      return this.getTech
    }
  },
  methods: {
    ...mapActions([ 'fetchLanguages', 
                    'fetchLanguage',
                    'fetchArticles',
                    'articleClear',
                    'fetchTech' ]),
    
    selectLanguage(language) {
      this.fetchLanguage(language);
      this.fetchArticles(language.id);
      if (!this.getAllArticles.length) this.articleClear();
    },

    getSvgUrl(pic) {
      return require('../assets/logos/' + pic + '.svg');
    },
  },

  async created()  {
    await this.fetchLanguages();
  }
}
</script>

<style>

</style>