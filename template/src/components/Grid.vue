<template>
    <div class="g-table">
        <el-table
        v-loading.fullscreen.lock="loading"
        :data="paginationData"
        border
        style="width: 100%">
        <el-table-column
          v-for="column in columns"
          :prop="column.key"
          :label="column.label"
        >
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          :current-page="currentPage"
          layout="total, prev, pager, next, sizes"
          :page-sizes="[10,20,50,100]"
          :page-size="pageSize"
          :total="data.length">
        </el-pagination>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage: 1,
                pageSize: 10
            }
        },
        // 3个props必须引入 必须以bind的方式
        props: {
            loading: {
                type: Boolean,
                required: true
            },
            data: {
                tyle: Array,
                required: true
            },
            columns: {
                tyle: Array,
                required: true
            }
        },
        methods: {
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
            handleSizeChange(pageSize) {
                this.pageSize = pageSize
            }
        },
        computed: {
            paginationData: function() {
                let pageTotal = this.data.length,
                    pageFirstCount = this.pageSize*(this.currentPage-1),
                    tempData = [],
                    maxCount = pageTotal-pageFirstCount<this.pageSize?pageTotal:(pageFirstCount+this.pageSize)

                for(let i = pageFirstCount; i < maxCount; i++){
                    tempData.push(this.data[i])
                }

                return tempData
            }
        }
    }
</script>
<style lang="less">
    .pagination{
        width: 100%;
        margin-top: 20px;
        text-align: right;
    }
</style>