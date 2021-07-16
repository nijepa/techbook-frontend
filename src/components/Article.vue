<template>
  <article>
    <h2>
      {{ article.title }}
    </h2>
    <ul v-if="article.groups.length">
      <li v-for="group in article.groups" :key="group" class="links__article">
        {{ group }}
      </li>
    </ul>
    <p v-html="article.description"></p>
    <pre
      v-highlightjs
    ><code class="javascript">{{ article.code }}</code></pre>
    <!--     <code v-if="article.code">
      {{ article.code }}
    </code> -->
    <ul v-if="article.links.length">
      <li v-for="link in article.links" :key="link" class="links__article">
        <!-- <a :href="link" target="_blank" >{{ link.replace(/(^\w+:|^)\/\//, '') }}</a> -->
        <a :href="link" target="_blank">{{
          linkDomain(article.title, link)
        }}</a>
      </li>
    </ul>
  </article>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "Article",

  setup() {
    const store = useStore();
    const article = computed(() => store.getters.getOneArticle);
    const linkDomain = (title, link) =>
      title + " @ " + link.replace(/(^\w+:|^)\/\//, "").split("/")[0];

    return { article, linkDomain };
  },
};
</script>

<style></style>
