<template>
  <div class="body">
    <div class="top">
      <router-link :to="{name: href}">
        <img class="back" :src="back"/>
      </router-link>
      <img class="shop" :src="item.img"/>
    </div>
    <div class="middle">
      <div class="name" @click="changeBrandDetailStatus">
        <span class="brand">品牌</span>
        <p>{{item.name}}</p>
        <span class="right_triangle"></span>
      </div>
      <div class="sales">
        <span>{{item.score}}</span>
        <span>月售{{item.sales}}单</span>
        <span>{{item.express}}</span>
        <span>约{{item.time}}分钟</span>
        <span>距离{{item.distance}}m</span>
      </div>
      <div class="announce">{{item.announce}}</div>
      <div class="discount" @click="changeDiscountDetailStatus">
        <span class="label">首单</span>
        <p>新用户下单立减17元(不与其它活动同享)</p>
        <span class="activity">{{item.activities}}个活动</span>
        <span class="bottom_triangle"></span>
      </div>
    </div>
    <div class="detail" v-if="isShowBrandDetail">
      <div class="detail-wrapper">
        <div class="name">
          <span class="brand">品牌</span>
          <p>{{item.name}}</p>
        </div>
        <ul class="info">
          <li>
            <span>{{item.score}}</span>
            <span>评分</span>
          </li>
          <li>
            <span>{{item.sales}}单</span>
            <span>月售</span>
          </li>
          <li>
            <span>{{item.express}}</span>
            <span>约{{item.time}}分钟</span>
          </li>
          <li>
            <span>{{item.express_fee}}元</span>
            <span>配送费</span>
          </li>
          <li>
           <span>{{item.distance}}km</span>
           <span>距离</span>
          </li>
        </ul>
        <div class="announce">
          <p class="title">
            <span>公告</span>
          </p>
        </div>
        <div class="bulletin">{{item.announce}}</div>
      </div>
      <div class="brand_close" @click="changeBrandDetailStatus">X</div>
    </div>
    <div class="detail" v-if="isShowDiscountDetail">
      <div class="wrapper">
        <p class="title">优惠活动</p>
        <p class="discount_close" @click="changeDiscountDetailStatus">X</p>
        <div class="scroll">
          <p class="word" v-for="itm in activities"><span :style="{backgroundColor: itm.color}">{{itm.label}}</span>{{itm.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        back: require('../../assets/back_white.png'),
        href: "home",
        isShowBrandDetail: false,
        isShowDiscountDetail: false,
        item: {
          img: require('../../assets/seller/seller3.jpeg'),
          is_brand: true,
          name: "汉堡王（碧江广场店22038）",
          score: 4.9,
          sales: 4067,
          express: "蜂鸟专送",
          express_fee: 3,
          time: 44,
          distance: 3.52,
          is_popular: true,
          new_user_discount: "新用户下单立减17元",
          over_discount: "满65减15",
          activities: 12,
          announce: "欢迎光临，用餐高峰期请提前下单，谢谢。",
        },
        activities: [
          {
            "label": "首单",
            "color": "rgb(112, 188, 70)",
            "desc": "新用户下单立减17元(不与其它活动同享)"
          },
          {
            "label": "满减",
            "color": "rgb(240, 115, 115)",
            "desc": "满65减15"
          },
          {
            "label": "特价",
            "color": "rgb(241, 136, 79)",
            "desc": "【立减15元】经典安格斯单人餐"
          },
          {
            "label": "特价",
            "color": "rgb(241, 136, 79)",
            "desc": "【立减15元】经典安格斯单人餐"
          },
          {
            "label": "特价",
            "color": "rgb(241, 136, 79)",
            "desc": "【立减15元】经典安格斯单人餐"
          }
        ]
      }
    },
    methods: {
      changeBrandDetailStatus () {
        this.isShowBrandDetail = !this.isShowBrandDetail;
      },
      changeDiscountDetailStatus () {
        this.isShowDiscountDetail = !this.isShowDiscountDetail;
      }
    }
  }
</script>

