<template>
  <div class="body">
    <div class="menu">
      <router-link v-for="item in menus" :to="{name: item.href}" replace :key="item.href">
        <p>{{item.value}}</p>
      </router-link>
    </div>
    <router-view></router-view>
    <router-link class="about" :to="{name: href}">常见问题</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          {
            value: "短信登录",
            href: "message"
          },
          {
            value: "密码登录",
            href: "password"
          }
        ],
        href: "service"
      }
    }
  }
</script>

<style scoped lang="scss">
  .body {
    width: 100%;
    background-color: white;
    height: 100%;
    position: absolute;
    .menu {
      width: 80%;
      margin: 3rem 10% 0.5rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      font-size: 0.55rem;
      a {
        flex: 1;
        text-align: center;
        margin: 0px 1.8rem;
        color: #333;
        p {
          padding: 0.2rem 0px;
        }
      }
      .router-link-exact-active p{
        border-bottom: 2px solid #2395ff;
        color: #2395ff;
      }
    }
    .about {
      display: block;
      width: 100%;
      text-align: center;
      color: #999;
      font-size: 0.45rem;
      margin-top: 0.8rem;
    }
  }
</style>
