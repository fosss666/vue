<template>
  <div class="todo-footer" v-show="listSize">
    <label>
      <input type="checkbox" :checked="isAll" @click="changeChecked" />
    </label>
    <span>
      <span>已完成{{ getFinished }}</span> / 全部{{ listSize }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "changeTodosChecked", "clearChecked"],
  computed: {
    listSize() {
      return this.todos.length;
    },
    getFinished() {
      let i = 0;
      for (let todo of this.todos) {
        if (todo.done) i++;
      }
      return i;
    },
    isAll() {
      return this.getFinished === this.listSize;
    },
  },
  methods: {
    changeChecked(e) {
      console.log("是否全选？", e.target.checked);
      this.changeTodosChecked(e.target.checked);
    },
    clearAll() {
      console.log("清除所有被勾选");
      this.clearChecked();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>