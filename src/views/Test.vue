<template>
  <a class="foo">
    <div
      class="card__background"
      v-bind:style="thirdCard">
    </div>
    <div class="card__content">
      <p class="card__category">Gratuita</p>
      <h3 class="card__heading">Ademas en diferentes plataformas.</h3>
    </div>
  </a>

</template>

<script>
export default {
  data () {
    return {
      thirdCard: {
        'background-image': `url(${this.getUrl('Front-end-or-back-end')})`
      },
/*       secondCard: {
        'background-image': require('@/assets/img/firstCard.jpg')
      },
      firstard: {
        'background-image': require('@/assets/img/firstCard.jpg')
      } */
    }
  },
  methods: {
    getUrl (img)  {
      return require(`@/assets/images/${img}.png`);
    }
  }
}
</script>

<style>
.foo
{
display: flex;
background-color: #42b942; 
height: 50px;
width: 100%;
position: fixed;
bottom: 0;}
</style>