<template lang="pug">
  .third-page(:style="styles")
    .third-page-container
      .third-page-head
        .third-page-head-zn 工作经历
        .third-page-head-en MY EXPERIENCE
      .third-page-content
        .third-page-content-left.left1
          .third-page-content-time 2017.02 ~ 2018.12.19
          .third-page-content-company 深圳.智道金服-前端工程师
          .third-page-content-subtitle 工作描述：
          .third-page-content-introduce
            .third-page-content-text 1.团队讨论具体功能的细节问题，
            .third-page-content-text 与其他技术人员沟通并制定设计规范；
            .third-page-content-text 2.对已上线项目进行定期维
            .third-page-content-text 护工作，负责公司现有项目的调试；
            .third-page-content-text 3.功能模块的增加与效果的实现；
        .third-page-content-center
          span.third-page-content-center-circle1
          span.third-page-content-center-circle2
          span.third-page-content-center-circle3
        .third-page-content-right.right1
          .third-page-content-time 2018.12.20 ~ 至今
          .third-page-content-company 深圳.中国平安人寿-前端工程师
          .third-page-content-subtitle 工作描述：
          .third-page-content-introduce
            .third-page-content-text 1.负责PC及移动端产品的前端代码
            .third-page-content-text 开发工作，制定前端规范，完成组件开发等；
            .third-page-content-text 2.负责对产品页面性能的优化和维护，持续提升用户体验；
            .third-page-content-text 3.研究和跟踪新的前端技术发展，合理应用到项目中，负责codereview等；
        .third-page-content-right.right2
          .third-page-content-time 2015.02 ~ 2017.02
          .third-page-content-company 深圳.全通数码-前端工程师
          .third-page-content-subtitle 工作描述：
          .third-page-content-introduce
            .third-page-content-text 1.使用 CSS3 的新特性完成侧边栏；
            .third-page-content-text 2.对已上线项目进行定期维护工作，负责公司现有项目的调试；
            .third-page-content-text 3.持续学习；
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
@mixin circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #D8935C;
  border-radius: 50%;
  box-shadow: 0 0 15px #D8935C;
  &:hover {
    box-shadow: none;
    border: 2px solid #ffffff;
    transform: translateX(-50%) scale(1.1);
  }
}
.third-page {
  background-image: url('~@/assets/images/bg_image3.jpg');
  background-size: cover;
  cursor: default;
  &-container {
    width: 800px;
    height: 100%;
    margin: 0 auto;
  }
  &-head {
    position: relative;
    top: 80px;
    text-align: center;
    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      display: block;
      height: 2px;
      width: 20px;
      background-color: #D8935C;
    }
    &-zn {
      font-size: 30px;
      font-weight: bold;
      color: #D8935C;
    }
    &-en {
      font-size: 26px;
      color: #D7D3D3;
    }
  }
  &-content {
    position: relative;
    top: 160px;
    height: 80%;
    color: #D7D3D3;
    /* 就职时间 */
    &-time {
      font-family: '微软雅黑';
      font-weight: bold;
      color: #D8935C;
      font-size: 20px;
      transition: color 1s;
      &:hover {
        color: rgba(216, 147, 92, .4);
      }
    }
    /* 就职公司 */
    &-company {
      font-size: 16px;
      font-family: 'thirdFont';
      margin-top: 4px;
    }
    /* 工作描述 */
    &-subtitle {
      font-size: 20px;
      font-family: 'thirdFont';
      font-weight: 600;
      margin: 8px 0 10px;
    }
    &-text {
      line-height: 24px;
      font-family: 'thirdFont';
    }
    &-introduce {
      width: 350px;
    }
    &-left {}
    .left1 {
      position: absolute;
      text-align: left;
      left: 100px;
      top: 250px;
    }
    &-center {
      position: absolute;
      width: 4px;
      height: 90%;
      background: #D8935C;
      left: 50%;
      transform: translateX(-50%);
      &-circle1 {
        top: 30px;
        @include circle;
      }
      &-circle2 {
        top: 250px;
        @include circle;
      }
      &-circle3 {
        top: 460px;
        @include circle;
      }
    }
    &-right {
      
    }
    .right1 {
      position: absolute;
      right: 0;
      top: 30px;
    }
    .right2 {
      position: absolute;
      right: 0;
      top: 460px;
    }
  }
}
@font-face {
  font-family: 'thirdFont';
  src: url('~@/assets/font/SourceHanSansCN-Normal.otf');
}
</style>
