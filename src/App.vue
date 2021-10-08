<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const aa = ref('fasdfasdf');
const getUser = async () => {
  const response = await fetch('/api/users');
  const res = response.json();
  res.then((item) => console.log(item));
};
getUser();
</script>

<template>
  <h1>App todoList</h1>
  <h2>{{ aa }}</h2>
  <h3><router-link to="/about">About</router-link></h3>
  <h3><router-link to="/">Home</router-link></h3>
  <!-- <transition mode="out-in">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
