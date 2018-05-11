<template>
  <div>
    <div class="top">
      <router-link :to="{name: href}">
        <img :src="img"/>
      </router-link>
      <span>服务中心</span>
    </div>
    <Contact></Contact>
    <HotIssues></HotIssues>
  </div>
</template>

<script>
  import Contact from './service/Contact.vue'
  import HotIssues from './service/HotIssues.vue'
  export default {
    components: {
      Contact,
      HotIssues
    },
    data () {
      return {
        href: "home",
        img: require('../assets/back_white.png')
      }
    }
  }
</script>

<style scoped lang="scss">
  .top {
    width: 100%;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: block;
    text-align: center;
    flex-direction: row;
    padding: 0.2rem;
    line-height: 1.3rem;
    position: relative;
    a {
      font-size: 0px;
      position: absolute;
      left: 0.5rem;
      top: 0.5rem;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
    span {
      font-size: 0.6rem;
      color: white;
    }
  }
</style>
