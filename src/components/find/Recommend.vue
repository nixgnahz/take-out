<template>
  <div>
    <ul>
      <li v-for="item in items">
        <div class="left">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
        <img :src="item.img"/>
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
            title: "百元红包",
            desc: "兴业银行联名卡",
            img: require('../../assets/recommend.jpeg')
          },
          {
            title: "周边优惠",
            desc: "领取口碑好券",
            img: require('../../assets/recommend.jpeg')
          },
          {
            title: "金币商城",
            desc: "0元好物在这里",
            img: require('../../assets/recommend.jpeg')
          },
          {
            title: "推荐有奖",
            desc: "5元现金拿不停",
            img: require('../../assets/recommend.jpeg')
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
    flex-wrap: wrap;
    background-color: white;
    margin-bottom: 0.25rem;
  }

  ul li {
    flex: 1;
    max-width: 50%;
    min-width: 40%;
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.6rem 0.4rem;
  }

  ul li:nth-child(2n) {
    border-left: 1px solid #ededed;
  }

  ul li .left p.title{
    font-size: 0.6rem;
    color: rgb(255, 153, 0);
  }

  ul li .left p.desc{
    font-size: 0.5rem;
    color: #999;
    margin-top: 0.2rem;
  }

  ul li img {
    width: 2rem;
    height: 2rem;
  }
</style>
