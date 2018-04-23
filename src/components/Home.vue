<template>
  <div>
    <Position></Position>
    <Swiper></Swiper>
    <Menu></Menu>
    <Advertise></Advertise>
    <TabBar></TabBar>
    <Recommend></Recommend>
    <BackTop v-if="isShowBackTop"></BackTop>
  </div>
</template>

<script>
  import TabBar from './TabBar.vue'
  import BackTop from './home/BackTop.vue'
  import Position from './home/Position.vue'
  import Swiper from './home/Swiper.vue'
  import Menu from './home/Menu.vue'
  import Advertise from './home/Advertise.vue'
  import Recommend from './home/Recommend.vue'
  export default {
    components: {
      Position,
      Swiper,
      Menu,
      Advertise,
      Recommend,
      BackTop,
      TabBar
    },
    data () {
      return {
        isShowBackTop: true
      }
    }
  }
</script>

<style>

</style>
