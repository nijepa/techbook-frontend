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

    <div class="article-header" v-if="!article._id">
      <div class="article-header_item">
        <svg
          @click="toggleArt(article, 'finish')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="article.finish ? 'art-checked' : ''"
        >
          <path
            d="M2.74976 12C2.74976 18.937 5.06276 21.25 11.9998 21.25C18.9368 21.25 21.2498 18.937 21.2498 12C21.2498 5.063 18.9368 2.75 11.9998 2.75C5.06276 2.75 2.74976 5.063 2.74976 12Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke="#e3edfa"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.44019 12L10.8142 14.373L15.5602 9.62695"
            stroke="#e3edfa"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Finished</p> 
      </div>
      <div class="article-header_item">
        <svg
          @click="toggleArt(article, 'favorite')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="article.favorite ? 'art-checked' : ''"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3C9.96385 3 9.77134 6.54652 8.55911 7.79957C7.34689 9.05263 3.5782 7.61992 3.05459 9.84403C2.53207 12.0693 5.92235 12.8243 6.34036 14.7334C6.76057 16.6426 4.68922 19.3249 6.45916 20.6598C8.22911 21.9936 10.1343 18.9747 12 18.9747C13.8656 18.9747 15.7709 21.9936 17.5408 20.6598C19.3108 19.3249 17.2405 16.6426 17.6596 14.7334C18.0787 12.8243 21.4679 12.0693 20.9454 9.84403C20.4229 7.61992 16.6531 9.05263 15.442 7.79957C14.2297 6.54652 14.0361 3 12 3Z"
            stroke="#e3edfa"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Favorites</p>
      </div>
      <div class="article-header_item">
        <svg
          @click="toggleArt(article, 'bookmark')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="article.bookmark ? 'art-checked' : ''"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9702 2.5C5.58324 2.5 4.50424 3.432 4.50424 10.929C4.50424 19.322 4.34724 21.5 5.94324 21.5C7.53824 21.5 10.1432 17.816 11.9702 17.816C13.7972 17.816 16.4022 21.5 17.9972 21.5C19.5932 21.5 19.4362 19.322 19.4362 10.929C19.4362 3.432 18.3572 2.5 11.9702 2.5Z"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.54248 9.21777H15.3975"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Bookmarks</p>
      </div>
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
