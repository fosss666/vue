<template>
  <div>
    <h1 class="app">{{ msg }}</h1>
    <!-- 通过向子组件的props传递函数来实现数据传递 -->
    <School :getSchoolNameProp="getSchoolNameProp" />
    <!-- 通过自定义事件 v-on/@  实现 -->
    <Student @fosss="getStudentNameShijian" @demo="demo"/>
    <!-- 第二种实现方式：通过自定义事件 ref实现 -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods: {
    getSchoolNameProp(name) {
      console.log("学校名字：", name);
    },
    getStudentNameShijian(name) {
      console.log("学生名字：", name);
    },
    demo() {
      console.log("demo被调用了");
    },
  },
  //自定义事件第二种实现方式
  // mounted() {
  //   this.$refs.student.$on('fosss',this.getStudentNameShijian)
  // },
};
</script>

<style scoped>
.app {
  background-color: rgba(7, 223, 90, 0.844);
}
</style>
