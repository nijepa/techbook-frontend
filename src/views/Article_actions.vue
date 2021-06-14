<template>
  <main class="">
    <h1>New</h1>
    <form class="go-bottom" action="">
      <div>
        <input
          v-model="article.title"
          id="name"
          name="name"
          type="text"
          required
        />
        <label for="name">Title</label>
      </div>
      <div>
        <textarea
          v-model="article.description"
          id="desc"
          name="desc"
          rows="15"
        ></textarea>
        <label for="desc">Description</label>
      </div>
      <div>
        <textarea
          v-model="article.code"
          class="coding"
          id="code"
          name="code"
          rows="15"
        ></textarea>
        <label for="code">Code</label>
      </div>
      <ul v-if="article.links.length" class="links__article">
        <li v-for="link in article.links" :key="link">
          <a href="" @click.prevent="updateLink(link)">{{ link }}</a> 
          <a @click="removeLink(link)"
            ><img :src="getUrl('delete')" alt="" class="links__article-remove"
          /></a>
        </li>
      </ul>
      <div class="links">
        <div>
          <input v-model="link" id="link" name="link" type="text" required />
          <label for="link">Link</label>
        </div>
      </div>
      <button @click.prevent="saveLink(link)">Save link</button>
      <button type="submit" @click="saveArticle()">Save</button>
      <button type="submit" @click="cancelSave()">Cancel</button>
    </form>
  </main>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { isEmpty } from "../helpers/isEmptyObject";
import { getUrl } from "../helpers/getUrl";

export default {
  name: "ArticleActions",

  setup() {
    const router = useRouter();
    const store = useStore();
    const article = ref({
      title: "",
      description: "",
      code: "",
      langId: "",
      user: "609fa93aa271831c12d7f8d0",
      img_url: "",
      links: [],
    });
    let link = ref(null);
    let edited = false;

    const lang = computed(() => store.getters.getOneLanguage);

    /*     function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    } */

    const art = computed(() => store.getters.getOneArticle);

    if (!isEmpty(art.value)) {
      article.value = art.value;
      edited = true;
    }

    const cancelSave = () => {
      router.push("/");
    };

    const saveArticle = () => {
      article.value.langId = lang.value._id;
      if (!edited) {
        store.dispatch("articleAdd", article.value);
      } else {
        store.dispatch("articleUpdate", article.value);
      }
      router.push("/");
    };

    let linkIdx = null;

    const saveLink = (links) => {
      if (!links) return;
      if (linkIdx || linkIdx === 0) {
        article.value.links[linkIdx] = link.value;
      } else {
        article.value.links.push(links);
      }
      link.value = null;
      linkIdx = null;
    };

    const updateLink = (links) => {
      link.value = links;
      linkIdx = article.value.links.indexOf(links);
    };

    const removeLink = (links) => {
      article.value.links = article.value.links.filter((a) => a !== links);
    };

    return {
      article,
      link,
      saveLink,
      cancelSave,
      updateLink,
      removeLink,
      saveArticle,
      getUrl,
    };
  },
};
</script>

<style>
.links__article {
  list-style: none;
}
.links__article li {
  cursor: pointer;
  justify-content: center;
}
.links__article-remove {
  width: 2em;
  height: 2em;
}
.links {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>
