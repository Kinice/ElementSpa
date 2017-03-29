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
  // font awesome
  @fa-font-path: '../node_modules/font-awesome/fonts/';
  @import '../node_modules/font-awesome/less/font-awesome';
  
  //reset
  @import 'assets/less/reset.less';
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

