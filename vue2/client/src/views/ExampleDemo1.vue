<template>
<div>
  <h1>el</h1>
  <el-button>我是按钮</el-button>

  <template>
    <el-table
        :data="students"
        stripe
        style="width: 100%">
      <el-table-column
          prop="id"
          label="编号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄">
      </el-table-column>
    </el-table>
  </template>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      students:[]
    }
  },
  created() {
    this.getAll()
  },
  methods:{
    getAll(){
      axios.get("/api/students").then(res=>{
        this.students=res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>