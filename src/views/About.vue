<template>
  <Header />
  <Fields />
</template>
<script>
import Header from '@/components/Header.vue'
import Fields from '@/components/Fields.vue';

export default {
  name: 'abo',
  components: {
    Fields, Header
  },
}
</script>
