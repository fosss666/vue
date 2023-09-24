<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="getStudentName">父组件获取学生姓名</button>
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
      this.$emit('fosss',this.name)
    },
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
}
</style>
