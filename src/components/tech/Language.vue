<template>
  <section class="section-main">
    <div class="section-headin" v-if="lang">
      <div class="heading__lang" @click.prevent="selectGroup()">
        <img :src="getUrl(lang.img_url, 'logos')" alt="" />
        <h1>{{ lang.title }}</h1>
      </div>

      <div v-if="width < 1280" class="fields__nav-small">
        <div v-click-outside="hideFields">
          <button type="submit" class="article__fields" @click="toggleFields">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Stroke 1"
                d="M11.1437 17.8829H4.67114"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.205 17.8839C15.205 19.9257 15.8859 20.6057 17.9267 20.6057C19.9676 20.6057 20.6485 19.9257 20.6485 17.8839C20.6485 15.8421 19.9676 15.1621 17.9267 15.1621C15.8859 15.1621 15.205 15.8421 15.205 17.8839Z"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 5"
                d="M14.1765 7.39439H20.6481"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 7"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1153 7.39293C10.1153 5.35204 9.43436 4.67114 7.39346 4.67114C5.35167 4.67114 4.67078 5.35204 4.67078 7.39293C4.67078 9.43472 5.35167 10.1147 7.39346 10.1147C9.43436 10.1147 10.1153 9.43472 10.1153 7.39293Z"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Fields</span>
          </button>
          <lang-fields
            :groups="lang.groups"
            v-if="fieldsStatus"
            @field="selectGroup"
          />
        </div>
        <a href="#" class="heading__lang" @click="editLang()">{{ lang.title }}</a>
      </div>

      <div v-else>
        <ul v-if="lang.groups.length">
          <li
            v-for="group in lang.groups"
            :key="group"
            class="links__article"
            :class="
              isEmpty(gru) ? '' : group._id === gru._id ? 'group__selected' : ''
            "
            id="cont"
            @click.prevent="selectGroup(group)"
          >
            <a href="" id="box">
              {{ group.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <article-nav @filteredArt="filterArt" />

    <Loader v-if="!articles.length || loading" />

    <transition-group
      name="component-fade"
      mode="out-in"
      v-if="!loading"
      appear
    >
      <div v-if="!article._id" class="content">
        <ul>
          <li
            v-for="article in result"
            :key="article._id"
            class="articles__list"
          >
            <transition name="component-fade" mode="out-in">
              <div class="article__short">
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
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.44019 12L10.8142 14.373L15.5602 9.62695"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h4 @click="selectArticle(article)">{{ article.title }}</h4>
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
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  v-html="article.description"
                  class="article__description"
                ></p>
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
                <ul class="article__group-list">
                  <li
                    v-for="(group, index) in article.groups"
                    :key="index"
                    class="article__group"
                  >
                    {{ group }}
                  </li>
                </ul>
                <p class="article__date">
                  ctreated {{ dayjs(article.createdAt).format("DD.MM.YYYY") }} /
                  updated {{ dayjs(article.updatedAt).format("DD.MM.YYYY") }}
                </p>
              </div>
            </transition>
          </li>
        </ul>
        <!--         <div class="content-side">
          <div class="lang-about">
            <img :src="getUrl(lang.img_url, 'logos')" alt="" />
            <h1>{{ lang.title }}</h1>
            <p>{{ lang.description }}</p>
          </div>
        </div> -->
        <div class="pagination">
          <div v-if="lastPage > 1" class="pagination__btns">
            <!-- <p>page {{ currentPage }} of {{ lastPage }} {{ total }}</p> -->
            <button
              v-if="currentPage > 1"
              class="form__btn pagination__btn"
              @click="first"
            >
              <!--               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" d="M7.91394 12L16.0859 12" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 2" d="M11.6782 15.752C11.6782 15.752 7.91422 13.224 7.91422 12C7.91422 10.776 11.6782 8.25195 11.6782 8.25195" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 4" fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2.75C5.06288 2.75 2.74988 5.063 2.74988 12C2.74988 18.937 5.06288 21.25 11.9999 21.25C18.9369 21.25 21.2499 18.937 21.2499 12C21.2499 5.063 18.9369 2.75 11.9999 2.75Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> -->
              1
            </button>
            <button
              v-if="currentPage > 1"
              class="form__btn pagination__btn"
              @click="prev"
            >
              <!--               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2.75024C5.06288 2.75024 2.74988 5.06324 2.74988 12.0002C2.74988 18.9372 5.06288 21.2502 11.9999 21.2502C18.9369 21.2502 21.2499 18.9372 21.2499 12.0002C21.2499 5.06324 18.9369 2.75024 11.9999 2.75024Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 3" d="M13.4418 8.52856C13.4418 8.52856 9.95577 10.9206 9.95577 12.0006C9.95577 13.0806 13.4418 15.4706 13.4418 15.4706" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> -->
              prev
            </button>
            <button class="form__btn pagination__btn active_pagesize">
              {{ currentPage }}
            </button>
            <button
              v-if="currentPage !== lastPage"
              class="form__btn pagination__btn"
              @click="next"
            >
              next
              <!--               <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 21.2498C18.9371 21.2498 21.2501 18.9368 21.2501 11.9998C21.2501 5.06276 18.9371 2.74976 12.0001 2.74976C5.06312 2.74976 2.75012 5.06276 2.75012 11.9998C2.75012 18.9368 5.06312 21.2498 12.0001 21.2498Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 3" d="M10.5582 15.4714C10.5582 15.4714 14.0442 13.0794 14.0442 11.9994C14.0442 10.9194 10.5582 8.52944 10.5582 8.52944" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> -->
            </button>
            <button
              v-if="currentPage !== lastPage"
              class="form__btn pagination__btn"
              @click="last"
            >
              {{ lastPage }}
              <!--            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Stroke 1" d="M16.0861 12H7.91406" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 2" d="M12.3218 8.24805C12.3218 8.24805 16.0858 10.776 16.0858 12C16.0858 13.224 12.3218 15.748 12.3218 15.748" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 4" fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 21.25C18.9371 21.25 21.2501 18.937 21.2501 12C21.2501 5.063 18.9371 2.75 12.0001 2.75C5.06312 2.75 2.75012 5.063 2.75012 12C2.75012 18.937 5.06312 21.25 12.0001 21.25Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> -->
            </button>
          </div>

          <div v-if="total > 10" class="pagination__perpage">
            <button
              :class="{ active_pagesize: pageSize === 10 }"
              class="form__btn pagination__btn"
              @click="setPageSize(10)"
            >
              10
            </button>
            <button
              v-if="total > 10"
              :class="{ active_pagesize: pageSize === 20 }"
              class="form__btn pagination__btn"
              @click="setPageSize(20)"
            >
              20
            </button>
            <button
              v-if="total > 20"
              :class="{ active_pagesize: pageSize === 50 }"
              class="form__btn pagination__btn"
              @click="setPageSize(50)"
            >
              50
            </button>
            per page
          </div>
        </div>

        <!-- <Pagination :art="articlesTruncated" /> -->
      </div>

      <div class="article" v-else>
        <Article />
      </div>
    </transition-group>
  </section>
</template>

<script>
import Article from "@/components/article/Article.vue";
import ArticleNav from "@/components/article/Article_nav.vue";
import LangFields from "@/components/tech/LangFields.vue";
import Loader from "@/components/Loader.vue";
import { getUrl } from "@/helpers/getUrl";
import { isEmpty } from "@/helpers/isEmptyObject";
import useBreakpoints from "@/composables/useBreakpoints";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { usePagination } from "vue-composable";
import dayjs from "dayjs";
//import Pagination from "@/components/Pagination.vue";

export default {
  name: "Language",

  props: { art: Array },

  components: {
    Article,
    Loader,
    ArticleNav,
    LangFields,
    //Pagination
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const lang = computed(() => store.getters.getOneLanguage);
    const articles = computed(
      () => store.getters.getAllArticles
      //store.getters.getAllArticlesByGroups(gru.value)
    );
    const article = computed(() => store.getters.getOneArticle);
    let gru = ref(null);
    let loading = ref(false);

    const selectArticle = async (article) => {
      loading.value = true;
      await store.dispatch("fetchArticle", article);
      loading.value = false;
    };

    let articlesTruncated = computed(() => {
      return articles.value.map((item) => {
        return {
          ...item,
          description:
            item.description.length < 50
              ? item.description
              : item.description.substring(0, 50) + " ...",
        };
      });
    });

    watch(articlesTruncated, (currentValue) => {
      res.value = currentValue;
    });

    const { width, type } = useBreakpoints();
    let fieldsStatus = ref(false);
    const toggleFields = () => {
      fieldsStatus.value = !fieldsStatus.value;
    };
    const hideFields = () => {
      fieldsStatus.value = false;
    };

    let res = ref(articlesTruncated.value);

    const selectGroup = (group = null) => {
      res.value = articlesTruncated.value;
      (res.value = res.value.filter((val) => {
        let menu = res.value;
        if (group) {
          menu = val.groups.some((g) => g === group.name);
        }
        return menu;
      })),
        (gru.value = group);
      hideFields();
      if (isEmpty(group)) {
        //store.dispatch("fetchArticles", lang);
      }
    };

    const filterArt = (type) => {
      res.value = articlesTruncated.value;
      if (type) {
        res.value = res.value.filter((a) => {
          return a[type];
        });
      }
    };

    const toggleArt = (art, type) => {
      art[type] = !art[type];
      art.user = "609fa93aa271831c12d7f8d0";
      art.langId = lang.value._id;
      store.dispatch("articleUpdate", art);
    };

    const editLang = () => {
      router.push("/lang");
    };

    let {
      currentPage,
      lastPage,
      next,
      prev,
      offset,
      pageSize,
      first,
      last,
      total,
    } = usePagination({
      currentPage: 1,
      pageSize: 10,
      total: computed(() => res.value.length),
    });

    const result = computed(() => {
      const array = res.value;
      if (!Array.isArray(array)) return [];
      return array.slice(offset.value, offset.value + pageSize.value);
    });

    const setPageSize = (nr) => {
      console.log("oooo", pageSize);
      pageSize.value = nr;
    };

    return {
      lang,
      articles,
      article,
      selectArticle,
      getUrl,
      selectGroup,
      isEmpty,
      gru,
      articlesTruncated,
      dayjs,
      width,
      type,
      fieldsStatus,
      toggleFields,
      hideFields,
      loading,
      toggleArt,
      currentPage,
      lastPage,
      next,
      prev,
      result,
      first,
      last,
      total,
      pageSize,
      setPageSize,
      filterArt,
      editLang
    };
  },
};
</script>

<style lang="scss">
.fields__nav-small {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: .5em;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.6s ease-in-out;
  max-height: 0px;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
  max-height: 0px;
}

.group__selected a {
  color: $blue-dark !important;
}

.group__selected:after,
.group__selected:before {
  background: $blue-lightest !important;
}

.art-checked {
  visibility: visible !important;
  fill: $blue-dark;
  path {
    stroke: $blue-lightest !important;
  }
}

.pagination {
  margin: 1em;
  display: grid;
  justify-items: left;
  grid-template-columns: auto auto;

  .pagination__btns {
    display: flex;
  }

  .pagination__perpage {
    display: flex;
    justify-self: end;
  }
}
.pagination__btn {
  border: 2px solid $blue-dark !important;
  margin-right: 0.2em !important;
  border-radius: 0.3em !important;
  padding: 0.2em 0.5em !important;
}
.active_pagesize {
  background: $blue-dark !important;
  color: $blue-lighter !important;
  border: 2px solid $blue-lighter !important;
}

.section-main {
  display: grid;

  .article-header {
    display: flex;
    justify-self: center;
    //margin: 0.5em 0;
    //border: 2px solid $blue-lightest;
    border-radius: 0.5em;
    align-items: center;

    .article-header_item {
      display: flex;
      align-items: center;
      padding: 0.2em 0.3em 0.2em 0.3em;
      //border-right: 2px solid $blue-lightest;
      font-size: small;
      color: $blue-lightest;
      cursor: pointer;
      transition: all 0.4s ease;

      p {
        visibility: hidden;
      }

      svg {
        path {
          stroke: $blue-lightest;
        }
      }
    }

    .article-header_item:nth-last-child(1) {
      border-right: 2px solid transparent;
      border-top-right-radius: 0.2em;
      border-bottom-right-radius: 0.2em;
    }

    .article-header_item:nth-child(1) {
      border-top-left-radius: 0.3em;
      border-bottom-left-radius: 0.3em;
    }

    .article-header_item:hover {
      background-color: $blue-lightest;
      color: $blue-darkest;
      p {
        visibility: visible;
      }
      svg {
        path {
          stroke: $blue-darkest;
        }
      }
    }
  }

  .section-headin {
    display: flex;
    align-items: center;
    //margin-left: .3em;
    background-color: $blue-light;
    border-bottom: 2px solid $blue-lightest;
    border-left: 2px solid $blue-lightest;
    border-top: 5px solid $blue-lightest;

    .heading__lang {
      display: flex;
      cursor: pointer;
      padding: 0.2em 0;
      img {
        width: 25px;
        height: 25px;
        height: auto;
        margin-left: 0.5em;
        border-radius: 5px;
      }

      h1 {
        font-size: 1em;
        margin: 0 0.5em;
      }
    }

    .heading__lang:hover {
      color: $blue-lightest;
    }

    .article__fields {
      display: flex;
      border: transparent;
      align-items: center;
      padding: 0.3em 0.3em;
      cursor: pointer;
      margin-left: 0.5em;
      transition: all 0.4s ease-in-out;

      span {
        margin-left: 0.5em;
        color: $blue-darkest;
        font-size: 600;
      }
    }

    .article__fields:hover {
      background: $blue-dark;
      span {
        color: $blue-lightest;
      }
    }

    ul {
      margin: 0 0.5em;
    }

    /*     ul .links__article {
      margin: 0;
      border-radius: 1px;
      position: relative;
      padding: 0.3em 0.8em;
    }

    ul .links__article:nth-child(odd)::before {
      content: "";
      color: $blue-lightest;
      border-right: 2px solid $blue-lightest;
      //position: relative;
      //display: inline-block;
      //left: -5px;
      transform: rotate(20deg);
      display: block;
      position: absolute;
      top: -2px;
      left: -5px;
      width: 2px;
      height: 120%;
    }

    ul .links__article:nth-child(even)::after {
      content: "";
      color: $blue-lightest;
      border-right: 2px solid $blue-lightest;
      //position: relative;
      //display: inline-block;
      //left: 5px;
      transform: rotate(-20deg);
      display: block;
      position: absolute;
      top: -2px;
      left: -5px;
      width: 2px;
      height: 120%;
    } */
    section ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      list-style-type: none;
      margin: 0.5em 1em;
    }

    ul .links__article {
      position: relative;
      padding: 0.3em 0.8em;
      cursor: pointer;
      z-index: 0;
      margin: 0;
    }

    ul .links__article:before,
    ul .links__article:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: -2px;
      bottom: -2px;
      width: 70%;
      transition: all 0.4s ease;
    }

    ul .links__article:before {
      left: -1px;
      border-left: 2px solid $blue-lightest;
    }
    ul .links__article:after {
      right: -1px;
      border-right: 2px solid $blue-lightest;
    }

    ul .links__article:after,
    ul .links__article:nth-child(odd):before {
      transform: skewX(-15deg);
    }
    ul .links__article:before,
    ul .links__article:nth-child(odd):after {
      transform: skewX(15deg);
    }

    ul .links__article:hover {
      a {
        color: $blue-darkest !important;
      }
    }

    ul .links__article:hover:before,
    ul .links__article:hover:after {
      background: $blue-lightest;
    }
  }
}

@media(max-width: 700px) {
  .article-header {
    .article-header_item {
      p {
        width: 0;
      }
    }
  }
  .article-header_item:hover {
    p {
      transform: translateX(-20px) translateY(-25px);
    }
  }
}

</style>
