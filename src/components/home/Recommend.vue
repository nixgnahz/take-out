<template>
  <div>
    <div class="recommend">
     <p class="title"><span></span>推荐商家<span></span></p>
     <ul>
       <li v-for="item in items">
         <router-link :to="{name: href, params: {id: item.id}}">
           <p class="img">
             <img :src="item.img"/>
             <span v-if="item.orders">{{item.orders}}</span>
           </p>
           <div class="word">
             <p class="name"><span class="brand" v-if="item.is_brand">品牌</span>{{item.name}}</p>
             <div class="top">
               <div class="left">
                 <p class="sales">评分{{item.score}} 月售{{item.sales}}单</p>
                 <p class="price">¥{{item.start_price}}起送 | 配送费¥{{item.express_price}}</p>
                 <p class="popular" v-if="item.is_popular">
                   <img :src="popular_icon"/>
                   <span>口碑人气好店</span>
                 </p>
               </div>
               <div class="right">
                 <p class="express">{{item.express}}</p>
                 <p>{{item.distance}}km | {{item.time}}分钟</p>
               </div>
             </div>
             <div class="bottom">
               <div class="left">
                 <p><span>首</span>{{item.new_user_discount}}</p>
                 <p><span>新</span>{{item.over_discount}}</p>
               </div>
               <p class="right" v-if="item.activities">{{item.activities}}个活动</p>
             </div>
           </div>
         </router-link>
       </li>
     </ul>
    </div>
    <LoadMore class="load" v-if="isShowLoad"></LoadMore>
  </div>
</template>

<script>
  import LoadMore from '../LoadMore.vue'
  export default {
    data () {
      return {
        isShowLoad: true,
        items: [
          {
            id: 1,
            img: require('../../assets/seller/seller3.jpeg'),
            orders: 0,
            is_brand: true,
            name: "汉堡王（碧江广场店22038）",
            score: 4.9,
            sales: 4067,
            express: "蜂鸟专送",
            start_price: 20,
            express_price: 8,
            distance: 3.52,
            time: 44,
            is_popular: true,
            new_user_discount: "新用户下单立减17元",
            over_discount: "满65减15",
            activities: 12
          },
          {
            id: 2,
            img: require('../../assets/seller/seller1.jpeg'),
            orders: 0,
            is_brand: false,
            name: "川堂风（石屏路点）",
            score: 4.6,
            sales: 1456,
            express: "蜂鸟专送",
            start_price: 20,
            express_price: 5.5,
            distance: 1.99,
            time: 36,
            is_popular: true,
            new_user_discount: "新用户下单立减16元",
            over_discount: "满60减3，满120减8，满200减16",
            activities: 12
          },
          {
            id: 3,
            img: require('../../assets/seller/seller2.jpeg'),
            orders: 0,
            is_brand: true,
            name: "轰咖咖喱饭（上海交通大学店）",
            score: 4.8,
            sales: 1419,
            express: "蜂鸟专送",
            start_price: 20,
            express_price: 5.5,
            distance: 1.68,
            time: 27,
            is_popular: false,
            new_user_discount: "新用户下单立减17元",
            over_discount: "满25减12，满48减15，满60减20",
            activities: 0
          }
        ],
        href: "dishes",
        popular_icon: require('../../assets/popular_icon.jpeg')
      }
    },
    components: {
      LoadMore
    }
  }
</script>

<style scoped lang="scss">
  $white-bg: white;
  @mixin flex-align-center {
    display: flex;
    align-items: center;
  }
  $border: 0.133333vw solid rgba(0,0,0,.08);

  .recommend {
    background-color: $white-bg;
    margin-bottom: 2rem;
    .title {
      font-size: 0.6rem;
      @include flex-align-center;
      justify-content: center;
      height: 2rem;
      span {
        display: inline-block;
        width: 1rem;
        height: 0.05rem;
        background-color: #999;
        margin: 0px 0.6rem;
      }
    }
    ul {
      background-color: $white-bg;
      li {
        a {
          display: flex;
          align-items: flex-start;
          flex-direction: row;
          border-bottom: $border;
          margin: 0.5rem 0px;
        }
        .img {
          position: relative;
          img {
            width: 2.5rem;
            height: 2.5rem;
            border: $border;
            margin: 0px 0.25rem;
          }
          span {
            position: absolute;
            right: 0px;
            top: -0.3rem;
            background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
            width: 0.6rem;
            height: 0.6rem;
            font-size: 0.2rem;
            line-height: 0.6rem;
            text-align: center;
            border-radius: 50%;
            color: white;
          }
        }
        .word {
          width: 100%;
          @include flex-align-center;
          flex-direction: column;
          margin-left: 0.3rem;
          .top {
            width: 100%;
            @include flex-align-center;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: $border;
            padding: 0.25rem 0px;
          }
          .brand {
            background-image: linear-gradient(-139deg,#fff100,#ffe339);
            padding: 0.07rem;
            border-radius: 0.1rem;
            font-size: 0.3rem;
            margin-right: 0.2rem;
            color: #6f3f15;
          }
          .name {
            width: 100%;
            font-size: 0.6rem;
            font-weight: bold;
            color: #333;
          }
          .top {
            .sales {
              font-size: 0.45rem;
              color: #999;
              margin: 0.2rem 0px;
            }
            .express {
              margin: 0.25rem 0px;
              background-image: linear-gradient(45deg,#0085ff,#0af);
              padding: 0px 0.2rem;
              color: white;
              font-size: 0.3rem;
              border-radius: 1px;
            }
            .price {
              font-size: 0.45rem;
              color: #999;
            }
            .right {
              display: flex;
              align-items: flex-end;
              flex-direction: column;
              font-size: 0.45rem;
              color: #999;
              margin-right: 0.2rem;
            }
            .popular {
              @include flex-align-center;
              font-size: 0.3rem;
              color: rgb(232, 71, 11);
              margin: 0.2rem 0px;
              img {
                width: 0.5rem;
                height: 0.5rem;
                margin-right: 0.2rem;
              }
            }
          }
          .bottom {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            margin: 0.25rem 0.25rem 0px 0px;
            justify-content: space-between;
            .left {
              font-size: 0.5rem;
              color: #999;
              p {
                margin: 0.2rem 0px;
                span {
                  display: inline-block;
                  margin-right: 0.2rem;
                  width: 0.6rem;
                  height: 0.6rem;
                  text-align: center;
                  line-height: 0.6rem;
                  color: white;
                  font-size: 0.3rem;
                  border-radius: 0.05rem;
                }
              }
              p:nth-child(1) span {
                background-color: rgb(112, 188, 70);
              }
              p:nth-child(2) span {
                background-color: rgb(240, 115, 115);
              }
            }
            .right {
              font-size: 0.45rem;
              color: #999;
              margin-top: 0.2rem;
            }
          }
        }
      }
    }
  }

  .load {
    background-color: white;
    margin-top: -2rem;
    margin-bottom: 2rem;
    height: 2rem;
  }
</style>
