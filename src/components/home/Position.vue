<template>
  <div class="top">
    <p class="position">上海市闵行区</p>
    <div class="search">
      <router-link :to="{name: 'search'}">
        <img :src="search" />
        <p>搜索饿了么商家、商品名称</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: require('../../assets/search.png')
      }
    }
  }
</script>

<style scoped>
  .top {
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 0.7rem 0rem;
  }

  .top .position {
    font-size: 0.65rem;
    padding: 0px 0.8rem;
    color: white;
  }

  .top .search {
    padding: 0.5rem 0.8rem;
  }

  .top .search a{
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 0.5rem;
    height: 1.4rem;
    justify-content: center;
    border-radius: 2px;
    color: #999;
  }

  .top .search img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.2rem;
  }
</style>
