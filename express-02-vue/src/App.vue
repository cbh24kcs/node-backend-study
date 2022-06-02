<template>
  <div id="app">
    <button @click="handleGet1">/get1</button>
    <button @click="handleGet1_2">/get1_2</button>
    <button @click="handlePost1">/post1</button>
    <button @click="handlePost2">/post2</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    handleGet1() {
      axios.get("/api/get1?username=张三").then((res) => {
        console.log("请求结果", res.data);
      });
    },
    handleGet1_2() {
      axios
        .get("/api/get1", {
          params: {
            username: "张三",
          },
        })
        .then((res) => {
          console.log("请求结果", res.data);
        });
    },
    handlePost1() {
      axios.post("/api/post1").then((res) => {
        console.log("请求结果", res.data);
      });
    },
    handlePost2() {
      axios
        .post("/api/post2", {
          msg: "啦啦啦",
        })
        .then((res) => {
          console.log("请求结果", res.data);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
