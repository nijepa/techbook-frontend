<template>
  <Header />
  <!-- <Fields /> -->
  <div class="about">
    <h1>About</h1>
    <h3>Technology book</h3>
    <h5>tandara mandara broc</h5>
    <DefBtn
      :title="'back'"
      :svg="'back'"
      :type="'secondary'"
      @clicked="goBack"
    />
  </div>

  <Footer />
</template>
<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
import DefBtn from "@/components/elements/Default_button.vue";
//import Fields from "@/components/tech/Fields.vue";

export default {
  name: "abo",
  components: {
    //Fields,
    Footer,
    Header,
    DefBtn,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
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
