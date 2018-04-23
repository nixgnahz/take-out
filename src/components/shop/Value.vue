<template>
  <div>
    <div class="top">
      <div class="general">
        <p class="score">{{item.general_score}}</p>
        <p>综合评分</p>
        <p>高于周边商家</p>
      </div>
      <div class="detail">
        <p>
          <span>服务态度</span>
          <span class="score">{{item.service_score}}</span>
        </p>
        <p>
          <span>菜品评价</span>
          <span class="score">{{item.dishes_score}}</span>
        </p>
        <p>
          <span>送达时间</span>
          <span>{{item.time}}分钟</span>
        </p>
      </div>
    </div>
    <div class="bottom">
      <ul class="menu">
        <li v-for="(itm, index) in value_menu" :class="[itm.active ? 'active': '', itm.rateType ? 'bad' : 'good']" @click="changeMenu(index)">{{itm.value}}({{itm.count}})</li>
      </ul>
      <div class="choice_box" @click="changeChoice">
        <span class="choice" :class="[isShowEmptyValue ? 'unselected' : 'selected']"></span>
        <p class="text">只看有内容的评价</p>
      </div>
      <ul class="detail">
        <li v-for="item in value_arr">
          <img :src="item.avatar"/>
          <div>
            <p class="name">
              {{item.username}}<span>{{item.time}}</span>
            </p>
            <p class="desc">{{item.text}}</p>
            <img v-if="item.img" :src="item.img"/>
            <p class="labels">
              <span v-for="itm in item.recommend">{{itm}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Vue from 'vue';
  export default {
    data () {
      return {
        item: {
          general_score: "4.9",
          service_score: "5.0",
          dishes_score: "4.5",
          time: 30
        },
        index: 0,
        isShowEmptyValue: true,
        values: [],
        value_menu: [],
        value_arr: [],
      }
    },
    created: function () {
      let id = this.$route.params.id;
      this.getValues(id);
    },
    methods: {
      getValues (id) {
        var self = this;
        axios.get('http://localhost:8080/static/shop.json?id=' + id).then((res) => {
          if(res.data) {
            this.values[0] = res.data.value;
            this.values[1] = res.data.value.filter((item)=>item.rateType == 0);
            this.values[2] = res.data.value.filter((item)=>item.rateType == 1);
            this.value_menu = [
              {rateType: 0, active: true, value: "全部", count: this.values[0].length},
              {rateType: 0, active: false, value: "满意", count: this.values[1].length},
              {rateType: 1, active: false, value: "不满意", count: this.values[2].length}
            ]
            this.value_arr = this.values[0];
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      changeMenu (index) {
        this.index = index;
        this.filterData();
        this.value_menu.forEach((item) => {
          item.active = false;
        })
        this.value_menu[index].active = true;
      },
      changeChoice () {
        this.isShowEmptyValue = !this.isShowEmptyValue;
        this.filterData();
      },
      filterData () {
        if(this.isShowEmptyValue) {
          this.value_arr = this.values[this.index];
        } else{
          this.value_arr = this.values[this.index].filter((item)=>item.text != "");
        }
      }
    }
  }
</script>

<style scoped>
  .top {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0.75rem 0px;
    background-color: white;
    border-bottom: 10px solid #eee;
  }

  .top .general {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;
    border-right: 1px solid #ddd;
  }

  .top .general .score {
    color: #ff6000;
    font-weight: bold;
  }

  .top .general p:nth-child(n+2) {
    font-size: 0.45rem;
    color: #999;
    margin: 0.1rem 0px;
  }

  .top .detail {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
  }

  .top .detail p {
    margin: 0.2rem 0px;
    color: #999;
  }

  .top .detail p span {
    margin-left: 0.5rem;
  }

  .top .detail p .score {
    color: #ff6000;
  }

  .bottom {
    background-color: white;
  }

  .bottom .menu {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 0.5rem;
    flex-wrap: wrap;
    padding: 0.4rem 0px;
  }

  .bottom .menu li {
    padding: 0.2rem 0.3rem;
    border-radius: 2px;
    margin: 0.2rem;
  }

  .bottom .detail li {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding: 0.5rem;
    border-top: 1px solid #eee;
  }

  .bottom .detail li>img {
    width: 1.4rem;
    heigth: 1.4rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .bottom .detail li div .name {
    color: #333;
    font-size: 0.55rem;
  }

  .bottom .detail li div .name span {
    font-size: 0.4rem;
    color: #999;
    margin-left: 0.5rem;
  }

  .bottom .detail li div .desc {
    color: #333;
    font-size: 0.55rem;
    margin: 0.25rem 0px;
  }

  .bottom .detail li div img {
    width: 4rem;
    height: 4rem;
  }

  .bottom .detail li div .labels {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0.5rem;
    color: #6d7885;
  }

  .bottom .detail li div .labels span {
    padding: 0.1rem 0.25rem;
    border: 1px solid #eee;
    margin: 0.25rem 0.25rem 0.25rem 0px;
    border-radius: 2px;
  }

  .active {
    background-color: #0097ff !important;
    color: #fff;
  }

  .good {
    background-color: #ebf5ff;
  }

  .bad {
    background-color: #f5f5f5;
  }

  .choice_box {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0rem 0.5rem;
    padding: 0.5rem 0px;
    border-top: 1px solid rgba(7,17,27,.1);
  }

  .choice_box .choice {
    color: #fff;
    width: 0.85rem;
    height: 0.85rem;
    line-height: 0.85rem;
    text-align:center;
    border-radius: 50%;
    font-weight: lighter;
    font-size: 0.6rem;
  }

  .choice.selected {
    background-color: #00c850;
  }

  .choice.unselected {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .choice:after {
    content: '\2713';
  }

  .choice_box .text {
    font-size: 0.5rem;
    margin-left: 0.3rem;
  }
</style>
