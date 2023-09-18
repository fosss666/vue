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
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "changeDone"],
  methods: {
    //更改数据的勾选状态
    changeChecked(id) {
      this.changeDone(id);
    },
  },
};
</script>

<style>
</style>