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
  console.log(response);
  aa.value = response.data.data.name;
};
getUser();
</script>

<template>
  <h1>App todoList</h1>
  <h2>{{ aa }}</h2>
  <h3><router-link to="/about">About</router-link></h3>
  <h3><router-link to="/">Home</router-link></h3>

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
