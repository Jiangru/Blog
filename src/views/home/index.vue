<template lang="pug">
  .home
    .home-scroll-wrap
      .home-list(ref="scrollObj" :style="`height: ${sHeight}px`")
        .home-item
          firstPage(:height="sHeight")
          .home-item-mask
        .home-item
          secondPage(:height="sHeight")
          .home-item-mask
        .home-item
          thirdPage(:height="sHeight")
          .home-item-mask
    .home-nav-toggle(@click="toggleNav")
      .home-nav-icon(:class="{'home-nav-icon-close': closeNav}")
    ul.home-nav
      li.home-nav-item(v-for="i in totalNav" @click="handleClickNav(i)")
        span(:class="{'home-nav-active': activeIndex === i}")
</template>
<script>
import firstPage from './component/firstPage.vue'
import secondPage from './component/secondPage.vue'
import thirdPage from './component/thirdPage.vue'
import _ from '@/utils'
export default {
  name: 'Home',
  data() {
    return {
      sHeight: 0,
      activeIndex: 1,   // 当前激活的页面
      totalNav: 3,      // 所有的导航点
      scrollObj: null,
      closeNav: false,  // 导航是否为关闭
    }
  },
  components: {
    firstPage,
    secondPage,
    thirdPage
  },
  mounted() {
    // 需要滚动的实例
    this.scrollObj = this.$refs.scrollObj
    this.initBackGround()
    // 火狐的是：DOMMouseScroll;
    // IE/Opera/Chrome：直接添加事件*/
    // if(document.addEventListener){
    //     document.addEventListener('DOMMouseScroll', _.debounce(this.scrollFunc), false);
    // }
    //IE/Opera/Chrome
    window.onmousewheel = document.onmousewheel = _.throttle(this.scrollFunc, 1700);
  },
  methods: {
    handleClickNav(i) {
      this.activeIndex = i
      const diffY = this.sHeight * (i - 1)
      this.scrollObj.style.transform = `translate3d(0px, -${diffY}px, 0px)`
      this.scrollObj.style.transition  = 'all 2s'
    },
    toggleNav() {
      this.closeNav = !this.closeNav
    },
    initBackGround() {
      this.sHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    scrollFunc(e) {
      const event = e || window.event;
      //IE/Opera/Chrome
      if (event.wheelDelta) {
        if (event.wheelDelta < 0) {
          if (this.activeIndex !== this.totalNav) {
            this.activeIndex = this.activeIndex + 1
          }
        } else {
          if (this.activeIndex !== 1) {
            this.activeIndex = this.activeIndex - 1
          }
        }
      } else if (event.detail) {
        //Firefox
        if (event.detail < 0) {
          if (this.activeIndex !== this.totalNav) {
            this.activeIndex = this.activeIndex + 1
          }
        } else {
          if (this.activeIndex !== 1) {
            this.activeIndex = this.activeIndex - 1
          }
        }
      }
      const diffY = this.sHeight * (this.activeIndex - 1)
      this.scrollObj.style.transform = `translate3d(0px, -${diffY}px, 0px)`
      this.scrollObj.style.transition  = 'all 2s'
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  &-scroll-wrap {
    overflow: hidden;
  }
  &-list {
    width: 100%;
    position: relative;
  }
  &-item {
    position: relative;
    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(250, 250, 250, .1);
    }
  }
  &-nav {
    position: fixed;
    width: 20px;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    &-active {
      transform: scale(1.8);
      background: rgba(255,255,255, .8);
      box-shadow: 0 0 5px #888888;
    }
    &-item {
      height: 14px;
      margin-top: 10px;
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: rgba(255,255,255, .6);
        &:hover {
          transform: scale(1.8);
          cursor: pointer;
          box-shadow: 0 0 5px #888888;
          background: rgba(255,255,255, .8)
        }
      }
      &:first-child {
        margin-top: 0;
      }
    }
    /* 导航按钮切换 */
    &-toggle {
      position: fixed;
      top: 50px;
      right: 50px;
      z-index: 999;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2)
    }
    &-icon {
      position: absolute;
      top: 28px;
      left: 15px;
      width: 30px;
      height: 4px;
      background-color: #fff;
      border-radius: 2px;
      transition-duration: 0.5s;
      &::before {
        position: absolute;
        top: 10px;
        left: 0;
        content: '';
        width: 30px;
        height: 4px;
        background-color: #fff;
        border-radius: 2px;
        transition-duration: 0.5s;
      }
      &::after {
        position: absolute;
        top: -10px;
        left: 0;
        content: '';
        width: 30px;
        height: 4px;
        background-color: #fff;
        border-radius: 2px;
        transition-duration: 0.5s;
      }
    }
    &-icon-close {
      height: 0;
      &::after {
        transform: translateY(10px) rotate(45deg);
      }
      &::before {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
  }
}
</style>