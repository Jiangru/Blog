<template lang="pug">
  .second-page(:style="styles")
</template>

<script>
export default {
  name: 'secondPage',
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
.second-page {
  background-image: url('~@/assets/images/bg_image3.jpg');
  background-size: cover;
}
</style>
