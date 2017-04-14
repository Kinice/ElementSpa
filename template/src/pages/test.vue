<template>
  <div class="m-item"><!-- 每个页面的根元素m-title -->
    <div class="item-title"><!-- 页面标题 -->
      <h2 class="title">已获取学生信息</h2>
    </div>
    <div class="item-content">
      <Grid :loading="loading" :data="gridOption.data" :columns="gridOption.columns"></Grid>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        gridOption: {
          columns: [
            {
              key:'name',
              label:'姓名'
            },{
              key:'phone',
              label:'电话'
            },{
              key:'email',
              label:'邮箱'
            },{
              key:'carrer',
              label:'职业'
            },{
              key:'id',
              label:'编号'
            }
          ],
          data: [],
          pageSize: 10,
          currentPage: 1
        },
        loading: false
      }
    },
    methods: {
      getTableData() {
        this.loading = true
        let finalData = []
        setTimeout(function() {
          for(let i = 0; i < 500; i++){
            let data = {
              name: 'XXX',
              phone: '13123212312',
              email: 'xxx@foxmail.com',
              carrer: '程序员',
              id: i
            }
            finalData.push(data)
          }
          this.gridOption.data = finalData
          this.loading = false
        }.bind(this),1000)
      }
    },
    components: {
        Grid: require('../components/Grid.vue')
    },
    mounted() {
      this.getTableData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 
</style>
