<template>
  <component :is="svg" @click="handleClick" :class="{'svg-color': stroke} " />
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    stroke: {
      type: String
    }
  },
  computed: {
    svg() {
      return require(`@/assets/svgs/${this.icon}.svg?inline`).default
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-color {
  //svg {
   // margin: 0 0.5em;

    path {
      stroke: $blue-lightest;
    }
  //}
}
</style>