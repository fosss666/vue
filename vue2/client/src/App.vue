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
    <hr/>

    <div>
      <input type="text" v-model="name">
      {{name}}
    </div>
    <hr/>
    <div>
      男<input type="radio" v-model="sex" value="男">
      女<input type="radio" v-model="sex" value="女"><br/>
      你选中了{{sex}}
    </div>

    <div>
      爱好
      游泳<input type="checkbox" value="游泳" v-model="hobbies">
      健身<input type="checkbox" value="健身" v-model="hobbies">
      篮球<input type="checkbox" value="篮球" v-model="hobbies"><br/>
      你选中了{{hobbies}}
    </div>
    <hr/>
    <div>
      <h1>{{sum}}</h1>
      <h1>{{sum}}</h1>
      <h1>{{sum}}</h1>
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
      number:0,
      sex:'男',
      hobbies:[]
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
  },
  computed:{
    sum(){
      console.log("计算属性有缓存，只执行一次")
      return this.name+this.sex
    }
  }
}
</script>



























