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
      <button class="btn btn-default btn-xs" @click="$translate.setLang('en')">EN</button>
      <button class="btn btn-default btn-xs" @click="$translate.setLang('fr')">FR</button>
      <button class="btn btn-default btn-xs" @click="$translate.setLang('es')">ES</button>
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
</style>
