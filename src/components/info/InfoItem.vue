<template>
  <div>
    <ul>
      <li v-for="item in items">
        <router-link :to="{name: item.href}">
          <p>
            <img :src="item.img"/>
          </p>
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="scss">
  ul {
    margin: 0.45rem 0px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: white;
    li {
      a {
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: 0.6rem;
      }
      img {
        width: 1.1rem;
        height: 1.1rem;
        margin: 0.3rem;
      }
      p:nth-child(1) {
        display: flex;
        align-items: center;
      }
      p:nth-child(2) {
        color: #666;
        width: 100%;
        padding: 0.45rem;
        border-bottom: 1px solid #ddd;
      }
      &:last-child p {
        border: 0px;
      }
    }
  }
</style>
