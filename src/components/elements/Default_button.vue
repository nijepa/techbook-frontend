<template>
  <button type="submit" @click="handleClick" class="def__btn" :class="`btn-${type}`">
    <icon :icon="svg" />
    <!-- <img :src="$svg(svg)" /> -->
    <span>{{ title }}</span>
  </button>
</template>

<script>
import icon from '@/components/elements/Default_icon.vue'
export default {
  name: 'Default button',
  components:{icon},
  props: {
    title: {
      type: String,
      required: true
    },
    svg: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked')
      //this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.def__btn {
  background: transparent;
  border-radius: 2em;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: .2em;
  font-variant: small-caps;
  font-weight: 800;
  //color: $blue-dark;
  transition: ease-in-out .4s all;

  span {
    margin-right: .2em;
    transition: all .4s ease-in-out;
    font-size: 1em;
  }
}

.btn-nav {
  //border: 1px solid $blue-light;
  background-color: $blue-light;
  span {
    opacity: 0.2;
    //color: $blue-dark;
  }
  svg {
    path {
      stroke: $blue-lightest;
    }
  }
}
.btn-nav:hover {
  background: $blue-lightest;
  border: 2px solid lighten($color: $blue-dark, $amount: 45%);
  span {
    color: $blue-darkest;
    opacity: 1;
  }
  svg {
    path {
      stroke: $blue-darkest;
    }
  }
}
.btn-primary {
  span {
    color: lighten($color: $blue-dark, $amount: 35%);
  }
  svg {
    path {
      stroke: lighten($color: $blue-dark, $amount: 15%);
    }
  }
}
.btn-primary:hover {
  background: $blue-dark;
  border: 2px solid lighten($color: $blue-dark, $amount: 45%);
  span {
    color: lighten($color: $blue-dark, $amount: 45%);
  }
  svg {
    path {
      stroke: lighten($color: $blue-dark, $amount: 45%);
    }
  }
}
.btn-dark {
  background: $blue-dark;
  span {
    color: lighten($color: $blue-dark, $amount: 15%);
  }
  svg {
    path {
      stroke: lighten($color: $blue-dark, $amount: 35%);
    }
  }
}
.btn-dark:hover {
  background: lighten($color: $blue-dark, $amount: 45%);
  border: 2px solid lighten($color: $blue-dark, $amount: 35%);
  span {
    color: $blue-dark;
  }
  svg {
    path {
      stroke: $blue-dark;
    }
  }
}
.btn-secondary {
  background: $orange-main;
  span {
    color: lighten($color: $orange-main, $amount: 15%);
  }
  svg {
    path {
      stroke: lighten($color: $orange-main, $amount: 35%);
    }
  }
}
.btn-secondary:hover {
  background: lighten($color: $orange-main, $amount: 45%);
  border: 2px solid lighten($color: $orange-main, $amount: 35%);
  span {
    color: $orange-main;
  }
  svg {
    path {
      stroke: $orange-main;
    }
  }
}
</style>