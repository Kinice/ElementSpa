<template>
  <div class="g-bd">
    <navbar></navbar>
    <div class="g-container">
      <sidebar></sidebar>
      <div class="g-main">
        <router-view></router-view>
      </div>
    </div> 
  </div>
</template>

<script>
  import navbar from './Navbar'
  import sidebar from './Sidebar'

  export default {
    data(){
      return{

      }
    },
    methods: {

    },
    components: {
      navbar,sidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .g-container{
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    .g-main{
      position: relative;
      margin-left: 200px;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
