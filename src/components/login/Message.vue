<template>
  <div>
    <div class="form">
      <form>
        <p class="tel">
          <input class="sign" type="text" placeholder="手机号" v-model.trim="tel"/>
          <button class="psw">获取验证码</button>
        </p>
        <input class="sign" type="password" placeholder="验证码" v-model.trim="code"/>
        <p class="tip">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<router-link :to="href">《用户服务协议》</router-link></p>
        <button class="sign" @click="login">登录</button>
      </form>
    </div>
    <Toast v-if="isShowToast" :text="text"></Toast>
  </div>
</template>

<script>
  import Toast from '../Toast.vue'
  export default {
    data () {
      return {
        href: "",
        tel: "",
        code: "",
        text: "",
        isShowToast: false
      }
    },
    components: {
      Toast
    },
    methods: {
      login () {
        if(!this.tel) {
          this.showToast("请填写手机号码")
          return;
        }
        if(!this.code) {
          this.showToast("请填写验证码")
          return;
        }
      },
      showToast (text) {
        if(this.isShowToast) return;
        this.text = text;
        this.isShowToast = true;
        setTimeout(()=>{
          this.text = "";
          this.isShowToast = false;
        }, 4000)
      }
    }
  }
</script>

<style scoped>
  .tel {
    position: relative;
  }

  .tel button.psw {
    position: absolute;
    right: 0rem;
    top: 0.45rem;
    color: #999;
    padding: 0.6rem 0.5rem;
    background-color: transparent;
  }

  .tip {
    color: #999;
    font-size: 0.5rem;
    margin-top: 0.5rem;
  }

  .tip a {
    color: #2395ff;
  }

  input.sign {
    width: 95%;
    padding-left: 5%;
    height: 1.85rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0.4rem 0px;
  }

  .form {
    width: 80%;
    margin: 0rem 10%;
  }

  form div{
    width: 100%;
  }

  .form button.sign {
    background: #4cd96f;
    color: white;
    width: 100%;
    height: 1.8rem;
    font-size: 0.6rem;
    border-radius: 5px;
    margin-top: 1rem;
  }
</style>
