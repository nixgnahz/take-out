<template>
  <div>
    <ul>
      <li v-for="item in items">
        <router-link :to="item.href">
          <img :src="item.img" />
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
        options: {
          autoplay: false,
          loop: true,
          pagination: {
              el: ".swiper-pagination",
          },
          notNextTick: false
        },
        items: [
          {
            img: require('../../assets/menu.jpeg'),
            title: "美食",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "晚餐",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "商超便利",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "医药健康",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "果蔬生鲜",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "大牌5折",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "浪漫鲜花",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "麻辣烫",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "地方菜系",
            href: ""
          },
          {
            img: require('../../assets/menu.jpeg'),
            title: "披萨意面",
            href: ""
          }
        ]
      }
    }
  }
</script>

<style scoped>
  ul {
    background-color: white;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0.4rem 0px;
  }

  ul li {
    width: 20%;
    font-size: 0.45rem;
    margin: 0.2rem 0px;
  }

  ul li a {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ul li img {
    width: 60%;
  }

  ul li p {
    color: #666;
  }
</style>
