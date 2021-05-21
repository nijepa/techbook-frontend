<template>
  <div class="article-nav">
    <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('list')" alt=""> All</a>
    <div class="article-actions">
      <router-link to="/article"><img :src="getSvgUrl('add')" alt=""> Add</router-link>
      <!-- <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('add')" alt=""> Add</a> -->
      <!-- <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('edit')" alt=""> Edit</a>
      <a class="article-link" @click="articleClear()"><img :src="getSvgUrl('delete')" alt=""> Delete</a> -->
    </div>
    
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'ArticleNav',

    methods: {
      ...mapActions([ 'articleClear' ]),

      getSvgUrl(pic) {
        return require('../assets/images/' + pic + '.svg');
      },
    }
  }
</script>

<style>

</style>