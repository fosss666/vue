<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <MyList
        :todos="todos"
        :changeDone="changeDone"
        :deleteTodo="deleteTodo"
      />
      <MyFooter
        :todos="todos"
        :changeTodosChecked="changeTodosChecked"
        :clearChecked="clearChecked"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [], //如果暂时还没有设置todos这个存储，则设置为空数组
    };
  },
  methods: {
    //添加todo
    addTodo(todo) {
      console.log("调用addTodo方法", todo);
      this.todos.unshift(todo);
    },
    //更改todo的勾选状态
    changeDone(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //修改集合是否被勾选
    changeTodosChecked(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除被勾选的
    clearChecked() {
      console.log(this.todos);
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
      console.log(this.todos);
    },
  },
  watch: {
    todos: {
      deep: true, //开启深度监视，能监视到对象的子属性的变化
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
