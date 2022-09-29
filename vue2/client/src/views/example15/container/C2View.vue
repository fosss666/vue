<template>
  <div class="p">
    <el-button @click="updateServeName" >点击从后台获取数据存储到store</el-button>
  </div>
</template>
<script>
// import {mapMutations} from "vuex";
// import {mapActions} from "vuex";

export default{
  methods:{
    // ...mapMutations(['updateServeName'])
    // ...mapActions(['updateServeName'])
    updateServeName(){
      this.$store.dispatch('updateServeName')
    }
  }
}
</script>
<style scoped>
.p {
  background-color: wheat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3EC2%3C/text%3E%3C/svg%3E");
  height: 100%;
  padding: 20px;
}
</style>