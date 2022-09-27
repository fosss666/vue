<template>
  <div class="login">
    <el-input v-model="username" placeholder="请输入用户名" size="mini"></el-input>
    <el-button type="primary" size="mini" @click="login()">登录</el-button>
  </div>
</template>
<script>
import axios from 'axios'
import {resetRouter,addServerRoutes} from "@/router/example15";

const options = {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    login() {
      resetRouter()
      axios.get(`/api/menu/${this.username}`).then(res => {
        console.log(res.data.data)
        const array = res.data.data;
        // localStorage     即使浏览器关闭，存储的数据仍在
        // sessionStorage   以标签页为单位，关闭标签页时，数据被清除
        sessionStorage.setItem('serverRoutes',JSON.stringify(array))
        addServerRoutes(array)
        this.$router.push("/")//直接跳转到主页面
      })
    }
  }
}
export default options;
</script>
<style scoped>
.login {
  height: 100%;
  background-color: darkseagreen;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3E登录%3C/text%3E%3C/svg%3E"); */
}

.el-input--mini {
  width: 193px;
  margin: 10px 10px 0 10px;
}
</style>