<template>
  <div>
    <div class="top_bar">
      <router-link :to="{name: order_href}">
        <img :src="img"/>
      </router-link>
      <span>订单跟踪</span>
    </div>
    <div class="body">
      <div class="top">
        <img :src="seller"/>
        <router-link class="timeline" :to="{name: tl_href}">{{status}}<span>></span></router-link>
        <span>感谢你对饿了么的信任，期待再次光临</span>
        <router-link class="shop" :to="{name: shop_href}">再来一单</router-link>
      </div>
      <div class="middle">
        <div class="shop">
          <img :src="seller"/>
          <p>{{name}}</p>
          <router-link :to="{name: shop_href}">></router-link>
        </div>
        <div class="dishes" v-for="item in dishes">
          <span>{{item.dish}}</span>
          <p>x{{item.count}}<span>¥{{item.price}}</span></p>
        </div>
        <div class="express">
          <p>配送费</p>
          <span>¥{{express_price}}</span>
        </div>
        <div class="discount" v-for="item in discounts">
          <p>{{item.value}}</p>
          <span>-¥{{item.price}}</span>
        </div>
        <div class="total_pay">
          <p>
            <span>实付</span>¥{{pay_price}}
          </p>
        </div>
        <div class="express_info">
          <p class="title">配送信息</p>
          <div class="info">
            <span>送达时间：</span>
            <p>尽快送达 {{express_info.time}}</p>
          </div>
          <div class="info">
            <span>送货地址：</span>
            <p>
              <span>{{express_info.name}}</span>
              <span>{{express_info.tel}}</span>
              <span>{{express_info.address}}</span>
            </p>
          </div>
          <div class="info">
            <span>送货地址：</span>
            <p>{{express_info.way}}</p>
          </div>
        </div>
        <div class="order_info">
          <p class="title">配送信息</p>
          <div class="info">
            <span>订单号：</span>
            <p>{{order_info.time}}</p>
          </div>
          <div class="info">
            <span>支付方式：</span>
            <p>{{order_info.way}}</p>
          </div>
          <div class="info">
            <span>下单时间：</span>
            <p>{{order_info.time}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data () {
        return {
          order_href: "index",
          tl_href: "timeLine",
          shop_href: "dishes",
          img: require('../../assets/back_white.png'),
          seller: require('../../assets/seller/seller1.jpeg'),
          status: "订单已送达",
          name: "肯德基宅急送（闵行店）",
          dishes: [
            {
              dish: "二块新奥尔良烤翅-A",
              count: "1",
              price: "12.5"
            },
            {
              dish: "贝克汉堡-A",
              count: "1",
              price: "12.5"
            }
          ],
          express_price: "9",
          discounts: [
            {
              value: "(不与其它活动同享)新用户立减",
              price: "17"
            }
          ],
          pay_price: "4.5",
          express_info: {
            time: "16:57",
            name: "张欣(女士)",
            tel: "18183062293",
            address: "高华小区上海市闵行区沪闵路241弄高华小区83号楼305",
            way: "商家配送"
          },
          order_info: {
            number: "3018675158943373542",
            way: "在线支付",
            time: "2018-01-21 16:17"
          }
        }
      }
    }
</script>

<style scoped>
  .top_bar {
    width: 100%;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: block;
    text-align: center;
    flex-direction: row;
    height: 1.6rem;
    line-height: 1.3rem;
    position: relative;
  }

  .top_bar a {
    font-size: 0px;
    position: absolute;
    left: 0.5rem;
    top: 0.4rem;
  }

  .top_bar a img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .top_bar span {
    font-size: 0.6rem;
    color: white;
  }

  .body {
    width: 94%;
    padding: 0.5rem 0px 0px;
    margin: 0px 3%;
    background-color: white;
    margin-bottom: 0.5rem;
  }

  .body .top {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .body .top img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .body .top .timeline {
    color: #333;
    font-weight: 700;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }

  .body .top .timeline span {
    margin-left: 0.5rem;
    color: #999;
    font-size: 0.4rem;
  }

  .body .top>span {
    font-size: 0.4rem;
    color: #999;
    margin: 0.3rem 0px;
  }

  .body .top .shop {
    color: #fff;
    font-size: 0.5rem;
    background-color: #2395ff;
    padding: 0.3rem 1.2rem;
    border-radius: 3px;
    margin: 0.25rem;
  }

  .body .middle .shop {
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
    padding: 0.15rem;
    border-bottom: .4vw solid #dfdfdf;
  }

  .body .middle .shop img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin: 0.25rem;
  }

  .body .middle .shop p {
    font-size: 0.55rem;
    color: #999;
  }

  .body .middle .shop a {
    font-size: 0.5rem;
    right: 0.8rem;
    position: absolute;
  }

  .body .middle .dishes {
    margin-top: 0.1rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.35rem;
    border-top: 1px solid #eee;
    margin: 0px 0.5rem;
  }

  .body .middle .dishes>span {
    font-size: 0.6rem;
    color: #333;
  }

  .body .middle .dishes p {
    font-size: 0.5rem;
  }

  .body .middle .dishes p span {
    margin: 0.25rem 0rem 0.25rem 0.75rem;
  }

  .body .express {
    margin: 0px 0.5rem;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.35rem;
  }

  .body .middle .express p {
    font-size: 0.6rem;
    color: #333;
  }

  .body .middle .express span {
    font-size: 0.5rem;
  }

  .body .discount {
    margin: 0px 0.5rem;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.35rem;
  }

  .body .discount p {
    font-size: 0.6rem;
    color: #333;
  }

  .body .discount span {
    font-size: 0.5rem;
    color: #ff5339;
  }

  .body .middle .total_pay {
    margin: 0px 0.5rem;
    border-top: 1px solid #eee;
    height: 2.65rem;
  }

  .body .middle .total_pay p {
    font-size: 0.65rem;
    float: right;
    line-height: 3rem;
  }

  .body .middle .total_pay span {
    font-size: 0.4rem;
    margin-right: 0.5rem;
  }

  .body .express_info {
    border-bottom: 5px solid #eee;
  }

  .body .express_info .title, .body .order_info .title {
    border-top: 1px solid #eee;
    font-size: 0.65rem;
    padding: 0.3rem;
  }

  .body .express_info .info, .body .order_info .info {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    color: #6e6e6e;
    font-size: 0.55rem;
    padding: 0.35rem;
    border-top: 1px solid #eee;
  }

  .body .express_info .info>span, .body .order_info .info>span {
    width: 4rem;
  }

  .body .express_info .info p, .body .order_info .info p {
    width: 100%;
    display: flex;
    aign-items: center;
    flex-direction: column;
  }

  .body .express_info .info p span, .body .order_info .info p span {
    margin: 0.1rem 0px;
  }
</style>
