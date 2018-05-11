<template>
  <div class="body">
    <Search></Search>
  </div>
</template>

<script>
  import Search from './search/Search.vue'
  export default {
    components: {
      Search
    }
  }
</script>

<style scoped lang="sass">
  .body
    background-color: white;
    height: 100%;
    position: absolute;
</style>
