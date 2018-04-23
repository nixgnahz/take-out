<template>
  <div v-if="item">
    <div class="top" @click="getItem">
      <p class="bold">配送信息</p>
      <div class="express">
        <span class="label">{{item.express}}</span>
        <span>约{{item.time}}分钟送达，距离{{item.distance}}km</span>
      </div>
      <div class="price">配送费¥{{item.express_price}}</div>
      <div class="collect">
        <span class="icon" :class="isCollect ? 'active': 'inactive'" @click="collectSeller"></span>
        <span>{{isCollect ? "已收藏" : "收藏"}}</span>
      </div>
    </div>
    <div class="middle">
      <p class="bold">活动与服务</p>
      <p class="word" v-for="itm in item.activities"><span :style="{backgroundColor: itm.color}">{{itm.label}}</span>{{itm.desc}}</p>
      <p class="invoice" v-if="item.is_invoice"><span>票</span>该商家支持开发票，请在下单时填写好发票抬头</p>
    </div>
    <div class="bottom">
      <p class="bold">商家信息</p>
      <p class="desc">{{item.info_desc}}</p>
      <div v-for="itm in item.info">
        <p>{{itm.name}}</p>
        <p>{{itm.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        item: "",
        isCollect: false,
        activities: ""
      }
    },
    created: function () {
      let id = this.$route.params.id;
      this.getItem(id);
    },
    methods: {
      getItem (id) {
        var self = this;
        axios.get('http://localhost:8080/static/shop.json?id=' + id).then((res) => {
          if(res.data) {
            self.item = res.data;
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      collectSeller () {
        this.isCollect = !this.isCollect;
      }
    }
  }
</script>

<style scoped>
  .top, .middle, .bottom {
    background-color: white;
    padding: 0.6rem;
    border-bottom: 0.35rem solid #eee;
    position: relative;
  }

  .bold {
    font-size: 0.65rem;
    font-weight: bold;
    margin: 0.2rem 0px 0.4rem;
  }

  .express {
    font-size: 0.5rem;
  }

  .express span:nth-child(1) {
    color: #fff;
    background-color: #0097ff;
    padding: 0.05rem 0.1rem;
    border-radius: 2px;
    margin-right: 0.25rem;
  }

  .express span:nth-child(2) {
    color: #666;
  }

  .price {
    margin: 0.5rem 0px;
    color: #666;
    font-size: 0.5rem;
  }

  .middle .word {
    font-size: 0.5rem;
    color: #666;
    margin: 0.6rem 0px;
  }

  .middle .word span {
    font-size: 0.4rem;
    color: white;
    padding: 0.05rem;
    margin-right: 0.5rem;
  }

  .middle .invoice {
    font-size: 0.4rem;
  }

  .middle .invoice span {
    border: 1px solid rgb(153, 153, 153);
    color: rgb(153, 153, 153);
    padding: 0rem 0.3rem;
    margin-right: 0.5rem;
  }

  .bottom .desc {
    font-size: 0.5rem;
    color: #999;
    padding: 0.2rem 0px 0.4rem;
  }

  .bottom div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0.4rem 0px;
    border-top: 1px solid #ddd;
  }

  .bottom div:last-child {
    padding-bottom: 0px;
  }

  .bottom div p:nth-child(1) {
    font-size: 0.6rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .bottom div p:nth-child(2) {
    font-size: 0.5rem;
  }

  .collect {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 0.5rem;
    top: 1.5rem;
    font-size: 0.4rem;
    justify-content: center;
    width: 1.5rem;
  }

  .collect .icon {
    font-size: 24px;
    line-height: 24px;
  }

  .active {
    color: #f01414;
  }

  .inactive {
    color: #d4d6d9;
  }

  .icon:before {
    content: "\2764";
  }
</style>
