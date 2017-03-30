<template>
  <header class="g-hd">
    <div class="m-logo">
      <span>LOGO</span>
    </div>
    <div class="m-user">
      <span class="m-wel">
        
      </span>
      <span class="m-exit" @click="signout">
        退出
      </span>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      signout() {
        this.$message.success('成功退出登录')
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  .g-hd{
    height: 70px;
    background: #324057;
    min-width: 875px;
    .m-logo{
      line-height: 70px;
      margin-left: 70px; 
      //替换
      span{
        color: #fff;
        font-size: 2.2em;
      }
    }
    .m-user{
      line-height: 70px;
      margin-right: 70px;
      position: absolute;
      right: 0;
      top: 0;
      .m-wel{
        color: #fff;
        font-size: 1.2em;
      }
      .m-exit{
        color: #fff;
        font-size: 1.2em;
        display: inline-block;
        cursor: pointer;
      }
      .m-exit:hover{
        animation: shake 0.3s linear infinite;
      }
    }
  }
  @keyframes shake{
    0%{transform:translate(3px,3px)}
    10%{transform:translate(-3px,3px)}
    20%{transform:translate(3px,-3px)}
    30%{transform:translate(3px,3px)}
    40%{transform:translate(-3px,-3px)}
    50%{transform:translate(-3px,3px)}
    60%{transform:translate(3px,-3px)}
    70%{transform:translate(3px,3px)}
    80%{transform:translate(3px,-3px)}
    90%{transform:translate(-3px,3px)}
    100%{transform:translate(-3px,-3px)}
  }
</style>