<style scoped lang="scss">
  .body {
    background-color: white;
    width: 100%;
    .top {
      background-color: rgba(119,103,137,.43);
      position: relative;
      height: 2.5rem;
      .back {
        width: 0.8rem;
        height: 0.8rem;
        margin: 0.2rem 0.3rem;
      }
      img.shop {
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        top: 1.05rem;
        left: 50%;
        margin-left: -1.25rem;
      }
    }
    .name {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      .brand {
        background-image: linear-gradient(-139deg,#fff100,#ffe339);
        color: #6f3f15;
        padding: 0.05rem;
        border-radius: 0.1rem;
        font-size: 0.3rem;
        margin-right: 0.2rem;
      }
      p {
        font-size: 0.85rem;
        font-weight: 800;
      }
      .right_triangle {
        border-top: 0.25rem solid transparent;
        border-right: 0px;
        border-bottom: 0.25rem solid transparent;
        border-left: 0.3rem solid #333;
      }
    }
    .middle {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      .sales {
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: 0.4rem;
        color: #333;
        justify-content: center;
        span {
          margin: 0.2rem;
        }
      }
      .announce {
        font-size: 0.4rem;
        color: #999;
        margin: 0.1rem;
      }
      .discount {
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: 0.4rem;
        margin: 0.5rem 0px;
        justify-content: space-around;
        border: 0.133333vw solid #eee;
        padding: 0.25rem;
        transform: scale(0.80);
        .label {
          background-color: rgb(112, 188, 70);
          color: white;
          margin-right: 0.3rem;
        }
        .activity {
          color: #ddd;
          margin-left: 0.3rem;
        }
        .bottom_triangle {
          border-left: 0.18rem solid transparent;
          border-bottom: 0px;
          border-right: 0.18rem solid transparent;
          border-top: 0.23rem solid #333;
          margin-left: 0.2rem;
        }
      }
    }
    .detail {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 100;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      z-index: 10000;
      .detail-wrapper {
        width: 92%;
        padding: 0.5rem 0%;
        margin: 0rem 4%;
        background-color: white;
        border-radius: 0.3rem;
        animation: scale 0.25s;
        ul.info {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction :row;
          justify-content: center;
          margin: 0.75rem 0px;
          li {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            span {
              &:nth-child(1) {
                font-size: 0.55rem;
                font-weight: 900;
                color: #333;
              }
              &:nth-child(2) {
                font-size: 0.4rem;
                color: #999;
              }
            }
          }
        }
        .announce {
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;
          .title {
            background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
            width: 4rem;
            background-size: 100% 0.04rem;
            justify-content: center;
            background-position: 50%;
            background-repeat: no-repeat;
            font-size: 0.5rem;
            color: #999;
            span {
              padding: 0px 0.2rem;
              display: inline-block;
              background-color: #fff;
            }
          }
        }
        .bulletin {
          width: 90%;
          font-size: 0.5rem;
          margin: 0.75rem 5%;
        }
        .brand_close {
          color: white;
          font-size: 0.75rem;
          font-weight: lighter;
          border: 1px solid #fff;
          border-radius: 50%;
          width: 1.2rem;
          height: 1.2rem;
          text-align: center;
          line-height: 1.2rem;
          margin-top: 2rem;
        }
      }
      .wrapper {
        position: fixed;
        width: 80%;
        bottom: 0%;
        background-color: #f5f5f5;
        box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
        display: flex;
        flex-direction: column;
        padding: 0.5rem 10%;
        animation: goUp 0.25s;
        height: 35%;
        .title {
          font-size: 0.65rem;
          padding: 0.5rem 0px 0.2rem;
          text-align: center;
        }
        .discount_close {
          position: absolute;
          right: 0.5rem;
          font-size: 0.8rem;
          color: #333;
        }
        .scroll {
          overflow: scroll;
          .word {
            font-size: 0.5rem;
            margin: 0.5rem 0px;
            span {
              font-size: 0.4rem;
              padding: 0.05rem 0.1rem;
              color: #fff;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes goUp {
    0% {
      bottom: -35%;
    }
    100% {
      bottom: 0%;
    }
  }
</style>
