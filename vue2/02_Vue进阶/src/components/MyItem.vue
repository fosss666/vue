<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="changeChecked(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteChecked(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    //更改数据的勾选状态
    changeChecked(id) {
      //调用事件
      this.$bus.$emit("changeDone", id);
    },
    //删除指定todo
    deleteChecked(id) {
      if (confirm("确定要删除吗？")) {
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li :hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>