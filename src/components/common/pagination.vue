<template>
  <div class="block" v-bind:style="paginationStyle">
    <el-pagination
      :current-page="current_page"
      :page-size="page_size"
      :page-sizes="[10,20,50,100]"
      :total="total"
      layout="sizes,prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

</template>

<script>
export default {
  props: [
    'page_size',
    'current_page',
    'total',
    'paginationStyle'
  ],
  methods: {
    //分页
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    //改变每页显示尺寸
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    }

  }

}
</script>

<style scoped>

</style>
