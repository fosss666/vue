<template>
  <div class="demo">
    <h2>学生名称：{{ name }}}</h2>
    <button @click="show">点我提示学校名称</button>
  </div>
</template>

<script>
export default {
  name: "Student", //显示在开发者工具中的标签名称
  data() {
    return {
      name: "张三",
    };
  },
  methods: {
    show() {
      alert(this.name);
    },
  },
};
</script>
<style>
.demo {
  background-color: rgb(226, 122, 25);
}
</style>