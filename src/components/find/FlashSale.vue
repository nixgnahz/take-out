<template>
  <div>
    <p class="title">
      <span class="line"></span>
      <span class="word">限时好礼</span>
      <span class="line"></span>
    </p>
    <ul>
      <li v-for="item in items">
        <span class="label">{{item.label}}</span>
        <img :src="item.img"/>
        <p class="name">{{item.name}}</p>
        <p class="price">{{item.price}}<span class="line_through">¥{{item.origin_price}}</span></p>
      </li>
    </ul>
    <p class="more">查看更多 ></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            label: "限时优惠",
            img: require('../../assets/flashSale.png'),
            name: "7元饿了么红包",
            price: "210金币",
            origin_price: "7"
          },
          {
            label: "特价换购",
            img: require('../../assets/flashSale.png'),
            name: "扫地机器人",
            price: "9金币",
            origin_price: "99"
          },
          {
            label: "特价换购",
            img: require('../../assets/flashSale.png'),
            name: "机械手感键鼠套装",
            price: "9金币",
            origin_price: "129"
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    .title {
      background-color: white;
      font-size: 0.65rem;
      font-weight: bold;
      text-align: center;
      padding: 0.5rem 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      .line {
        display: inline-block;
        border: 0.3px solid #333;
        width: 1rem;
        margin: 0px 0.5rem;
      }
    }
    ul {
      background-color: white;
      display: flex;
      align-items: center;
      flex-direction: row;
      li {
        flex: 1;
        padding: 0.25rem;
        img {
          width: 100%;
          margin: 0.25rem 0px;
        }
        .label {
          font-size: 0.4rem;
          color: #fff;
          background: #413d3c;
          padding: 0.1rem 0.2rem;
        }
        .name {
          font-size: 0.55rem;
          color: #333;
        }
        .price {
          display: flex;
          align-items: center;
          font-size: 0.55rem;
          color: #ff5339;
          margin-bottom: 0.5rem;
          margin-top: 0.25rem;
        }
        .line_through {
          text-decoration: line-through;
          font-size: 0.4rem;
          margin-left: 0.5rem;
        }
      }
    }
    .more {
      margin-bottom: 2.5rem;
      font-size: 0.6rem;
      color: #999;
      text-align: center;
      padding: 0.4rem;
      background-color: white;
    }
  }
</style>
