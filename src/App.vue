<template>
  <router-view />
</template>

<script>
// @ is an alias to /src

export default {
  //name: 'Home',
};
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --blue-grey-darkest: #1e242b;
  --blue-grey-darker: #2a3846;
  --blue-grey-dark: #4b6077;
  --blue-grey: #6d869d;
  --blue-grey-light: #70baff;
  --blue-grey-lighter: #a5d2fd;

  --blue: #003e81;

  --blue-darkest: #2c3e50;
  --black: #272727;
  --orange: #ffb515;
  --yellow: #e2b625;
  --blue-dark: #13608d;
  --red: #e03030;
  --red-dark: #a12424;
  --red-light: #ff5151;
  --green: #309209;
  --green-light: #46d10f;
}
html {
  min-height: 100%; /* make sure it is at least as tall as the viewport */
  position: relative;
}
</style>
