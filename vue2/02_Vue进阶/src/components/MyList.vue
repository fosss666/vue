<template>
  <div id="app">
    <ul class="todo-main">
      <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  data() {
    return {
      todos: [
        { id: "001", title: "吃饭", done: true },
        { id: "002", title: "睡觉", done: false },
        { id: "003", title: "打豆豆", done: true },
      ],
    };
  },
};
</script>

<style>
</style>