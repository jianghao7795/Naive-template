<script setup lang="ts">
import { ref } from 'vue';
const getUser = async () => {
	const response = await fetch('/api/users');
	const res = response.json();
	console.log(res.then((item) => console.log(item)));
};
getUser();
const aa = ref('fasdfasdf');
</script>

<template>
	<h1>App todoList</h1>
	<!-- 路由出口 -->
	<!-- 路由匹配到的组件将渲染在这里 -->
	<router-view></router-view>
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
