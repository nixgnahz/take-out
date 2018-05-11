<template>
  <div>
    <img :src="img"/>
  </div>
</template>

<script>
  export default {
    props: ["img"]
  }
</script>

<style scoped lang="sass">
  img
    width: 100%;
</style>
