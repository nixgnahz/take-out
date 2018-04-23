<template>
  <div>
    <ul>
      <li v-for="item in items">
        <router-link :to="{name: item.href}">{{item.value}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            value: "点餐",
            href: "dishes"
          },
          {
            value: "评价",
            href: "value"
          },
          {
            value: "商家",
            href: "seller"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 0.5rem;
    color: #999;
    background-color: white;
    padding: 0.5rem 0px;
    border-bottom: 1px solid #ddd;
  }

  ul li {
    flex: 1;
    text-align: center;
  }

  ul li a {
    border-bottom: 1px solid transparent;
    padding: 0.5rem 0px;
    color: #666;
  }

  .router-link-exact-active {
    border-bottom: 1px solid #2395ff;
    color: #2395ff;
    color: #333;
  }
</style>
