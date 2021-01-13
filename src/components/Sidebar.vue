<template>
  <aside id="sidenav">
    <ul>
      <li :class="[(isEmpty(getTech) || (getTech.id == language.tech_id)  ? 'selected-tech' : ''), 
                  ((getOneLanguage && (language.id === getOneLanguage.id)) ? 'selected-lang' : '')]" 
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
                    'articlesClear',
                    'articleClear',
                    'fetchTech' ]),
    
    selectLanguage(language) {
      this.fetchLanguage(language);
      this.articlesClear();
      this.fetchArticles(language.id);
      this.articleClear();
    },

    isEmpty(obj) { return Object.keys(obj).length === 0; },

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