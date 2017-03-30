<template>
  <div class="g-side">
    <el-menu :default-active="defaultIndex" @select="handleSelect">
      <router-link to="/"><el-menu-item index="1"><i class="el-icon-message"></i>翻译示例</el-menu-item></router-link>
      <router-link to="/test"><el-menu-item index="2"><i class="el-icon-menu"></i>表格示例</el-menu-item></router-link>
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
      handleSelect(key, keyPath) {
        this.defaultIndex = key
        this.$store.dispatch('STORE_INDEX',key)
      }
    },
    computed:{
      defaultIndex() {
        return this.$store.state.Index
      }
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
