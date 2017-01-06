<template>
  <div class="g-side">
    <el-menu default-active="1">
      <router-link to="/"><el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item></router-link>
      <router-link to="/test"><el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item></router-link>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import navbar from './Navbar'

  export default {
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .g-side{
    text-align: center;
    height: 100%;
    width: 200px;
    position: absolute;
    left: 0;
    top: 0;
    background: #eff2f7;
    a:link,a:visited,a:hover,a:active{
      text-decoration: none;
    }
  }
</style>
