<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    nav(:class="`${prefixCls}-nav`")
      div(:class="`${prefixCls}-nav-content`")
        div(:class="`${prefixCls}-nav-left`") 蒋如意的博客
        div(:class="`${prefixCls}-nav-right`")
         ul
          li(:class="`${prefixCls}-nav-item`" @click="goHome") 首页
    main(:class="`${prefixCls}-container`")
      div(:class="`${prefixCls}-left`")
        div(:class="`${prefixCls}-wheel-plant`")
          wheel-plant(:img-list="wheelImg")
        div(:class="`${prefixCls}-info-list`")
          div(:class="`${prefixCls}-info-list-item`")
            img(src="@/assets/images/xiaoqingxin1.jpg")
          div(:class="`${prefixCls}-info-list-item`")
            img(src="@/assets/images/xiaoqingxin2.jpg")
        div(:class="`${prefixCls}-content-list`")
          div(:class="`${prefixCls}-content-list-item`" @click="goArticle")
            card
          div(:class="`${prefixCls}-content-list-item`" @click="goArticle")
            card
      aside(:class="`${prefixCls}-right`")
        div(:class="`${prefixCls}-user-card`")
          div(:class="`${prefixCls}-user-card-head`")
            avatar(:size="100" :head-src="headSrc")
          p 职业：前端工程师
          p 坐标：广东·深圳
          p 目前就职于中国平安人寿总部
        router-view
        div(:class="`${prefixCls}-news`")
          div(:class="`${prefixCls}-news-list`")
            a(:class="`${prefixCls}-news-item`" href="http://topic.eastmoney.com/xgzfy/" target="blank") 国家卫健委：28日新增427例确诊病例 湖北新增423例
            a(:class="`${prefixCls}-news-item`" href="http://finance.eastmoney.com/a/202002291401734114.html" target="blank") 韩国新增594例确诊病例 累计2931例
            a(:class="`${prefixCls}-news-item`" href="http://finance.eastmoney.com/a/202002281401569540.html" target="blank") 分析师：或迎黄金坑2.0
            a(:class="`${prefixCls}-news-item`" href="http://finance.eastmoney.com/a/202002281401546164.html" target="blank") 20家公募紧急把脉：恐慌情绪大幅释放 有人逆市加仓
</template>
<script>
/**
 * @description 博客首页
 * @author 蒋如意
 * @date 2020-02-22
 */
import WheelPlant from '@/components/wheelPlant.vue'
import Card from '@/components/card.vue'
import Avatar from '@/components/avatar.vue'
const prefixCls = "blog"
export default {
  name: 'Blog-home',
  components: {
    WheelPlant,
    Card,
    Avatar
  },
  data() {
    return {
      prefixCls,
      headSrc: require('@/assets/images/myself1.jpg'),
      wheelImg: [
        require('@/assets/images/fengjing1.jpg'),
        require('@/assets/images/fengjing2.jpg'),
        require('@/assets/images/fengjing3.jpg'),
        require('@/assets/images/fengjing4.jpg'),
      ]
    }
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    },
    goArticle() {
      this.$router.push({
        path: '/blog/article'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.blog {
  &-nav {
    width: 100%;
    height: 60px;
    background: #2c7873;
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
  /* -- 轮播 -- */
  &-wheel-plant {
    display: inline-block;
    margin: 20px 0;
    width: 60%;
    height: 260px;
    border-radius: 3px;
    overflow: hidden;
    vertical-align: top;
  }
  /* -- 简讯两个模块 -- */
  &-info-list {
    display: inline-block;
    width: 36%;
    margin: 20px 0 20px 4%;
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
    box-sizing: border-box;
    padding-right: 2%;
  }
  &-right {
    float: right;
    width: 30%;
  }
  /* -- 自我介绍 -- */
  &-user-card {
    width: 100%;
    height: 260px;
    background-color: #52de97;
    margin: 20px 0;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    p {
      color: #fcf8e8;
    }
    &-head {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  /* -- 主体内容列表 -- */
  &-content-list {
    &-item {
      width: 100%;
      margin: 20px 0;
      &:first-child {
        margin-top: 0;
      }
    }
  }
  /* -- 新闻模块 -- */
  &-news {
    margin: 20px 0;
    padding: 20px;
    background-color: #c0ffb3;
    border-radius: 3px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    &-list {

    }
    &-item {
      display: inline-block;
      margin: 6px 0;
      color: #3282b8;
    }
  }
}
</style>