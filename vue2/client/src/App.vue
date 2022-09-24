<template>
  <div>
    <h1>{{msg}}</h1>
    <div><input type="text" :value="name">简化写法</div>
    <div><input type="date" v-bind:value="birthday"></div>
  </div>



</template>

<script>
export default{
  data(){
    return {
      msg:"嘞好啊",
      name:"张三",
      birthday:'1999-12-12'
    }
  }
}
</script>



























