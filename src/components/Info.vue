<template>
  <div>
    <Sign></Sign>
    <Money></Money>
    <InfoItem :items="items_1"></InfoItem>
    <InfoItem :items="items_2"></InfoItem>
    <InfoItem :items="items_3"></InfoItem>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from './TabBar.vue'
  import Sign from './info/Sign.vue'
  import Money from './info/Money.vue'
  import InfoItem from './info/InfoItem.vue'
  export default {
    components: {
      TabBar,
      Sign,
      Money,
      InfoItem
    },
    data () {
      return {
        items_1: [
          {
            img: require('../assets/money.png'),
            title: "我的地址",
            href: ""
          }
        ],
        items_2: [
          {
            img: require('../assets/money.png'),
            title: "金币商城",
            href: ""
          },
          {
            img: require('../assets/money.png'),
            title: "分享拿5元现金",
            href: ""
          }
        ],
        items_3: [
          {
            img: require('../assets/money.png'),
            title: "我的客服",
            href: ""
          },
          {
            img: require('../assets/money.png'),
            title: "下载饿了么APP",
            href: ""
          }
        ]
      }
    }
  }
</script>

<style>

</style>
