<template>
  <div id="app">
    <ul class="todo-main">
      <MyItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :changeDone="changeDone"
      />
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  props: ["todos", "changeDone"],
  components: {
    MyItem,
  },
};
</script>

<style>
</style>