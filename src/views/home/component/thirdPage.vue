<template lang="pug">
  .third-page(:style="styles")
</template>

<script>
export default {
  name: 'thirdPage',
  data() {
    return {
      
    }
  },
  props: {
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles() {
      return {
        width: '100%',
        height: `${this.height}px`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.third-page {
  background-image: url('~@/assets/images/bg_image3.jpg');
  background-size: cover;
}
</style>
