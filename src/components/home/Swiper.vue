<template>
  <div>
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.id">
          <router-link :to="item.href">
              <img :src="item.img" />
          </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        options: {
          autoplay: true,
          loop: true,
          pagination: {
              el: ".swiper-pagination",
          },
          notNextTick: false
        },
        items: [
          {
            id: 1,
            img: require('../../assets/swiper1.jpeg'),
            href: ""
          },
          {
            id: 2,
            img: require('../../assets/swiper2.jpeg'),
            href: ""
          }
        ]
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
