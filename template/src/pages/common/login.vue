<template>
  <div class="login">
      <div class="login-form">
        <div class="login-title">
            <h1>VIP MUSIC</h1>
        </div>
        <input type="password" name="password" v-model="form.password">
        <input type="password" name="password" v-model="form.username">
        <button @click="login">Login</button>
        <div class="login-desc">
            <p>测试用户名admin，密码111111</p>
        </div>
      </div>
  </div>
</template>
<script>
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from '../../store/user'

    export default {
        data() {
            return{
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions([USER_SIGNIN]),
            login() {
                if(!this.form.password || !this.form.username) return
                if(this.form.password == '111111' && this.form.username == 'admin'){
                    this.USER_SIGNIN(this.form)
                    this.$router.replace({ path: '/' })
                }else{
                    this.$message.error('用户名或密码错误')
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        background: #324057;
        .login-title{
            margin-bottom: 60px;
            h1{
                color: #fff;
                font-size: 50px;
                text-align: center;
            }
        }
        .login-form{
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            input{
                width: 400px;
                height: 40px;
                border: 1px solid #fff;
                background: transparent;
                color: #fff;
                padding: 12px;
                border-radius: 20px;
            }
            button{
                width: 400px;
                height: 40px;
                background: #fff;
                color: #324057;
                padding: 12px;
                border-radius: 20px;
            }
        }
        .login-desc{
            p{
                text-align: center;
                font-size: 12px;
                color: #eee;
            }
        }
    }
</style>