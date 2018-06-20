<template>
  <div>
    <div class="form">
      <form>
        <input class="sign" type="text" placeholder="手机/邮箱/用户名" v-model.trim="username"/>
        <div class="pwd">
          <input class="sign" :type="isShowPwd ? 'text': 'password'" placeholder="密码" v-model.trim="password"/>
          <span class="row">
            <input type="checkbox" id="show">
            <label for="show" class="red" @click="changeType"></label>
          </span>
        </div>
        <button class="sign" @click="getUserInfo">登录</button>
      </form>
    </div>
    <Toast v-if="isShowToast" :text="text"></Toast>
  </div>
</template>

<script>
  import resData from '../../../static/login.json'
  import Toast from '../Toast.vue'
  export default {
    data () {
      return {
        username: "",
        password: "",
        isShowPwd: false,
        text: "",
        isShowToast: false
      }
    },
    components: {
      Toast
    },
    computed: {
      loginStatus () {
        return this.$store.state.loginStatus
      }
    },
    methods: {
      getUserInfo () {
        let self = this;
        if(!this.username) {
          this.showToast("请输入手机/邮箱/用户名")
          return;
        }
        if(!this.password) {
          this.showToast("请输入登录密码")
          return;
        }
        if(this.username == resData.username && this.password == resData.password) {
          self.$store.commit('loginSuccess');
          self.$router.push({name: 'info'})
        } else{
          this.showToast("账号或密码填写有误")
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
      },
      changeType () {
        this.isShowPwd = !this.isShowPwd;
      }
    }
  }
</script>

<style scoped lang="scss">
  .form {
    width: 80%;
    margin: 0rem 10%;
    form {
      input.sign {
        width: 95%;
        padding-left: 5%;
        height: 1.85rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 0.4rem 0px;
      }
      div.pwd {
        position: relative;
        width: 100%;
        .row {
          line-height: 60px;
          text-align: center;
          position: absolute;
          top: 0.2rem;
          right: 0rem;
        }
        input[type="checkbox"] {
          display: none;
        }
        input[type="checkbox"] + label {
          display: inline-block;
          width: 40px;
          height: 20px;
          position: relative;
          -webkit-transition: 0.3s;
          transition: 0.3s;
          margin: 0px 20px;
          box-sizing: border-box;
        }
        input[type="checkbox"] + label:after {
          content: '';
          display: block;
          position: absolute;
          left: 0px;
          top: 0px;
          width: 20px;
          height: 20px;
          -webkit-transition: 0.3s;
          transition: 0.3s;
          cursor: pointer;
        }
        #show:checked + label.red {
          background: #ECA9A7;
        }
        #show:checked + label.red:after,{
          background: #D9534F;
        }
        #show:checked + label:after {
          left: calc(100% - 20px);
        }
        #show + label {
          background: #ddd;
          border-radius: 20px;
          box-shadow: 1px 1px 3px #aaa;
        }
        #show + label:after {
          background: #fff;
          border-radius: 50%;
          box-shadow: 1px 1px 3px #aaa;
        }
      }
      button.sign {
        background: #4cd96f;
        color: white;
        width: 100%;
        height: 1.8rem;
        font-size: 0.6rem;
        border-radius: 5px;
        margin-top: 1rem;
      }
    }
  }
</style>
