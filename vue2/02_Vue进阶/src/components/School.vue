<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">父组件获取学校名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ['getSchoolNameProp'],
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      // console.log(this.name)
      this.getSchoolNameProp(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>