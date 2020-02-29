<template lang="pug">
  div(:class="`${prefixCls}-wrap`")
    h1(:class="`${prefixCls}-title`") this function is not yet open ~ coming soon !
</template>
<script>
/**
 * @description 文章展示页面
 */
const prefixCls = "article"
export default {
  name: 'Article',
  data() {
    return {
      prefixCls
    }
  }
}
</script>
<style lang="scss" scoped>
.article {
  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    font-family: 'firstFont';
    font-size: 24px;
  }
}
</style>