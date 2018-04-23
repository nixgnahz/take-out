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

<style scoped>
  div {
    background-color: white;
  }

  div img {
    width: 90%;
    margin: 0.25rem 5%;
  }
</style>
