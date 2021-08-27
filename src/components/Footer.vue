<template>
  <footer>
    <h4>tech book</h4>
    <h4>Nikola</h4>
    <h4>{{ new Date().getFullYear() }}</h4>
  </footer>
</template>

<script>
//import dayjs from "dayjs";
export default {
  setup() {
    return {
      //dayjs
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  grid-area: footer;
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  background-color: $blue-main;
  color: $blue-lightest;
  box-shadow: 0px 0px 2px 2px rgba(11, 47, 96, 0.75);
  border-bottom: 4px solid $blue-lightest;
  h4 {
    text-transform: uppercase;
  }
}
</style>
