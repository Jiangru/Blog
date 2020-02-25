<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    div(:class="`${prefixCls}-container`")
      span(:class="`${prefixCls}-left-icon`" @click="handlePrev")
      span(:class="`${prefixCls}-right-icon`" @click="handleNext")
      div(:class="[`${prefixCls}-item`, activatedIndex === i ? `${prefixCls}-item-active` : '']" v-for="(item, i) in imgList" :key="i")
        img(:src="item")
      ul(:class="`${prefixCls}-nav`")
        li(:class="[`${prefixCls}-nav-item`, activatedIndex === i ? `${prefixCls}-nav-item-active` : '']" v-for="(item, i) in imgList" :key="`nav${i}`" @click="handleNavItem(i)")
</template>
<script>
/**
 * @description 轮播组件
 */
const prefixCls = 'wheel-plant'
export default {
  name: 'WheelPlant',
  data() {
    return {
      prefixCls,
      activatedIndex: 0,
      intTimer: null // 自动轮播实例id
    }
  },
  props: {
    imgList: {
      type: Array,
      default() {
        return [
          require('@/assets/images/bg_image1.jpg'),
          require('@/assets/images/bg_image2.jpg')
        ]
      }
    },
    // 自动轮播
    isAuto: {
      type: Boolean,
      default: true
    },
    // 设置自动轮播的时间
    autoTime: {
      type: [String, Number],
      default: 8000
    }
  },
  mounted() {
    // 设置自动轮播
    if (this.isAuto) {
      this.autoNext()
    }
  },
  methods: {
    handleNext() {
      this.activatedIndex = this.activatedIndex === this.imgList.length - 1 ? 0 : this.activatedIndex + 1
      // 点击下一页时需要清除自动轮播
      if (this.isAuto) {
        this.autoNext()
      }
    },
    handlePrev() {
      this.activatedIndex = this.activatedIndex === 0 ? this.imgList.length - 1 : this.activatedIndex - 1
      if (this.isAuto) {
        this.autoNext()
      }
    },
    handleNavItem(i) {
      this.activatedIndex = i
    },
    autoNext() {
      clearInterval(this.intTimer)
      this.intTimer = setInterval(() => {
        this.activatedIndex = this.activatedIndex === this.imgList.length - 1 ? 0 : this.activatedIndex + 1 
        this.handleNavItem(this.activatedIndex)
      }, this.autoTime);
    }
  }
}
</script>
<style lang="scss" scoped>
$prefixCls: '.wheel-plant';
.wheel-plant {
  &-wrap {
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 60px;
  }
  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover {
      #{$prefixCls}-left-icon, #{$prefixCls}-right-icon {
        opacity: 1;
      }
      #{$prefixCls}-left-icon {
        left: 10px;
      }
      #{$prefixCls}-right-icon {
        right:  10px;
      }
    }
  }
  // 主题内容
  &-item {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 1s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-item-active {
    opacity: 1;
  }
  // 上一页/下一页
  &-left-icon, &-right-icon {
    display: inline-block;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    transition: all .5s;
    opacity: 0;
    cursor: pointer;
  }
  &-left-icon {
    background-image: url('~@/assets/images/left_white.png');
    background-size: cover;
    left: 50px;
  }
  &-right-icon {
    background-image: url('~@/assets/images/right_white.png');
    background-size: cover;
    right: 50px;
  }
  // 导航
  &-nav {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    &-item {
      display: inline-block;
      margin-right: 10px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #FFF;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background-color: #3388ff;
      }
    }
    &-item-active {
      background-color: #3388ff;
    }
  }
}
</style>