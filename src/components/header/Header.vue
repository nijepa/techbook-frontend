<template>
  <header>
    <h1 @click="clearTech()">tech book</h1>
    <nav>
      <h4>baaar</h4>
      <label for="">
        <input type="text" name="" id="" placeholder="search ..." />
      </label>
    </nav>
    <div class="nav__profile">
      <ul>
        <li>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Demo Test</p>
        </li>
        <li>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 1"
              d="M17.5449 9.01904C17.5449 9.01904 14.3349 12.8717 11.987 12.8717C9.64016 12.8717 6.39404 9.01904 6.39404 9.01904"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.45215 11.9688C2.45215 5.13075 4.8331 2.85205 11.976 2.85205C19.1188 2.85205 21.4998 5.13075 21.4998 11.9688C21.4998 18.8059 19.1188 21.0856 11.976 21.0856C4.8331 21.0856 2.45215 18.8059 2.45215 11.9688Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9961 2.51416C7.56185 2.51416 5.63519 6.5294 5.63519 9.18368C5.63519 11.1675 5.92281 10.5837 4.82471 13.0037C3.48376 16.4523 8.87614 17.8618 11.9961 17.8618C15.1152 17.8618 20.5076 16.4523 19.1676 13.0037C18.0695 10.5837 18.3571 11.1675 18.3571 9.18368C18.3571 6.5294 16.4295 2.51416 11.9961 2.51416Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              d="M14.306 20.5122C13.0117 21.9579 10.9927 21.9751 9.68604 20.5122"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { getUrl } from "@/helpers/getUrl";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Header",

  setup() {
    const store = useStore();
    const router = useRouter();

    const clearTech = async () => {
      await store.dispatch("articleClear");
      await store.dispatch("articlesClear");
      await store.dispatch("languageClear");
      router.push("/");
    };

    return { clearTech, getUrl };
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;

  h4 {
    padding: 0.2em;
    font-size: 1em;
    border-radius: 2em;
    margin: 0 1em;
    padding: 0.2em 0.5em;
    color: $blue-lighter;
    cursor: pointer;
    align-self: center;
  }
  h4:hover {
    background-color: $blue-dark;
  }
  label {
    position: relative;
    text-align: left;
    width: 85%;

    input {
      background-color: $blue-light;
      border: 1px solid $blue-main;
      border-radius: 0.3em;
      padding: 0 0.2em;
      width: 100%;
      padding: 10px 30px;
      //box-shadow:  0 3px 3px rgba(42, 100, 177, 0.75);
      //font-size: 1em;
    }
    input:focus {
      background-color: $blue-lighter;
      box-shadow: 0 0 4px 4px rgba(42, 100, 177, 0.75);
    }
  }

  label:before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url("../../assets/images/search.svg") center / contain no-repeat;
  }

  /*   input {
    padding: 10px 30px;
  } */
}
.nav__profile {
  justify-self: left;
  height: 100%;
  //align-items: center;
  display: flex;

  ul {
    display: flex;
    list-style: none;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;

      svg {
        margin: 0 0.5em;

        path {
          stroke: $blue-lightest;
        }
      }
      p {
        font-size: smaller;
        color: $blue-lighter;
        margin-right: 0.5em;
      }
      /*       svg:hover {
        path {
          stroke: $blue-darker;
        }
      } */
    }
    li:hover {
      background: $blue-dark;
    }
  }
}
</style>
