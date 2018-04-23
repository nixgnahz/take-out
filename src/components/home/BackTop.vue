<template>
  <div>
    <img :src="img"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img: require('../../assets/back-top.png')
      }
    }
  }
</script>

<style scoped>
  div {
    position: fixed;
    bottom: 3rem;
    right: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    background-color: white;
  }

  img {
    width: 0.7rem;
    height: 0.7rem;
    margin: 0.5rem;
  }
</style>
