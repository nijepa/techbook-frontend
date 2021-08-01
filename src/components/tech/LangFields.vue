<template>
<transition appear name="slide-fade">
  <ul v-if="groups.length" class="lang__fields">
    <li
      v-for="group in groups"
      :key="group"
      class=""
      id="cont"
      @click.prevent="selectField(group)"
    >
      <a href="" id="box">
        {{ group.name }}
      </a>
    </li>
  </ul>
</transition>
</template>

<script>
export default {
  name: 'LangGroups',

  props: { groups: Array },

  methods: {
    selectField(group) {
      this.$emit('field', group)
    }
  }

  

}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

  .lang__fields {
    position: absolute;
    display: grid;
    max-width: 300px;
    max-height: 300px; 
    z-index: 999;
    background: $blue-dark;
    //padding: .5em;
    justify-items: flex-start;
    box-shadow: 0 1px 2px 1px rgba(26, 37, 51, 0.75);
    overflow: auto;
    
    li {
      padding: .5em;
      width: 100%;
      text-align: left;
      border-bottom: 1px solid $blue-light;
      box-shadow: 0px 0px 3px 1px #6887aebf;
      cursor: pointer;

      a {
        color: $blue-lightest;
      }
      
    }

    li:hover {
      background: $blue-darker;
    }
    
  }
</style>