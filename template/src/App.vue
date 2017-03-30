<template>
  <div id="app" class="text-center">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">  
  //reset
  @import 'assets/less/reset.less';
  @import 'assets/less/basic.less';
  p{
    text-align: justify
  }
  body,html{
    height: 100%
  }
  #app{
    height: 100%
  }
</style>

