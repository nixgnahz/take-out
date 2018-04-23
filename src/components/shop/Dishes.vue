<template>
  <div class="boxes" ref="parent">
    <ul class="menu" ref="menuWrapper">
      <li v-for="(item, index) in menus" @click="changeMenu(index, $event)" :class="[index == current ? 'active' : 'inactive', 'list']">{{item.name}}</li>
    </ul>
    <div class="detail" ref="detailWrapper">
      <ul>
        <li v-for="(item, index) in menus" class="foods">
          <p class="title"><span>{{item.name}}</span>{{item.description}}</p>
          <div class="dishes" v-for="(itm, idx) in item.foods">
            <img :src="itm.icon" @click="changeGoodsDetail(index, idx)"/>
            <div>
              <p class="name">{{itm.name}}</p>
              <p class="sales">月售{{itm.sellCount}}份 好评率{{itm.rating}}%</p>
              <div class="price">
                <p>
                  <span class="dollar">¥</span>{{itm.price}}
                </p>
                <div class="add_to_cart">
                  <span class="minus_btn fade" v-show="itm.count" @click="decreaseCart(index, idx)">-</span>
                  <span class="num" v-show="itm.count">{{itm.count}}</span>
                  <span class="add_btn" @click="increaseCart(index, idx, $event)">+</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart">
      <div :class="cartInfo.length ? 'notEmpty' : 'empty'" @click="changeCartDetail">
        <img :src="cart_icon"/>
        <span class="count" v-show="cartCount">{{cartCount}}</span>
      </div>
      <p class="price">
        <span>¥ {{cartMoney}}</span>
        <span>配送费 ¥{{expressPrice}}</span>
      </p>
      <span v-show="cartMoney < lowestPrice">{{tipWord}}</span>
      <span class="pay_btn" v-show="cartMoney >= lowestPrice && cartInfo.length">去结算</span>
    </div>
    <div class="mask" v-show="isShowCartDetail" @click="changeCartDetail"></div>
    <div class="cart_info" v-show="isShowCartDetail">
      <div class="title">
        <p>购物车</p>
        <span @click="clearCart">清空</span>
      </div>
      <div class="scroll">
        <div class="order" v-for="item in cartInfo" v-if="item.count">
          <p>{{item.name}}<p>
          <div class="add_to_cart">
            <p>¥{{item.money}}</p>
            <span class="minus_btn" @click="decreaseCart(item.index, item.idx)">-</span>
            <span class="num">{{item.count}}</span>
            <span class="add_btn" @click="increaseCart(item.index, item.idx)">+</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="move">
      <div class="goods_detail" v-show="isShowGoodsDetail">
        <div class="showImg">
          <img :src="goodsInfo.icon"/>
          <span class="desc" v-if="goodsInfo.description">{{goodsInfo.description}}</span>
        </div>
        <div class="arrow" @click="changeGoodsDetail">
          <img :src="back_icon" />
        </div>
        <div class="desc_detail">
          <p class="name">{{goodsInfo.name}}</p>
          <p class="sales">月售{{goodsInfo.sellCount}}份 <span>好评率{{goodsInfo.rating}}%</span></p>
          <div class="price">
            <span>¥{{goodsInfo.price}}</span>
            <div class="add_to_cart">
              <span v-show="goodsInfo.count" class="minus_btn" @click="decreaseCart(goodsInfo.index, goodsInfo.idx)">-</span>
              <span v-show="goodsInfo.count" class="num">{{goodsInfo.count}}</span>
              <span class="add_btn" @click="increaseCart(goodsInfo.index, goodsInfo.idx, $event)">+</span>
            </div>
          </div>
        </div>
        <div class="info_detail">
          <p class="title">商品介绍</p>
          <p class="info">{{goodsInfo.info ? goodsInfo.info : "暂无介绍"}}</p>
        </div>
      </div>
    </transition>
    <div class="ball-container">
      <div v-for="ball in balls">
        <transition name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
       </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Vue from 'vue';
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        cart_icon: require('../../assets/cart.png'),
        back_icon: require('../../assets/back_white.png'),
        menus: [],
        dishes: [],
        cartInfo: [],
        goodsInfo: [],
        cartMoney: 0,
        cartCount: 0,
        isShowCartDetail: false,
        isShowGoodsDetail: false,
        expressPrice: 0,
        lowestPrice: 0,
        tipWord: "",
        listHeight: [],
        detailWrapperY: 0,
        balls: [
          {show: false},
          {show: false},
          {show: false}
        ],
        dropBalls:[]
      }
    },
    created: function () {
      let id = this.$route.params.id;
      this.getDetail(id);
    },
    computed: {
      current () {
        for (let i = 0, l = this.listHeight.length; i < l; i++) {
          let topHeight = this.listHeight[i];
          let bottomHeight = this.listHeight[i + 1];
          if (!bottomHeight || (this.detailWrapperY >= topHeight && this.detailWrapperY < bottomHeight)) {
            return i;
          }
        }
        return 0;
      }
    },
    methods: {
      drop(el){
        for(let i=0;i<this.balls.length;i++){
          let ball= this.balls[i];
          if(!ball.show){
            ball.show = true;
            ball.el=el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeEnter(el) {
        let count = this.balls.length;
        while (count--) {
        let ball = this.balls[count];
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect(); //元素相对于视口的位置
          let x = rect.left - 32;
          let y = -(window.innerHeight - rect.top - 22);  //获取y
          el.style.display = '';
          el.style.webkitTransform = 'translateY('+y+'px)';  //translateY
          el.style.transform = 'translateY('+y+'px)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translateX('+x+'px)';
          inner.style.transform = 'translateX('+x+'px)';
          }
        }
      },
      enter(el, done) {
        let rf = el.offsetHeight;
        el.style.webkitTransform = 'translate3d(0,0,0)';
        el.style.transform = 'translate3d(0,0,0)';
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = 'translate3d(0,0,0)';
        inner.style.transform = 'translate3d(0,0,0)';
        el.addEventListener('transitionend', done);
      },
      afterEnter(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show=false;
          el.style.display = 'none';
        }
      },
      calculateHeight () {
        let menu = this.$refs.parent.querySelectorAll('.menu');
        let height = menu[0].clientHeight;
        this.$refs.parent.style.height = height + "px";
        this.$refs.detailWrapper.style.height = height + "px";
        let foodList = this.$refs.detailWrapper.querySelectorAll('.foods');
        let gap = 0;
        this.listHeight = [gap];
        for (let i = 0; i < foodList.length; i++) {
          gap += foodList[i].clientHeight;
          this.listHeight.push(gap);
        }
      },
      initScroll () {
        var self = this;
        this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.detailWrapper = new BScroll(this.$refs.detailWrapper, {
          click: true,
          probeType: 3
        })
        this.detailWrapper.on('scroll', function (pos) {
          self.detailWrapperY = Math.abs(Math.round(pos.y));
        })
      },
      getDetail (id) {
        var self = this;
        axios.get('http://localhost:8080/static/shop.json?id=' + id).then((res) => {
          if(res.data) {
            this.menus = res.data.goods;
            this.$nextTick(() => {
              this.calculateHeight();
              this.initScroll();
            })
            this.expressPrice = res.data.express_price;
            this.lowestPrice = res.data.lowest_price;
            this.tipWord = "¥" + this.lowestPrice + "元起送";
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      changeMenu (index, event) {
        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.detailWrapper.querySelectorAll('.foods');
        let el = foodList[index];
        this.detailWrapper.scrollToElement(el, 300);
      },
      increaseCart (index, idx, event) {
        if(!this.menus[index].foods[idx].count) {
          Vue.set(this.menus[index].foods[idx], 'count', 1)
        } else{
          Vue.set(this.menus[index].foods[idx], 'count', this.menus[index].foods[idx].count + 1)
        }
        this.addCart(index, idx);
        if(event) this.drop(event.target);
      },
      decreaseCart (index, idx) {
        if(!this.menus[index].foods[idx].count) {
          Vue.set(this.menus[index].foods[idx], 'count', 0)
        } else{
          Vue.set(this.menus[index].foods[idx], 'count', this.menus[index].foods[idx].count - 1)
        }
        this.minusCart(index, idx);
      },
      addCart (index, idx) {
        let money = this.menus[index].foods[idx].count * this.menus[index].foods[idx].price;
        let obj = {
          index: index,
          idx: idx,
          count: this.menus[index].foods[idx].count,
          name: this.menus[index].foods[idx].name,
          money: money
        }
        let count = 0;
        for(var i = 0; i < this.cartInfo.length; i++) {
          if(this.cartInfo[i].index == index && this.cartInfo[i].idx == idx) {
            count++;
            this.cartMoney += this.menus[index].foods[idx].price;
            this.cartCount++;
            Vue.set(this.cartInfo[i], 'count', this.menus[index].foods[idx].count);
            Vue.set(this.cartInfo[i], 'money', money);
          }
        }
        if(!count) {
          this.cartInfo.push(obj);
          this.cartMoney += money;
          this.cartCount++;
        }
      },
      minusCart (index, idx) {
        let money = this.menus[index].foods[idx].count * this.menus[index].foods[idx].price;
        for(var i = 0; i < this.cartInfo.length; i++) {
          if(this.cartInfo[i].index == index && this.cartInfo[i].idx == idx) {
            Vue.set(this.cartInfo[i], 'count', this.menus[index].foods[idx].count);
            Vue.set(this.cartInfo[i], 'money', money);
            this.cartMoney -= this.menus[index].foods[idx].price;
            this.cartCount--;
            if(!this.cartInfo[i].count) {
              this.cartInfo.splice(i, 1);
            }
          }
        }
      },
      clearCart () {
        for(var i = 0; i < this.cartInfo.length; i++) {
          Vue.set(this.menus[this.cartInfo[i].index].foods[this.cartInfo[i].idx], 'count', 0)
        }
        this.cartMoney = 0;
      },
      changeCartDetail () {
        if(!this.cartInfo.length) return;
        this.isShowCartDetail = !this.isShowCartDetail;
      },
      changeGoodsDetail (index, idx) {
        if(!this.isShowGoodsDetail) {
          this.goodsInfo = this.menus[index].foods[idx];
          this.goodsInfo.index = index;
          this.goodsInfo.idx = idx;
        }
        this.isShowGoodsDetail = !this.isShowGoodsDetail;
      }
    },
    watch: {
      cartMoney () {
        if(!this.cartMoney) {
          this.isShowCartDetail = false;
          this.cartCount = 0;
          this.cartInfo = [];
          this.tipWord = "¥" + this.lowestPrice + "元起送";
          return;
        }
        if(this.cartMoney < this.lowestPrice) {
          this.tipWord = "还差¥" + (this.lowestPrice - this.cartMoney) + "元起送";
        }
      }
    }
  }
</script>

<style scoped>
  .boxes {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    background-color: white;
    margin-bottom: 2rem;
    overflow: hidden;
  }

  ul.menu li {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #e8e8e8;
    color: #666;
  }

  li.active {
    background-color: #ffffff;
  }

  li.inactive {
    background-color: #f8f8f8;
  }

  ul.menu li {
    width: 2.5rem;
    font-size: 0.5rem;
    padding: 0.75rem 0.5rem;
  }

  .detail {
    width: 100%;
    overflow: hidden;
  }

  .detail li .title {
    font-size: 0.45rem;
    color: #999;
    padding: 0.25rem;
    border-bottom: 1px solid #eee;
  }

  .detail li .title span {
    font-size: 0.55rem;
    color: #333;
    margin-right: 0.5rem;
  }

  .detail li .dishes {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0.3rem 0.5rem 0px;
    margin-bottom: 1rem;
  }

  .detail li .dishes img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .detail li .dishes>div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .detail li .dishes>div .name {
    color: #444;
    font-size: 0.6rem;
    font-weight: 900;
  }

  .detail li .dishes>div .sales {
    color: #999;
    font-size: 0.5rem;
    margin-top: 0.2rem;
  }

  .detail li .dishes>div .price {
    width: 100%;
    color: #f60;
    font-size: 0.6rem;
    margin-top: 0.7rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .detail li .dishes>div .price .dollar {
    font-size: 0.5rem;
    margin-right: 0.1rem;
  }

  .minus_btn {
    width: 0.76rem;
    height: 0.76rem;
    display: inline-block;
    text-align: center;
    line-height: 0.76rem;
    border: 0.02rem solid #2395ff;
    border-radius: 50%;
    font-size: 0.6rem;
    color: #2395ff;
  }

  .detail li .dishes>div .price .num {
    margin: 0px 0.5rem;
    color: #666;
  }

  .add_btn {
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    text-align: center;
    line-height: 0.8rem;
    background-color: #2395ff;
    border-radius: 50%;
    font-size: 0.6rem;
    color: white;
  }

  .cart {
    position: fixed;
    bottom: -2px;
    z-index: 1000;
    width: 100%;
    height: 2rem;
    background-color: rgba(61,61,63,.9);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .empty {
    background-color: #363636;
  }

  .notEmpty {
    background-color: #fff;
  }

  .cart div {
    position: absolute;
    top: -0.8rem;
    left: 0.8rem;

    border-radius: 50%;
    border: 0.25rem solid #444;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .cart .price {
    display: flex;
    flex-direction: column;
    margin-left: 3.5rem;
  }

  .cart .price span:nth-child(1) {
    font-size: 0.7rem;
    color: white;
  }

  .cart .price span:nth-child(2) {
    font-size: 0.4rem;
    color: #999;
  }

  .cart>span {
    font-size: 0.6rem;
    color: white;
    margin-right: 0.5rem;
  }

  .pay_btn {
    background-color: #4cd964;
    color: #fff;
    height: 100%;
    width: 3.5rem;
    margin-right: 0px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mask {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 100;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .cart_info {
    position: fixed;
    bottom: 0px;
    padding-bottom: 2rem;
    background-color: white;
    width: 100%;
    z-index: 100;
    animation: goUp 0.25s linear;
  }

  .scroll {
    overflow: scroll;
    max-height: 10rem;
  }

  @keyframes goUp {
    0% {
      bottom: -35%;
    }
    100% {
      bottom: 0%;
    }
  }

  .cart_info .title {
    padding: 0.35rem 0.5rem;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,.1);
    font-size: 0.55rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart_info .title span {
    color: #00a0dc;
  }

  .cart_info .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .cart_info .order:last-child {
    margin-bottom: 0.5rem;
  }

  .cart_info .order>p {
    font-size: 0.6rem;
    margin-left: 0.5rem;
  }

  .add_to_cart {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .add_to_cart p {
    font-size: 0.55rem;
    color: #f01414;
    margin-right: 1rem;
  }

  .add_to_cart .num {
    font-size: 0.55rem;
    color: #666;
    margin: 0px 0.5rem;
  }

  .count {
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    position: absolute;
    font-size: 0.4rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 0.6rem;
    right: -0.2rem;
    top: -0.2rem;
  }

  .goods_detail {
    width: 100%;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    transition: all 0.3s linear;
  }

  .goods_detail .showImg {
    position: relative;
  }

  .goods_detail .showImg img {
    width: 100%;
  }

  .goods_detail .desc {
    font-size: 0.4rem;
    color: #ddd;
    background-color: rgba(0,0,0,0.4);
    margin: 0.5rem;
    position: absolute;
    border-radius: 0.1rem;
    padding: 0.1rem 0.2rem;
    bottom: 0.5rem;
  }

  .goods_detail>.desc_detail {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0.25rem 0.5rem;
    border-bottom: 0.01rem solid #ccc;
  }

  .goods_detail>.desc_detail .name {
    color: #333;
    font-size: 0.6rem;
    font-weight: 900;
  }

  .goods_detail>.desc_detail .sales {
    font-size: 0.45rem;
    color: #999;
    margin: 0.2rem 0px;
  }

  .goods_detail>.desc_detail .price {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .goods_detail>.desc_detail .price>span {
    font-size: 0.6rem;
    color: #f60;
    margin: 0.5rem 0px;
  }

  .info_detail {
    border-top: 0.3rem solid #eee;
  }

  .info_detail .title {
    font-size: 0.6rem;
    margin: 0.5rem;
    font-weight: 900;
  }

  .info_detail .info {
    font-size: 0.45rem;
    margin: 0.5rem;
  }

  .arrow {
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 0rem;
    left: 0rem;
  }

  .arrow img {
    width: 60%;
    height: 60%;
    margin: 20%;
  }

  .move-enter {
    transform: translateX(100%);
  }

  .move-leave, .move-leave-active {
    transform: translateX(100%);
  }

  .ball{
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
  }

  .inner{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(0,160,220);
    transition: all 0.4s linear;
  }
</style>
