<template>
  <Header />
  <Fields />
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Fields from '@/components/Fields.vue';

export default {
  name: 'abo',
  components: {
    Fields, Footer, Header
  },
}
</script>
