<template>
  <div class="demo">
    <h2>学校名称：{{ name }}}</h2>
    <button @click="show">点我提示学校名称</button>
  </div>
</template>

<script>
export default {
  name: "School", //显示在开发者工具中的标签名称
  data() {
    return {
      name: "尚硅谷",
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
  background-color: rgb(13, 13, 176);
}
</style>