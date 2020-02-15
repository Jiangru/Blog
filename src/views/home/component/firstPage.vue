<template lang="pug">
  .first-page(:style="styles")
    .first-page-container
      .first-page-stage
        .first-page-shape.first-page-shapeAim(:class="styleType ? 'first-page-cube' : 'first-page-ring'")
          .first-page-plane.one
            .first-page-plane-text 我最大的敌人是自己
            .first-page-plane-english My biggest enemy is yourself.
          .first-page-plane.two
            .first-page-plane-text 我能接受失败，但无法接受放弃
            .first-page-plane-english I can accept failure, but I can't accept giving up.
          .first-page-plane.three
            .first-page-plane-text 坚持走出自己的梦想之路
            .first-page-plane-english Stick to out of the road to your dreams.
          .first-page-plane.four
            .first-page-plane-text 我知道每天凌晨四点洛杉矶的样子
            .first-page-plane-english I know that the appearance of Los Angeles at four o 'clock in the morning every day.
          .first-page-plane.five
            .first-page-plane-text 总有一个人要赢的，那为什么不能是我！
            .first-page-plane-english There is always a person want to win, that is why can't I!
          .first-page-plane.six
            .first-page-plane-text 第二名就意味着你是头号输家！
            .first-page-plane-english Second place means you is the number one loser!
          .first-page-plane.seven
          .first-page-plane.eight
          .first-page-plane.nine
          .first-page-plane.ten
          .first-page-plane.eleven
          .first-page-plane.twelve
      .first-page-text
        p Hello, I'm John
        p Yes! I'm a Kobe Fans
    .first-page-btn(@click="toggleStyle()") mamba out
