<template>
  <div class="well">
    <div class="row">
      <div class="col-sm-5 text-right">
        <img class="logo" src="../assets/logo.png">
      </div>
      <div class="col-sm-7 text-left">
        <h1 v-translate>Hello Vue !</h1>
      </div>
    </div>
    <div class="row text-center">
      <span v-translate>Change Language</span> : &nbsp;&nbsp;&nbsp;
      <el-button size="mini" @click="$translate.setLang('en')">EN</el-button>
      <el-button size="mini" @click="$translate.setLang('fr')">FR</el-button>
      <el-button size="mini" @click="$translate.setLang('es')">ES</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    locales: require('../i18n/Hello.js')
  }
</script>

<style lang="sass" scoped>
  h1
    color: #42b983
  .logo
    width: 80px
    height: 80px
  .well 
    text-align: center;
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
</style>
