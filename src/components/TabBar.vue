<template>
  <div class="tabBar">
    <ul>
      <li v-for="(item, index) in items" :key="item.key" @click="changeTab(index)">
        <router-link :to="{name: item.href}">
          <img :src="item.isActive ? item.activeImg : item.inactiveImg"/>
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        items: []
      }
    },
    created: function (){
      let name = this.$router.history.current.name;
      this.items = [
          {
            inactiveImg: require('../assets/tabBar/home.png'),
            activeImg: require('../assets/tabBar/home-active.png'),
            isActive: name == 'home' ? true : false,
            title: "首页",
            href: "home"
          },
          {
            inactiveImg: require('../assets/tabBar/find.png'),
            activeImg: require('../assets/tabBar/find-active.png'),
            isActive: name == 'find' ? true : false,
            title: "发现",
            href: "find"
          },
          {
           inactiveImg: require('../assets/tabBar/order.png'),
           activeImg: require('../assets/tabBar/order-active.png'),
           isActive: name == 'index' ? true : false,
           title: "订单",
           href: "index"
          },
          {
            inactiveImg: require('../assets/tabBar/info.png'),
            activeImg: require('../assets/tabBar/info-active.png'),
            isActive: name == 'info' ? true : false,
            title: "我的",
            href: "info"
          }
        ]
    },
    methods: {
      changeTab (index) {
        for(var i = 0; i < this.items.length; i++) {
          Vue.set(this.items[i], 'isActive', false)
        }
        Vue.set(this.items[index], 'isActive', true)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabBar {
    width: 100%;
    position: fixed;
    bottom: 0px;
    z-index: 1000;
    ul {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: row;
      box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,0.1);
      background-color: white;
      li {
        flex: 1;
        font-size: 0.45rem;
        padding: 0.3rem 0px 0px;
        a {
          display: flex;
          align-items: center;
          flex-direction: column;
          color: #8e8e93;
        }
        img {
          width: 0.75rem;
          height: 0.75rem;
          margin-bottom: 0.05rem;
        }
        .router-link-exact-active p {
          color: #0089dc;
        }
      }
    }
  }
</style>