</template>
<script>
export default {
  name: 'firstPage',
  data() {
    return {
      styleType: true,   // 样式切换，默认是骰子形状的样式
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
  methods: {
    toggleStyle() {
      console.log('jinru')
      this.styleType = !this.styleType
    }
  }
}
</script>
<style lang="scss" scoped>
.first-page {
  background-image: url('~@/assets/images/bg_image1.jpg');
  background-size: cover;
  &-container {
    position: relative;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 700px;
    perspective: 800px;
    perspective-origin: 50% 225px;
  }
  &-text {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "firstFont";
    line-height: 40px;
    font-size: 28px;
    letter-spacing: 2px;
    text-align: center;
  }
  &-stage {
    width: 100%;
    height: 100%;
    transition: transform 2s;
    -webkit-transition: -webkit-transform 2s;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d
  }
  &-shape {
    position: relative;
    transition: transform 1s;
    top: 160px;
    margin: 0 auto;
    height: 200px;
    width: 200px;
    transform: translateZ(0px);
    transform-style: preserve-3d;
  }
  &-shapeAim {
    animation: spin 18s infinite linear;
  }
  &-plane {
    position: absolute;
    opacity: .5;
    width: 200px;
    height: 200px;
    border: 1px solid white;
    border-radius: 12px;
    text-align: center;
    font-family: "微软雅黑";
    font-size: 12px;
    color: white;
    background-color: rgba(255,255,255,.6);
    transition: -webkit-transform 2s, opacity 2s;
    cursor: pointer;
  }
  &-plane-text {
    position: relative;
    top: 170px;
  }
  &-cube {
    .first-page-plane-english {
      display: none;
    }
    > .one {
      transform: scale3d(1.2,1.2,1.2) translateZ(100px);
    }
    > .two {
      transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) translateZ(100px);
    }
    > .three {
      transform: scale3d(1.2, 1.2, 1.2) rotateY(-180deg) translateZ(100px) rotateZ(180deg);
    }
    > .four {
      transform: scale3d(1.2,1.2,1.2) rotateX(-90deg) translateZ(100px);
    }
    > .five {
      transform: scale3d(1.2,1.2,1.2) rotateY(90deg) translateZ(100px);
    }
    > .six {
      transform: scale3d(1.2,1.2,1.2) rotateY(-90deg) translateZ(100px);
    }
    > .seven {
      transform: scale3d(0.8,0.8,0.8) translateZ(100px);
      background-image: url('~@/assets/images/kobe1.jpg');
      background-size: cover;
    }
    > .eight {
      transform: scale3d(0.8,0.8,0.8) rotateY(-90deg) translateZ(100px);
      background-image: url('~@/assets/images/kobe2.jpg');
      background-size: cover;
    }
    > .nine {
      transform: scale3d(0.8,0.8,0.8) rotateY(90deg) translateZ(100px);
      background-image: url('~@/assets/images/kobe3.jpg');
      background-size: cover;
    }
    > .ten {
      transform: scale3d(0.8,0.8,0.8) rotateX(90deg) translateZ(100px);
      background-image: url('~@/assets/images/kobe4.jpg');
      background-size: cover;
    }
    > .eleven {
      transform: scale3d(0.8,0.8,0.8) rotateY(-180deg) translateZ(100px);
      background-image: url('~@/assets/images/kobe5.jpg');
      background-size: cover;
    }
    > .twelve {
      transform: scale3d(0.8,0.8,0.8) rotateX(-90deg) translateZ(100px);
      background-image: url('~@/assets/images/kobe6.jpg');
      background-size: cover;
    }
  }
  &-ring {
    .first-page-plane-text {
      top: 50%;
      transform: translateY(-50%);
      color: #000;
    }
    .first-page-plane-english {
      position: relative;
      top: 50%;
      transform: translateY(-50%) scale(0.85);
      margin-top: 20px;
      color: #000;
      font-family:'Courier New', Courier, monospace;
    }
    > .one {
      transform: translateZ(380px);
    }
    > .two {
      transform: rotateY(60deg) translateZ(380px);
    }
    > .three {
      transform: rotateY(120deg) translateZ(380px);
    }
    > .four {
      transform: rotateY(180deg) translateZ(380px);
    }
    > .five {
      transform: rotateY(240deg) translateZ(380px);
    }
    > .six {
      transform: rotateY(300deg) translateZ(380px);
    }
    > .seven {
      transform: rotateY(30deg) translateZ(380px);
      background-image: url('~@/assets/images/kobe1.jpg');
      background-size: cover;
    }
    > .eight {
      transform: rotateY(90deg) translateZ(380px);
      background-image: url('~@/assets/images/kobe2.jpg');
      background-size: cover;
    }
    > .nine {
      transform: rotateY(150deg) translateZ(380px);
      background-image: url('~@/assets/images/kobe3.jpg');
      background-size: cover;
    }
    > .ten {
      transform: rotateY(210deg) translateZ(380px);
      background-image: url('~@/assets/images/kobe4.jpg');
      background-size: cover;
    }
    > .eleven {
      transform: rotateY(270deg) translateZ(380px);
      background-image: url('~@/assets/images/kobe5.jpg');
      background-size: cover;
    }
    > .twelve {
      transform: rotateY(330deg) translateZ(380px);
      background-image: url('~@/assets/images/kobe6.jpg');
      background-size: cover;
    }
  }
  
  &-backface {
    backface-visibility: visible;
  }
  &-btn {
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    padding: 6px 24px;
    color: #37474f;
    font-weight: bold;
    font-family: "微软雅黑";
    font-size: 14px;
    border: 3px solid #37474f;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 220px;
      height: 40px;
      top: 0;
      left: 0;
      z-index: -1;
      background: #37474f;
      transform-origin: 0% 100%;
      transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
      transition: transform 0.3s, opacity 0.3s, background-color 0.3s, color 0.3s, border-color 0.3s;
    }
    &:hover {
      color: #f3f3f3;
      border-color: #3f51b5;
    }
    &:hover::before {
      transform: rotate3d(0, 0, 1, 0deg);
      background-color: #3f51b5;
    }
  }
}
@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-360deg);
  }
}
@font-face {
  font-family: 'firstFont';
  src: url('~@/assets/font/BRUX.otf');
}
</style>