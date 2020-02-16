<template lang="pug">
  .home
    // 导航侧栏
    .home-nav-rectangle(:class="{'home-nav-rectangle-show': showNav}")
      .home-nav-rectangle-menu
        .home-nav-rectangle-menu-item(v-for="(item, i) in menuList" :key="i" @click="handleClickMenu(i + 1)") {{ item.label }}
    // 遮罩层
    .home-nav-mask(:class="{'home-nav-mask-show': showNav}")
    // 页面集合
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
        .home-item
          fourthPage(:height="sHeight")
          .home-item-mask
    // 导航按钮
    .home-nav-toggle(@click="toggleNav")
      .home-nav-icon(:class="{'home-nav-icon-close': closeNav}")
    // 导航点点
    ul.home-nav
      li.home-nav-item(v-for="i in totalNav" @click="handleClickNav(i)")
        span(:class="{'home-nav-active': activeIndex === i}")
    // 音乐
    .home-audio-btn(@mouseenter="mouseEnter" @mouseout="mouseOut" @click="playMusic")
      span.home-audio-play(v-show="isPlay && showPlay")
      span.home-audio-pause(v-show="!isPlay && showPlay")
    .home-audio
      audio(src="@/assets/images/music.mp3" ref="audio") Your browser does not support the audio tag.
</template>
<script>
import firstPage from './component/firstPage.vue'
import secondPage from './component/secondPage.vue'
import thirdPage from './component/thirdPage.vue'
import fourthPage from './component/fourthPage.vue'
import _ from '@/utils'
export default {
  name: 'Home',
  data() {
    return {
      sHeight: 0,
      activeIndex: 1,   // 当前激活的页面
      totalNav: 4,      // 所有的导航点
      scrollObj: null,
      closeNav: false,  // 导航按钮是否为关闭
      showNav: false,   // 是否展示导航栏
      audio: null,
      isPlay: true,     // 播放按钮的状态
      showPlay: false,
      menuList: [
        {
          label: '首页'
        },
        {
          label: '自我介绍'
        },
        {
          label: '工作经历'
        },
        {
          label: 'canvas作品展示'
        }
      ]
    }
  },
  components: {
    firstPage,
    secondPage,
    thirdPage,
    fourthPage
  },
  mounted() {
    // 获取音频实例
    this.audio = this.$refs.audio
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
    handleClickMenu (i) {
      // 关闭导航
      this.toggleNav()
      // 滚动到对应页面
      this.handleClickNav(i)
    },
    handleClickNav(i) {
      this.activeIndex = i
      const diffY = this.sHeight * (i - 1)
      this.scrollObj.style.transform = `translate3d(0px, -${diffY}px, 0px)`
      this.scrollObj.style.transition  = 'all 2s'
    },
    toggleNav() {
      this.closeNav = !this.closeNav
      this.showNav = this.closeNav
    },
    mouseEnter() {
      this.showPlay = true
    },
    mouseOut(e) {
      // 移出后的鼠标不在内部的伪元素或者自己本身的时候需要隐藏按钮
      if (e.toElement.nodeName !== 'SPAN' && e.toElement.className !== 'home-audio-btn') {
        this.showPlay = false
      }
    },
    playMusic() {
      if (this.isPlay) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
      this.isPlay = !this.isPlay
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
    // &-mask {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: rgba(250, 250, 250, .1);
    // }
  }
  &-audio-btn {
    position: fixed;
    z-index: 999;
    top: 50%;
    margin-top: 63px;
    right: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background: rgba(255,255,255, .6);
    }
  }
  &-audio-play{
    &::before {
      content: '';
      border: 10px solid transparent;
      border-right-width: 0;
      border-left-color: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-audio-pause{
    &::before, &::after {
      content: '';
      position: absolute;
      display: inline-block;
      left: 22px;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 4px;
      height: 20px;
      background: #333;
    }
    &::after {
      left: 28px;
    }
  }
  &-nav {
    position: fixed;
    z-index: 101;
    width: 20px;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: -70px;
      right: -10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-image: url('~@/assets/images/music_bg.jpg');
      background-size: cover;
      cursor: pointer;
      overflow: hidden;
      animation: music 10s linear infinite;
    }
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
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
      &:hover {
        background: rgba(216, 147, 92, .5);
      }
    }
    /* 导航侧栏样式 */
    &-rectangle {
      position: fixed;
      z-index: 999;
      top: 0;
      right: -100%;
      display: inline-block;
      border-right-width: 235px;
      border-right-style: solid;
      border-right-color: #e4e2e3;
      border-left-color: transparent;
      border-left-style: solid;
      border-left-width: 100px;
      border-top-width: 0px;
      border-top-style: none;
      border-bottom-width: 937px;
      border-bottom-style: solid;
      border-bottom-color: #e4e2e3;
      transition: right .3s ease-in-out; 
      &-menu {
        position: absolute;
        z-index: 1000;
        top: 360px;
        right: -200px;
        &-item {
          position: relative;
          color: #2088B5;
          font-family: 'thirdFont';
          line-height: 60px;
          cursor: pointer;
          &:hover {
            color: rgba(32, 136, 181, .5);
            &::after {
              position: absolute;
              z-index: 1000;
              left: -60px;
              top: 40px;
              display: block;
              content: '';
              height: 2px;
              width: 200px;
              background: #2088B5;
            }
          }
        }
      }
    }
    &-rectangle-show {
      right: 0;
    }
    /* 导航侧栏遮罩层 */
    &-mask {
      position: fixed;
      z-index: 98;
      height: 937px;
      right: 0;
      width: 0;
      background: rgba(0,0,0,.75);
      // transition: width .1s ease-in-out;
    }
    &-mask-show {
      width: 100%;
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
@keyframes music {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>