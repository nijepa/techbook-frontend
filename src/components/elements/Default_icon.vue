<template>
  <component :is="svg" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    }
  },
  computed: {
    svg() {
      return require(`@/assets/svgs/${this.icon}.svg?inline`).default
    }
  }
}
</script>

<style lang="scss" scoped>

</style>