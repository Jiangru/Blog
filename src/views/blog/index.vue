<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    nav(:class="`${prefixCls}-nav`")
      div(:class="`${prefixCls}-nav-content`")
        div(:class="`${prefixCls}-nav-left`") 蒋如意的博客
        div(:class="`${prefixCls}-nav-right`")
         ul
          li(:class="`${prefixCls}-nav-item`" @click="goHome") 首页
    main(:class="`${prefixCls}-container`")
      aside(:class="`${prefixCls}-right`")
        div(:class="`${prefixCls}-user-card`")
      div(:class="`${prefixCls}-left`")
        div(:class="`${prefixCls}-wheel-plant`")
          wheel-plant(:img-list="wheelImg")
        div(:class="`${prefixCls}-info-list`")
          div(:class="`${prefixCls}-info-list-item`")
            img(src="@/assets/images/dali4.jpg")
          div(:class="`${prefixCls}-info-list-item`")
            img(src="@/assets/images/dali2.jpg")
        card
</template>
<script>
/**
 * @description 博客首页
 * @author 蒋如意
 * @date 2020-02-22
 */
import WheelPlant from '@/components/wheelPlant.vue'
import Card from '@/components/card.vue'
const prefixCls = "blog"
export default {
  name: 'Blog-home',
  components: {
    WheelPlant,
    Card
  },
  data() {
    return {
      prefixCls,
      wheelImg: [
        require('@/assets/images/dali1.jpg'),
        require('@/assets/images/dali3.jpg'),
        require('@/assets/images/dali2.jpg'),
        require('@/assets/images/dali4.jpg'),
      ]
    }
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>
.blog {
  &-nav {
    width: 100%;
    height: 60px;
    background: #171714;
    &-content {
      width: 70%;
      margin: 0 auto;
    }
    &-left {
      position: relative;
      display: inline-block;
      line-height: 60px;
      font-family: 'secondFont';
      color: #FFF;
      font-size: 36px;
      &::after {
        content: '';
        width: 3px;
        height: 46px;
        background-color: #FFF;
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-right {
      display: inline-block;
      vertical-align: top;
      line-height: 60px;
      margin-left: 40px;
    }
    &-item {
      color: #FFF;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        color: #00c1de;
      }
    }
  }
  &-container {
    width: 70%;
    height: 600px;
    // background-color: red;
    margin: 0 auto;
  }
  &-wheel-plant {
    display: inline-block;
    margin: 20px 0;
    width: 60%;
    height: 260px;
    border-radius: 3px;
    overflow: hidden;
    vertical-align: top;
  }
  &-info-list {
    display: inline-block;
    width: 36%;
    margin: 20px 2%;
    &-item {
      width: 100%;
      height: 120px;
      border-radius: 3px;
      margin-bottom: 20px;
      overflow: hidden;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      img {
        width: 100%;
        opacity: .7;
        transition: all .5s;
        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }
  &-left {
    float: left;
    width: 70%;
  }
  &-right {
    float: right;
    width: 30%;
  }
  &-user-card {
    width: 100%;
    height: 260px;
    background-color: rgba(42,42,42,1);
    margin: 20px 0;
    border-radius: 3px;
  }
}
</style>