<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("getUsers", "", {
        isFrist: false,
        isLoading: true,
        errorMsg: "",
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (res) => {
          //   console.log(res.data.items);
          this.$bus.$emit("getUsers", res.data.items, {
            isFrist: false,
            isLoading: false,
            errorMsg: "",
          });
        },
        (error) => {
          console.error(error.data);
          this.$bus.$emit("getUsers", "", {
            isFrist: false,
            isLoading: false,
            errorMsg: error.data,
          });
        }
      );
    },
  },
};
</script>

<style>
</style>