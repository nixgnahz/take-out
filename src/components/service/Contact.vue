<template>
  <div>
    <ul>
      <li v-for="item in items">
        <img :src="item.img"/>
        <p>{{item.value}}</p>
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
            img: require('../../assets/online-contact.png'),
            value: "在线客服"
          },
          {
            img: require('../../assets/video-contact.png'),
            value: "客服热线"
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
    background-color: white;
    border-bottom: .133333vw solid #eee;
  }

  ul li {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.8rem 0px;
  }

  ul li:first-child {
    border-right: .133333vw solid #eee;
  }

  ul li img {
    width: 1.2rem;
    height: 1.2rem;
  }

  ul li p {
    font-size: 0.4rem;
    color: #666;
    margin-top: 0.2rem;
  }
</style>
