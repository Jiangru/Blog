<template lang="pug">
  .home
    .home-item
      firstPage(:height="sHeight")
      .home-item-mask
    .home-item
      secondPage(:height="sHeight")
      .home-item-mask
    ul.home-nav
      li.home-nav-item
        span
      li.home-nav-item
        span
      li.home-nav-item
        span
</template>
<script>
import firstPage from './component/firstPage.vue'
import secondPage from './component/secondPage.vue'
export default {
  name: 'Home',
  data() {
    return {
      sHeight: 0
    }
  },
  components: {
    firstPage,
    secondPage
  },
  mounted() {
    this.initBackGround()
  },
  methods: {
    initBackGround() {
      this.sHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  &-item {
    position: relative;
    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .25);
    }
  }
  &-nav {
    position: fixed;
    width: 20px;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    &-item {
      height: 14px;
      margin-top: 10px;
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: rgba(255,255,255,1);
        &:hover {
          transform: scale(1.8);
          cursor: pointer;
          box-shadow: 0 0 5px #888888;
        }
      }
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>