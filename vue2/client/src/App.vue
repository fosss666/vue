<template>
  <div>
    <h1>{{msg}}</h1>
    <div><input type="text" :value="name">简化写法</div>
    <div><input type="date" v-bind:value="birthday"></div>
    <div><input type="button" value="点我" @click="f1()"></div>
    <hr>
    <div>
      <input type="button" value="+" @click="jia()">
      <input type="button" value="-" @click="jian()">
      {{number}}
    </div>
  </div>



</template>

<script>
export default{
  data(){
    return {
      msg:"嘞好啊",
      name:"张三",
      birthday:'1999-12-12',
      number:0
    }
  },
  methods:{
    f1(){
      alert("哎呦，你干嘛")
    },
    jia(){
      this.number++
    },
    jian(){
      this.number--
    }
  }
}
</script>



























