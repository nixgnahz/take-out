<template>
  <div>
    <div class="input">
      <router-link :to="{name: 'home'}">
        <img :src="back" class="back"/>
      </router-link>
      <form>
        <img :src="search" class="search"/>
        <input type="text" placeholder="输入商家、商品名称" v-model.trim="search_value" @blur="addHistory"  @keyup.enter="addHistory"/>
      </form>
      <span>搜索</span>
    </div>
    <div class="boxes" v-if="history_items.length">
      <p class="title">历史搜索</p>
      <img :src="del" @click="deleteHistory"/>
      <ul>
        <li v-for="item in history_items" :data-value="item.value" @click="getSearch($event)">{{item.value}}</li>
      </ul>
    </div>
    <div class="boxes" v-if="hot_items.length">
      <p class="title">热门搜索</p>
      <ul>
        <li v-for="item in hot_items" :data-value="item.value" @click="getSearch($event)">{{item.value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search_value: "",
        back: require('../../assets/back.png'),
        search: require('../../assets/search.png'),
        del: require('../../assets/delete.png'),
        history_items: [],
        hot_items: [
          {
            id: "NBbi1",
            value: "咖啡"
          },
          {
            id: "NBbi2",
            value: "奶茶"
          },
          {
            id: "NBbi3",
            value: "沙拉"
          },
          {
            id: "NBbi4",
            value: "麦当劳"
          },
          {
            id: "NBbi5",
            value: "凉皮"
          },
          {
            id: "NBbi6",
            value: "会员领红包"
          },
          {
            id: "NBbi7",
            value: "星巴克"
          },
          {
            id: "NBbi8",
            value: "汉堡王"
          },
          {
            id: "NBbi9",
            value: "一点点"
          }
        ]
      }
    },
    methods: {
      addHistory () {
        let value = this.search_value;
        this.search_value = "";
        if(!value) return;
        var obj = {
          id: this.history_items + 1,
          value: value
        }
        for(var i = 0; i < this.history_items.length; i++) {
          if(value == this.history_items[i].value) {
            return;
          }
        }
        if(this.history_items.length > 6) {
          this.history_items.pop();
          this.history_items.unshift(obj);
          return;
        }
        this.history_items.unshift(obj);
      },
      deleteHistory () {
        this.history_items = [];
      },
      getSearch (e) {
        this.search_value = e.target.dataset.value;
      }
    }
  }
</script>

<style scoped>
  .input {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
  }

  a {
    font-size: 0px;
  }

  img.back {
    width: 0.8rem;
    height: 0.8rem;
  }

  form {
    width: 10rem;
    padding: 0px 0.5rem;
    background-color: #f8f8f8;
    height: 1.2rem;
    display: flex;
    align-items: center;
  }

  img.search {
    width: 0.8rem;
    height: 0.8rem;
  }

  input {
    width: 100%;
    height: 1rem;
    background-color: #f8f8f8;
    -webkit-appearance: none;
    border: none;
    padding: 0rem 0.2rem;
    color: #666;
  }

  input:focus {
    border: 0px;
    outline:none;
  }

  span {
    font-size: 0.6rem;
    color: #333;
  }

  .boxes {
    padding: 0.5rem;
    position: relative;
  }

  .boxes .title {
    font-size: 0.65rem;
    margin: 0.25rem;
    color: #666;
  }

  .boxes img {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    right: 0.5rem;
    top: 0.9rem;
  }

  .boxes ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .boxes ul li {
    padding: 0.3rem 0.5rem;
    font-size: 0.55rem;
    color: #666;
    background-color: #f7f7f7;
    margin: 0.25rem;
    border-radius: 0.1rem;
  }
</style>
