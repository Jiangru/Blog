<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    div(:class="`${prefixCls}-container`")
      header(:class="`${prefixCls}-container-head`")
        | {{ cardOpt.title }}
      main(:class="`${prefixCls}-container-main`")
        div(:class="`${prefixCls}-container-main-left`")
          img(:src="cardOpt.img")
        div(:class="`${prefixCls}-container-main-right`")
          h1(:class="`${prefixCls}-container-main-right-date`") {{ cardOpt.date }}
          div(:class="`${prefixCls}-container-main-right-content`") {{ cardOpt.content }}
</template>
<script>
/**
 * @description 内容简介卡片
 */
const prefixCls = 'card'
export default {
  name: 'Card',
  data() {
    return {
      prefixCls
    }
  },
  props: {
    cardOpt: {
      type: Object,
      default() {
        return {
          title: '关于这次疫情对职场的影响',
          date: '2020-02-25 21:38:39',
          img: require('@/assets/images/fengjing1.jpg'),
          content: '人社部回应疫情对就业的影响 人力资源和社会保障部副部长游钧表示，突发疫情对就业影响不小。人社部回应疫情对就业的影响 人力资源和社会保障部副部长游钧表示，突发疫情对就业影响不小。企业开工复工普遍推迟，劳动者返岗复工相应延后。市场招聘需求在下降，高校毕业生、农民工等重点群体就业难度会增加。'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$prefixCls: '.card';
.card {
  &-wrap {
    background-color: #ffba5a;
    border-radius: 3px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.5);
    cursor: pointer;
    &:hover {
      #{$prefixCls}-container-main-right-content {
        // display: block;
        -webkit-line-clamp: 8
      }
    }
  }
  &-container {
    min-height: 260px;
    &-head {
      position: relative;
      height: 50px;
      line-height: 50px;
      padding: 0 24px;
      font-family: '微软雅黑';
      font-size: 24px;
      color: #fcf8e8;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 1px;
        background-color: rgba(150, 150, 150, 0.5);
      }
    }
    &-main {
      margin-top: 10px;
      overflow: hidden;
      padding: 24px;
      &-left {
        float: left;
        width: 40%;
        height: 145px;
        margin-right: 20px;
        box-shadow: 2px 2px 5px rgba(0,0,0,.5);
        img {
          width: 100%;
          height: 100%;
        }
      }
      &-right {
        &-date {
          color: #706c61;
        }
        &-content {
          color: #fcf8e8;
          text-indent: 36px;
          margin-top: 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
          transition: all 1s;
        }
      }
    }
  }
}
</style>