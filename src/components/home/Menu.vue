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

<style scoped lang="scss">
  @mixin flex-align {
    align-items: center;
    display: flex;
  }

  ul {
    background-color: white;
    @include flex-align;
    flex-wrap: wrap;
    padding: 0.4rem 0px;
    li {
      width: 20%;
      font-size: 0.45rem;
      margin: 0.2rem 0px;
      a {
        @include flex-align;
        flex-direction: column;
      }
      img {
        width: 60%;
      }
      p {
        color: #666;
      }
    }
  }
</style>
