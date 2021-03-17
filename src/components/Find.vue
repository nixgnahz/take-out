<template>
  <div>
    <TabBar></TabBar>
    <Advertise :img="advertise1"></Advertise>
    <Recommend></Recommend>
    <Advertise :img="advertise2"></Advertise>
    <FlashSale></FlashSale>
  </div>
</template>

<script>
  // 第二波更改
  import TabBar from './TabBar.vue'
  import Advertise from './find/Advertise.vue'
  import Recommend from './find/Recommend.vue'
  import FlashSale from './find/FlashSale.vue'
  export default {
    data () {
      return {
        advertise1: require('../assets/advertise.jpeg'),
        advertise2: require('../assets/advertise.jpeg')
      }
    },
    components: {
      TabBar,
      Advertise,
      Recommend,
      FlashSale
    }
  }
</script>

<style>

</style>
