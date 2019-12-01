<template>
  <div>
    <img :class="iconClass" :src="require('@/assets/icons/logo.svg')" alt />
    <span class="logo-text" :style="textStyle">LWS</span>
  </div>
</template>

<style>
.logo-text {
  font-size: 24px;
  line-height: 36px;
}
.logo-icon {
  /* width: 20%; */
  height: 85%;
  margin-top: -10px;
  vertical-align: middle
}
.white-icon {
  filter: brightness(0) invert(1);
}
</style>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass() {
      return {
        'logo-icon': true,
        'white-icon': this.white
      }
    },
    textStyle() {
      return {
        color: this.white ? '#ffffff' : '#3c9d9b'
      }
    }
  }
}
</script>