<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import RefReactive from '@/components/RefReactive.vue';
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
	<div>1111</div>
	<img alt="Vue logo" src="@/assets/logo.png" /> -->
	<HelloWorld a="1" style="color: red" :msg="aa"></HelloWorld>
	<RefReactive></RefReactive>
	<div class="app-style">
		<p>123123123</p>
		<van-button type="primary">案件</van-button>
	</div>
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
