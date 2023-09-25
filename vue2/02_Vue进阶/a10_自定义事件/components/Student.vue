<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="getStudentName">父组件获取学生姓名</button>
    <button @click="unbind">解绑</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    getStudentName() {
      //调用自定义事件
      this.$emit("fosss", this.name);
      this.$emit("demo");
    },
    unbind() {
      // this.$off("fosss")
      //解绑多个
      this.$off(["fosss", "demo"]);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
}
</style>
