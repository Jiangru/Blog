<template lang="pug">
  .second-page(:style="styles")
    .second-page-container
      .second-page-head
        .second-page-head-img
        .second-page-head-title 前端攻城狮
      .second-page-introduce
        h1.second-page-title - 你好，我是John!
        p.second-page-text - 我是一名前端工程师；一个产品在我眼里就像是自己的孩子，多花一份心，他会感受到并且茁壮成长
        h1.second-page-title - 我的技能
        p.second-page-text - 前端模块化、MVVM框架运用（vue）、熟练掌握JavaScript、html5、css3，熟悉webpack、nodejs、canvas等
        h1.second-page-title - 关于我
        p.second-page-text - 坐标深圳，目前就职于中国平安人寿总部
        h1.second-page-title - 与君共勉
        p.second-page-text - 当你想要放弃的时候，想下是什么让你当初坚持走到现在
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
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.second-page {
  background-image: url('~@/assets/images/bg_image2.jpg');
  background-size: cover;
  &-container {
    width: 800px;
    margin: 0 auto;
  }
  &-head {
    position: relative;
    top: 80px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    &-img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 180px;
      background-image: url('~@/assets/images/lion.png');
      background-size: cover;
      &::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        content: '';
        width: 400px;
        height: 3px;
        background: #ffffff;
      }
    }
    &-title {
      margin-top: 30px;
      font-size: 60px;
      color: #FCF6F6;
      font-family: 'secondFont';
    }
  }
  &-introduce {
    position: relative;
    top: 120px;
  }
  &-title {
    color: #D7D3D3;
    font-size: 22px;
    line-height: 36px;
    font-weight: bold;
  }
  &-text {
    color: #D7D3D3;
    line-height: 36px;
    font-size: 16px;
  }
}
</style>
