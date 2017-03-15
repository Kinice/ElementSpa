<template>
  <div class="h-body">
    <div class="block hello">
      YOLO
    </div>
    <div class="block world">
      
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .block{
    height: 200px;
    width: 350px;
    margin: 50px auto;
  }
  .hello{
    text-align: center;
    background: yellowgreen;
    box-shadow: 0 0 0 7.5px #655, 
                0 0 0 15px deeppink, 
                0 0 0 22.5px #655, 
                0 0 0 30px deeppink, 
                0 0 0 37.5px #655, 
                0 0 0 45px deeppink;

    color: #fff;
    font-size: 100px;
    line-height: 200px;
  }
  .world{
    margin-top: 100px;
    background: #4d4d4d;
    border-radius: 10px;
    outline: 1px dashed #fff;
    outline-offset: -20px;
  }
</style>
