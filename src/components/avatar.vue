<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    div(:class="headCls" :style="headStyle")
      img(:src="headSrc")
</template>
<script>
/**
 * 头像组件
 */
const prefixCls = 'avatar'
export default {
  name: 'Avatar',
  data() {
    return {
      prefixCls
    }
  },
  props: {
    // 形状有两种circle、square
    shape: {
      type: String,
      default: 'circle'
    },
    size: {
      type: Number,
      default: 50
    },
    headSrc: {
      type: String,
      default: require('@/assets/images/inithead.png')
    }
  },
  computed: {
    headCls() {
      return [
        `${prefixCls}-head`,
        `${prefixCls}-head-${this.shape}`
      ]
    },
    headStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  &-wrap {
    display: inline-block;
  }
  &-head {
    overflow: hidden;
    background-color: #dbdbdb;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-head-circle {
    border-radius: 50%;
  }
  &-head-square {
    border-radius: 4px;
  }
}
</style>