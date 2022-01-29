<template>
  <component :is="svg" @click="handleClick" />
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
  },
  methods: {
    handleClick() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>