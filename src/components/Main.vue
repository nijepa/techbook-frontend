<template>
  <main>
    <div class="" v-if="!isEmpty(getOneLanguage)">
      <article-nav />
      <Language />
    </div>
    <div class="main-title" v-else>
      <h1>{{ msg }}</h1>
      <img :src="getSvgUrl('coding')" alt="">
    </div>
  </main>
</template>

<script>
  import Language from '@/components/Language.vue';
  import ArticleNav from '@/components/Article_nav.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Main',

    props: {
      msg: String
    },
    
    components: {
      Language, ArticleNav
    },

    computed: {
      ...mapGetters([ 'getOneLanguage' ]),
    },

    data() {
      return {
        lang: false
      }
    },

    methods: {
      isEmpty(obj) { return Object.keys(obj).length === 0; },

      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg');
      },
    },

    watch: {
      lang : {
        //this.lang = this.getOneLanguage
      }
    }
  }
</script>
