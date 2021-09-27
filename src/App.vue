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
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld :msg="aa"></HelloWorld>
	<RefReactive></RefReactive>
	<div class="app-style">
		<p>123123123</p>
		<van-button type="primary">案件</van-button>
	</div>
</template>

<style lang="less">
.app-style {
	:global {
		color: #fff;
	}
}

// .my-button {
//   width: 200px;
// }

/** 覆盖 Button 内部子元素的样式 */
// .my-button .van-button__text {
//   color: red;
// }

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
