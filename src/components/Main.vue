<template>
  <main>
    <div class="main-title" v-if="!getOneLanguage">
      <h1>{{ msg }}</h1>
      <img :src="getSvgUrl('coding')" alt="">
    </div>
    <div class="">
      <Language />
    </div>
    
  </main>
</template>

<script>
  import Language from '@/components/Language.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Main',

    props: {
      msg: String
    },
    
    components: {
      Language
    },

    computed: {
      ...mapGetters([ 'getOneLanguage' ]),
    },

    methods: {
      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg');
      },
    }
  }
</script>
