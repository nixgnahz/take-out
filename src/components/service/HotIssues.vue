<template>
  <div>
    <p class="title">热门问题</p>
    <ul>
      <li v-for="item in items">
        <router-link :to="{name: href, params: {id: item.id}}">
          <p>{{item.value}}</p>
          <img :src="img"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        href: 'issues',
        img: require('../../assets/back.png'),
        items: [
          {
            id: "time",
            value: "准时达问题"
          },
          {
            id: "pay",
            value: "支付问题"
          },
          {
            id: "money",
            value: "余额问题"
          },
          {
            id: "vip",
            value: "会员问题"
          },
          {
            id: "activity",
            value: "活动问题"
          },
          {
            id: "other",
            value: "其他问题"
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    background-color: white;
    .title {
      border-bottom: 1px solid #eee;
      font-weight: 600;
      font-size: 0.6rem;
      padding: 1rem 0.5rem 0.5rem;
    }
    ul li {
      padding: 0.5rem;
      border-bottom: 1px solid #eee;
      a {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }
      p {
        font-size: 0.55rem;
        color: #999;
      }
      img {
        width: 0.6rem;
        height: 0.6rem;
        transform: rotate(180deg);
      }
    }
  }
</style>
