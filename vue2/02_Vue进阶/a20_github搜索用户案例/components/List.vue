<template>
  <div class="row">
    <!-- 数据 -->
    <div v-show="users" class="card" v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}}</p>
    </div>
    <!-- 欢迎 -->
    <h1 v-show="info.isFirst">Welcome!!!</h1>
    <!-- 加载中 -->
    <h1 v-show="info.isLoading">加载中。。。</h1>
    <!-- 错误信息 -->
    <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      users: [],
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
      },
    };
  },
  methods: {
    // getUsers(users) {
    //   this.users = users;
    // },
  },
  mounted() {
    // this.$bus.$on("getUsers", this.getUsers);
    this.$bus.$on("getUsers", (users,info) => {
      console.log("List收到users", users);
      this.users = users;
      this.info=info
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>