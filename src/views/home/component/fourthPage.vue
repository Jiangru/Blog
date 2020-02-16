<template lang="pug">
  .fourth-page(:style="styles")
    canvas-car
    .fourth-page-title canvas 动画demo
    canvas-process
    .fourth-page-email 联系我：865463910@qq.com
</template>
<script>
import canvasCar from './car'
import canvasProcess from './process'
export default {
  name: 'fourthPage',
  components: {
    canvasCar,
    canvasProcess
  },
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
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.fourth-page {
  background-image: url('~@/assets/images/bg_image4.jpg');
  background-size: cover;
  &-title {
    position: absolute;
    font-size: 36px;
    color: #D8935C;
    top: 350px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid #D8935C;
    border-radius: 4px;
    padding: 6px 12px;
  }
  &-email {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #D7D3D3;
    font-family: 'secondFont';
  }
}
</style>