<script setup lang="ts">
import { ref } from 'vue';
import request from '@/utils/axios';
import { AxiosResponse } from 'axios';
type ResponseData<T> = {
  code: number;
  data: T;
  msg: null | string;
};

type Item = {
  id: number;
  name: string;
};
// import { useRoute } from 'vue-router';
// const route = useRoute();
const aa = ref('fasdfasdf');
const getUser = async () => {
  const response = await request.get<any, AxiosResponse<ResponseData<Item>>>('/api/users');
  //   console.log(response);
  aa.value = response.data.data.name;
};
getUser();
</script>

<template>
  <h1>App todoList</h1>
  <div>
    <router-link to="/about">About</router-link>
    |
    <router-link to="/">Home</router-link>
  </div>

  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
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
