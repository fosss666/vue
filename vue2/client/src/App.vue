<template>
  <div>

    <div><input type="button" value="查询数据" @click="selectAll"></div>
    <div>
      <div class="title">学生列表</div>
      <div class="thead">
        <div class="row bold">
          <div class="col">编号</div>
          <div class="col">姓名</div>
          <div class="col">性别</div>
          <div class="col">年龄</div>
        </div>
      </div>
    </div>
    <div class="tbody">
      <div v-if="students.length>0">
        <div class="row" v-for="student of students" :key="student.id">
          <div class="col">{{ student.id }}</div>
          <div class="col">{{ student.name }}</div>
          <div class="col">{{ student.sex }}</div>
          <div class="col">{{student.age}}</div>
        </div>
      </div>
      <div class="row" v-else >暂无学生数据</div>
    </div>

    <hr/><br><br>

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

    <hr>


  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return {
      msg:"嘞好啊",
      name:"张三",
      birthday:'1999-12-12',
      number:0,
      sex:'男',
      hobbies:[],
      students:[]
    }
  },
  created() {
    this.selectAll()
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
    },
    selectAll(){
      axios.get("/api/students").then(res=>{
        console.log(res.data.data)
        this.students=res.data.data
      })
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

<style>
html,
body {
  font-family: 华文行楷;
  font-size: 20px;
}

.title {
  margin-bottom: 10px;
  font-size: 30px;
  color: #333;
  text-align: center;
}

.row {
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.col {
  border: 1px solid #f0f0f0;
  width: 15%;
  height: 35px;
  text-align: center;
  line-height: 35px;
}

.bold .col {
  background-color: #f1f1f1;
}
</style>

























