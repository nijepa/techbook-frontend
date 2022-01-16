<template>
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
    <!--       <ul>
      <li v-for="n in result" :key="n">{{ n }}</li>
    </ul> -->
    <div class="pagination__perpage">
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
</template>

<script>
import { usePagination } from "vue-composable";
import { computed } from "@vue/reactivity";

export default {
  name: "Pagination",

  props: { art: Array },

  setup(props) {
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
      total: computed(() => props.art.length),
    });

    const result = computed(() => {
      const array = props.art;
      if (!Array.isArray(array)) return [];
      return array.slice(offset.value, offset.value + pageSize.value);
    });

    const setPageSize = (nr) => {
      pageSize.value = nr;
    };

    return {
      currentPage,
      lastPage,
      next,
      prev,
      result,
      first,
      last,
      total,
      pageSize,
      setPageSize
    };
  },
};
</script>

<style></style>
