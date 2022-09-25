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

      <div class="block">
        <!--      <span class="demonstration">完整功能</span>-->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryDto.page"
            :page-sizes="[3, 6]"
            :page-size="queryDto.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
    </template>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      students: [],
      queryDto: {
        page: 1,
        size: 3
      },
      total: 0
    }
  },
  created() {
    // this.getAll()
    this.getPage()
  },
  methods: {
    getAll() {
      axios.get("/api/students").then(res => {
        this.students = res.data.data
      })
    },
    getPage() {
      axios.get("/api/students/q",{params:this.queryDto}).then(res => {
        console.log(res)
        this.students = res.data.data.list
        this.total = res.data.data.total
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.queryDto.size = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.queryDto.page = val
    }
  }
}
</script>

<style scoped>

</style>