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

<style scoped lang="scss">
  $gradient: linear-gradient(90deg,#0af,#0085ff);
  $img-size: 1rem;

  .top {
    background-image: $gradient;
    padding: 0.7rem 0rem;
    .position {
      font-size: 0.65rem;
      padding: 0px 0.8rem;
      color: white;
    }
    .search {
      padding: 0.5rem 0.8rem;
      a {
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
      img {
        width: $img-size;
        height: $img-size;
        margin-right: 0.2rem;
      }
    }
  }
</style>
