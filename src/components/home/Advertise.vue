<template>
  <div>
    <img :src="advertise"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        advertise: require('../../assets/advertise.jpeg')
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    background-color: white;
    img {
      width: 90%;
      margin: 0.25rem 5%;
    }
  }
</style>
