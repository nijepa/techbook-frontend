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
      <div class="lang__groups">
        <p>Groups</p>
        <ul v-if="lang.groups.length">
          <li v-for="group in lang.groups" :key="group">
            <a
              href=""
              @click.prevent="updateGroup(group.name)"
              :class="selectedGroup(group.name) ? 'group' : ''"
              >{{ group.name }}</a
            >
          </li>
        </ul>
      </div>
      <div>
        <ckeditor class="cked" :editor="editor" v-model="article.description" :config="editorConfig"></ckeditor>
<!--         <textarea
          v-model="article.description"
          id="desc"
          name="desc"
          rows="15"
        ></textarea> -->
        <!-- <label for="desc">Description</label> -->
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
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import Font from "@ckeditor/ckeditor5-font";

export default {
  name: "ArticleActions",

  components: {
    ckeditor: CKEditor.component
  },

  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // plugins: [ Font],
        // toolbar: [
        //     'heading', 'bulletedList', 'numberedList', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'undo', 'redo'
        // ] 
      },
    };
  },

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
      groups: [],
    });
    let link = ref(null);
    let edited = false;

    const lang = computed(() => store.getters.getOneLanguage);

    /*     function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    } */

    const art = computed(() => store.getters.getOneArticle);

    const selectedGroup = (group) => {
      return article.value.groups.includes(group);
    };

    const updateGroup = (group) => {
      const groupIdx = article.value.groups.indexOf(group);
      if (groupIdx >= 0) {
        article.value.groups.splice(groupIdx, 1);
      } else {
        article.value.groups.push(group);
      }
    };

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
      lang,
      article,
      updateGroup,
      selectedGroup,
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

<style lang="scss">
.ck-editor {
  border-radius: .2em !important;
  border: 2px solid $blue-light !important;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 3px 1px rgba(159, 196, 245,0.75) !important;
}

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
