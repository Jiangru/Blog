<template lang="pug">
  .first-page(:style="styles")
</template>
<script>
export default {
  name: 'firstPage',
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
  },
}
</script>
<style lang="scss" scoped>
.first-page {
  background-image: url('~@/assets/images/bg_image1.jpg');
  background-size: cover;
}
</style>