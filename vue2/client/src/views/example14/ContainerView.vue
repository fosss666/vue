<template>
    <div class="container">
<!--      <router-view></router-view>-->
      <el-container>
        <el-aside width="200px">
<!--          <router-link to="/c1/p1">P1</router-link>
          <router-link to="/c1/p2">P2</router-link>
          <router-link to="/c1/p3">P3</router-link>-->
          <el-menu
              router
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-submenu>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>菜单一</span>
              </template>
                <el-menu-item index="/c1/p1">选项1</el-menu-item>
                <el-menu-item index="/c1/p2">选项2</el-menu-item>
                <el-menu-item index="/c1/p3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title">菜单二</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-document"></i>
              <span slot="title">菜单三</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-container>
          <el-header>
            <el-button type="primary" icon="el-icon-edit" circle @click="jump('/c1/p1')"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="jump('/c1/p2')"></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click="jump('/c1/p3')"></el-button>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
export default{
  methods:{
    jump(url){
      this.$router.push(url)
    }
  }
}
</script>
<style scoped>
.container {
    height: 100%;
    background-color: cornsilk;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3E主页%3C/text%3E%3C/svg%3E");
    padding: 20px;
    box-sizing: border-box;
}

.el-container {
    height: 100%;
}

.el-header {
    background-color: aquamarine;
}

.el-aside {
    background-color: gold;
}

.el-main {
    background-color: dodgerblue;
}

a {
    text-decoration: none;
    display: block;
    margin: 10px 10px 0 10px;
    padding: 3px;
    font-size: 13px;
}

.router-link-active {
    color: #fff;
    background-color: darkslateblue;
}

.el-button {
    margin-top: 15px;
}
</style>