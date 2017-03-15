<template>
  <header class="g-hd">
    <div class="m-logo">
      
    </div>
    <div class="m-user">
      
    </div>
  </header>
</template>

<script>
  export default {

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

      }
    }
  }
</style>
