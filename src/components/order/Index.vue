<template>
  <div>
    <p class="title">订单</p>
    <ul v-if="loginStatus">
      <li v-for="item in items">
        <router-link :to="{name: detail_href, params: {id: item.id}}">
          <div class="top">
            <img :src="item.img"/>
            <div class="right">
              <div>
                <div>
                   <p class="name">{{item.name}}</p>
                   <p class="time">{{item.time}}</p>
                </div>
                <span class="status" v-if="item.status == 0">订单已取消</span>
                <span class="status" v-else>订单已送达</span>
              </div>
              <div class="dishes" v-for="itm in item.dishes">
                <p class="dish">{{itm.dish}}</p>
                <span class="price">¥{{itm.price}}</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <router-link :to="{name: order_href, params: {id: item.id}}">再来一单</router-link>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="tip" v-else>
      <img :src="img" />
      <p class="word">登录查看外卖订单</p>
      <button>
        <router-link :to="{name: href}">立即登录</router-link>
      </button>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from '../TabBar.vue'
  export default {
    data () {
      return {
        order_href: "dishes",
        detail_href: "detail",
        href: 'message',
        img: require('../../assets/empty_bg.png'),
        items: [
          {
            id: 2,
            img: require('../../assets/seller/seller1.jpeg'),
            name: "汉堡王（碧江广场店22038）",
            time: "2018-01-21 16:17",
            status: 1,
            dishes: [
              {
                dish: "二块新奥尔良烤翅-A",
                price: "4.50"
              }
            ]
          }
        ]
      }
    },
    components: {
      TabBar
    },
    computed: {
      loginStatus () {
        return this.$store.state.loginStatus
      }
    }
  }
</script>

<style scoped lang="sass">
  .title
    width: 100%;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: block;
    text-align: center;
    flex-direction: row;
    height: 1.8rem;
    line-height: 1.8rem;
    position: relative;
    font-size: 0.6rem;
    color: #fff;

  ul
    background-color: white;
    li > a
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.5rem;
      .top
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        img
          width: 1.5rem;
          height: 1.5rem;
          border: 0.3px solid #eee;
          margin-right: 0.5rem;
        .right
          display: flex;
          flex: 1;
          align-items: flex-start;
          flex-direction: column;
          > div
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
          .name
            color: #333;
            font-size: 0.6rem;
          .time
            font-size: 0.5rem;
            color: #999;
            margin: 0.2rem 0px 0.3rem;
          .status
            font-size: 0.5rem;
            color: #666;
          .dishes
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            padding: 0.35rem 0px;
            .price
              font-size: 0.5rem;
              color: #333;
              font-weight: 700;
          .dish
            font-size: 0.55rem;
            color: #666;
      .bottom
        align-self: flex-end;
        margin: 0.35rem 0.5rem 0.15rem;
        a
          color: #2395ff;
          font-size: 0.5rem;
          border: 1px solid #2395ff;
          padding: 0.2rem 0.7rem;
          border-radius: 5px;

  .tip
    display: flex;
    align-items: center;
    flex-direction: column;
    img
      margin-top: 2rem;
    .word
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    button
      background-color: #56d176;
      width: 5rem;
      height: 1.5rem;
      border-radius: 4px;
      font-size: 0.6rem;
      a
        color: #fff;
</style>
