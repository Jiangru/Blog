<template lang="pug">
  #app
    keep-alive
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  /* background-color: #E9EAED;
  min-height: 100%; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
