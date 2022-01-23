<template>
  <Header />
  <!-- <Fields /> -->
  <div class="about">
    <h1>About</h1>
    <h3>Technology book</h3>
    <h5>tandara mandara broc</h5>
    <def-btn :title="'back'" :svg="'back'" />
  </div>
  
  <Footer />
</template>
<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
import defBtn from '@/components/elements/Default_button.vue'
//import Fields from "@/components/tech/Fields.vue";

export default {
  name: "abo",

  components: {
    //Fields,
    Footer,
    Header,
    defBtn
  },
};
</script>
<style lang="scss" scoped>
  .about {
    margin-top: 100px;
    height: 90vh;
    display: grid;
    justify-items: center;
    align-content: flex-start;
    row-gap: 2em;

  }
</style>
