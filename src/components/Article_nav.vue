<template>
  <div class="article-nav">
    <a class="article-link" @click="clearArticle">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Stroke 1"
          d="M15.596 15.6963H8.37598"
          stroke="#9fc4f5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 2"
          d="M15.596 11.9365H8.37598"
          stroke="#9fc4f5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 3"
          d="M11.1312 8.17725H8.37622"
          stroke="#9fc4f5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.61011 12C3.61011 18.937 5.70811 21.25 12.0011 21.25C18.2951 21.25 20.3921 18.937 20.3921 12C20.3921 5.063 18.2951 2.75 12.0011 2.75C5.70811 2.75 3.61011 5.063 3.61011 12Z"
          stroke="#9fc4f5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>All </span>
      <!-- <img :src="getUrl('list2')" alt="" /> -->
    </a>
    <div class="article-actions">
      <a class="article-link" @click="addArticle(false)">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Stroke 1"
            d="M12.0368 8.46265V15.6111"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 2"
            d="M15.6148 12.0368H8.45898"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.30005 12.0369C2.30005 4.73479 4.73479 2.30005 12.0369 2.30005C19.339 2.30005 21.7737 4.73479 21.7737 12.0369C21.7737 19.339 19.339 21.7737 12.0369 21.7737C4.73479 21.7737 2.30005 19.339 2.30005 12.0369Z"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Add </span>
        <!-- <img :src="getUrl('add2')" alt="" /> -->
      </a>
      <a
        class="article-link"
        v-if="!isEmpty(article)"
        @click="addArticle(true)"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Stroke 1"
            d="M12.0002 2.75C5.06324 2.75 2.75024 5.063 2.75024 12C2.75024 18.937 5.06324 21.25 12.0002 21.25C18.9372 21.25 21.2502 18.937 21.2502 12"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5285 4.30364V4.30364C18.5355 3.42464 17.0185 3.51664 16.1395 4.50964C16.1395 4.50964 11.7705 9.44464 10.2555 11.1576C8.73853 12.8696 9.85053 15.2346 9.85053 15.2346C9.85053 15.2346 12.3545 16.0276 13.8485 14.3396C15.3435 12.6516 19.7345 7.69264 19.7345 7.69264C20.6135 6.69964 20.5205 5.18264 19.5285 4.30364Z"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 5"
            d="M15.009 5.80078L18.604 8.98378"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Edit </span>
        <!-- <img :src="getUrl('edit2')" alt="" /> -->
      </a>
      <a
        class="article-link"
        v-if="!isEmpty(article)"
        @click="deleteArticle(article)"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Stroke 1"
            d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            d="M20.3651 6.47985H4.2146"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 5"
            d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983"
            stroke="#9fc4f5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Delete </span>
        <!-- <img :src="getUrl('delete2')" alt="" />-->
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getUrl } from "../helpers/getUrl";
import { isEmpty } from "../helpers/isEmptyObject";

export default {
  name: "ArticleNav",

  setup() {
    const store = useStore();
    const router = useRouter();

    const article = computed(() => store.getters.getOneArticle);
    const lang = computed(() => store.getters.getOneLanguage);

    const clearArticle = () => {
      store.dispatch("articleClear");
      store.dispatch("fetchArticles", lang.value);
    };

    const addArticle = (isEdit = false) => {
      isEdit || clearArticle();
      router.push("/article");
    };

    const deleteArticle = (article) => {
      store.dispatch("articleDelete", article);
      store.dispatch("articleClear");
    };

    return {
      addArticle,
      deleteArticle,
      clearArticle,
      article,
      isEmpty,
      getUrl,
    };
  },
};
</script>

<style></style>
