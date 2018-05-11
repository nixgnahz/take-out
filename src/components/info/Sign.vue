<template>
  <div>
    <p class="title">我的</p>
    <div class="sign">
      <img :src="portrait"/>
      <div v-if="!loginStatus">
        <p>
          <router-link :to="{name: href}">登录／注册</router-link>
        </p>
        <p>登录后享受更多特权</p>
      </div>
      <div v-else>HI</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        portrait: require('../../assets/default.png'),
        href: "message"
      }
    },
    computed: {
      loginStatus () {
        return this.$store.state.loginStatus
      }
    }
  }
</script>

<style scoped lang="scss">
  $gradient: linear-gradient(90deg,#0af,#0085ff);

  .title {
    background-image: $gradient;
    padding: 0.45rem;
    font-size: 0.65rem;
    color: white;
    text-align: center;
  }

  .sign {
    background-image: $gradient;
    color: white;
    display: flex;
    align-items: center;
    img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background-color: white;
      margin: 1rem;
    }
    div p {
      &:nth-child(1) {
        a {
          font-size: 0.75rem;
          white-space: nowrap;
          margin-bottom: 0.3rem;
          text-overflow: ellipsis;
          color: white;
        }
      }
      &:nth-child(2) {
        font-size: 0.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
