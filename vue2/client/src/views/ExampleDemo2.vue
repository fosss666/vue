<template>
  <el-cascader :options="options" clearable></el-cascader>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      options:[]
    }
  },
  created(){
    this.getMenu()
  },
  methods:{
    getMenu(){
      axios.get("/api/menu").then(res=>{
        const map=new Map();
        const menus=res.data.data;
        for(const {id,name,pid} of menus){
          map.set(id,{value:id,label:name,pid:pid});
        }

        //设置父子关系
        const values=map.values()
        const top=[]//顶层
        for( const value of values){
          const parent=map.get(value.pid)
          if(parent!==undefined){
            if(parent.children===undefined){
              parent.children=[]
            }
            parent.children.push(value)
          }else {
            //parent已经定义过，说明该数据已经处理完成
            top.push(value)
          }
        }
        console.log(top)
        this.options=top
      })

    }
  }
}
</script>

<style scoped>

</style>