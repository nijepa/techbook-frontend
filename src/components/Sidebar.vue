<template>
  <aside id="sidenav">
    <ul>
      <li :class="[(isEmpty(getTech) || (getTech.id == language.tech_id)  ? 'selected-tech' : ''), 
                  ((getOneLanguage && (language.id === getOneLanguage.id)) ? 'selected-lang' : '')]" 
          v-for="language in languages" 
          :key="language.id" 
          >
        <img :src="getSvgUrl(language.img)" alt="">
        <a @click="selectLanguage(language)" >{{ language.name }}</a>
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
      languages: []
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
                    'fetchTechs',
                    'fetchTech' ]),
    
    async selectLanguage(language) {
      console.log(language)
      await this.fetchLanguage(language);
      this.articlesClear();
      await this.fetchArticles(language.id);
      this.articleClear();
    },

    isEmpty(obj) { return Object.keys(obj).length === 0; },

    getSvgUrl(pic) {
      //console.log(pic)
      return require('@/assets/logos/' + pic + '.svg');
    },
  },

  async created()  {
    await this.fetchTechs();
    await this.fetchLanguages();
    this.languages = this.getAllLanguages.data;
  }
}
</script>

<style>

</style>