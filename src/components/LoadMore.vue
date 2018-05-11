<template>
  <div>
    <img class="loadMore" :src="img"/>
    <span class="text">正在加载...</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img: require('../assets/load-more.gif')
      }
    }
  }
</script>

<style scoped lang="sass">
  div
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    img.loadMore
      width: 0.8rem;
      height: 0.8rem;
    span.text
      font-size: 0.5rem;
      margin-left: 0.5rem;
</style>
