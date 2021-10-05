<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import RefReactive from './components/RefReactive.vue';
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
	<h1>App</h1>
	<p>
		<!--使用 router-link 组件进行导航 -->
		<!--通过传递 `to` 来指定链接 -->
		<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
		<router-link to="/">Go to Home</router-link>
		<router-link to="/about">Go to About</router-link>
	</p>
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
