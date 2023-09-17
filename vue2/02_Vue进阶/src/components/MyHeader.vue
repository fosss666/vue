<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  props: ["addTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      //判空
      if (this.title.trim() === "") {
        alert("输入不能为空！！！");
      } else {
        //添加爱好
        const todo = { id: nanoid(), title: this.title, done: false };
        this.addTodo(todo);
        this.title = ""; //清空
      }
    },
  },
};
</script>

<style>
</style>