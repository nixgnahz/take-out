<template>
  <div class="body">
    <div class="top">
      <router-link :to="{name: href}">
        <img :src="img"/>
      </router-link>
      <span>{{item.title}}</span>
    </div>
    <ul>
      <li v-for="itm in item.detail">
        <p class="title">{{itm.qus}}</p>
        <p class="desc" v-for="it in itm.ans">{{it}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import resData from '../../../static/issues.json'
  export default {
    data () {
      return {
        href: 'service',
        img: require('../../assets/back_white.png'),
        item: ""
      }
    },
    created: function () {
      let id = this.$router.history.current.params.id;
      this.item = resData.data[id];
    }
  }
</script>

<style scoped lang="sass">
  .body
    width: 100%;
    background-color: white;
    position: absolute;
    min-height: 100%;
    .top
      width: 100%;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      display: block;
      text-align: center;
      flex-direction: row;
      padding: 0.2rem;
      line-height: 1.3rem;
      position: relative;
      a
        font-size: 0px;
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
        img
          width: 0.8rem;
          height: 0.8rem;
      span
        font-size: 0.6rem;
        color: white;
    ul li
      margin: 0.75rem;
      .title
        font-size: 0.6rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.4rem;
      .desc
        color: #999;
        font-size: 0.5rem;
        margin: 0.4rem 0px;
        line-height: 0.8rem;
</style>
