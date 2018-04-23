<template>
  <div>
    <ul>
      <li v-for="item in items">
        <router-link :to="item.href">
          <img :src="item.img"/>
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            img: require('../../assets/money.png'),
            title: "钱包",
            href: ""
          },
          {
            img: require('../../assets/money.png'),
            title: "红包",
            href: ""
          },
          {
            img: require('../../assets/money.png'),
            title: "金币",
            href: ""
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
    justify-content: center;
    font-size: 0.4rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }

  ul li {
    flex: 1;
    padding: 0.5rem 0px;
    border-right: 1px solid #ddd;
  }

  ul li a {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #999;
    justify-content: center;
  }

  ul li:last-child {
    border: 0px;
  }

  ul li img {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0.25rem;
  }
</style>
