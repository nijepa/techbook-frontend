<template>
  <button type="submit" @click="cancelSave()" class="def__btn">
    <img :src="$svg(svg)" />
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'Default button',
  props: {
    title: {
      type: String,
      required: true
    },
    svg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.def__btn {
  background: transparent;
  border-radius: 2em;
  //border: 2px solid var(--blue-grey-dark);
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  //margin: 0 auto;
  padding: .2em;
  font-variant: small-caps;
  font-weight: 800;
  //color: var(--blue-grey-light);
  color: $blue-dark;
  transition: ease-in-out .4s all;

  span {
    //opacity: 0;
    margin-right: .2em;
    transition: all .4s ease-in-out;
    font-size: 1em;
    color: lighten($color: $blue-dark, $amount: 35%);
  }
}

.def__btn:hover {
  //background: var(--blue-grey-darkest);
  background: $blue-dark;
  
  border: 2px solid $blue-lighter;
  color: $blue-lighter;
  //border: 2px solid var(--blue-grey-lighter);
  //color: var(--blue-grey-lighter);
  .btn-svg {
    path {
      stroke: $blue-lighter;
    }
  }
  span {
    opacity: 1;
    //font-size: 1.1em;
  }
}
</style>