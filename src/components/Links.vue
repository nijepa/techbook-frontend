<template>
  <div class="links">
    <div>
      <input v-model="link" id="link" name="link" type="text" required />
      <label for="link">Link</label>
    </div>
  </div>
  <button @click.prevent="saveLink(link)">Save link</button>
</template>

<script>
//import { ref } from "@vue/reactivity";
export default {
  name: "Links",

  props: [],

  /*   setup() {
    let link = ref(null);
    let linkIdx = null;

    const saveLink = (links) => {
      if (linkIdx || linkIdx === 0) {
        article.value.links[linkIdx] = link.value;
      } else {
        article.value.links.push(links);
      }
      link.value = null;
    };

    const updateLink = (links) => {
      link.value = links;
      linkIdx = article.value.links.indexOf(links);
    };

    const removeLink = (link) => {
      article.value.links = article.value.links.filter((a) => a !== link);
    };

    return { link, saveLink, updateLink, removeLink}
  } */
};
</script>

<style></style>
