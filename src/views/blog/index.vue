<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    div(:class="`${prefixCls}-nav`")
    div(:class="`${prefixCls}-container`")
</template>
<script>
/**
 * @description 博客首页
 * @author 蒋如意
 * @date 2020-02-22
 */
const prefixCls = "blog"
export default {
  name: 'Blog-home',
  data() {
    return {
      prefixCls
    }
  }
}
</script>
<style lang="scss" scoped>
.blog {
  &-wrap {}
  &-container {}
}
</style>