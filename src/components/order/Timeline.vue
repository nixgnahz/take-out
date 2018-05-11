<template>
  <div class="body">
    <div class="top">
      <router-link :to="{name: href}">
        <img :src="img"/>
      </router-link>
      <span>订单跟踪</span>
    </div>
    <ul>
      <li v-for="item in progress">
        <span :class="[item.status ? 'circle' : 'line']"></span>
        <div>
          <p class="title" :style="{color: item.status ? '#3190e8' : '#333333'}">{{item.title}}</p>
          <span class="time">{{item.time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        href: "detail",
        img: require('../../assets/back_white.png'),
        progress: [
          {
            status: 1,
            title: "订单已送达",
            time: "2018-01-21 16:50"
          },
          {
            status: 0,
            title: "商家已接单",
            time: "2018-01-21 16:17"
          },
          {
            status: 0,
            title: "订单已支付",
            time: "2018-01-21 16:17"
          },
          {
            status: 0,
            title: "订单提交成功",
            time: "2018-01-21 16:17"
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .body {
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    .top {
      width: 100%;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      display: block;
      text-align: center;
      flex-direction: row;
      height: 1.6rem;
      line-height: 1.3rem;
      position: relative;
      a {
        font-size: 0px;
        position: absolute;
        left: 0.5rem;
        top: 0.35rem;
        img {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
      span {
        font-size: 0.6rem;
        color: white;
      }
    }
    ul {
      li {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin: 0rem 1.5rem;
        padding: 1.5rem 0px 0px;
        border-left: 1px solid #eee;
        position: relative;
        div {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: row;
          position: relative;
          justify-content: space-between;
          margin-left: 1.5rem;
          .title {
            font-size: 0.6rem;
          }
          .desc {
            font-size: 0.5rem;
            position: absolute;
          }
          .time {
            font-size: 0.5rem;
            color: #999;
          }
        }
        > span {
          position: absolute;
          bottom: 0rem;
          &.line {
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background-color: #ddd;
            display: inline-block;
            margin-right: 0.7rem;
            margin-left: 0.1rem;
            left: -0.2rem;
          }
          &.circle {
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background-color: #fff;
            display: inline-block;
            border: 0.1rem solid #0085ff;
            margin-right: 0.5rem;
            left: -0.25rem;
          }
        }
      }
    }
  }
</style>
