<template>
  <div id="app" class="text-center">
    <conFrame></conFrame>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import conFrame from './components/frame'

export default {
  components: { Navbar , conFrame }
}
</script>

<style lang="sass">
  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  //some styling adaptations
  p
    text-align: justify
  body,html
    height: 100%
  #app
    height: 100%
</style>
