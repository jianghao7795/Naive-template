<template>
	<div>
		{{ aa }}

		<h1>todoList</h1>
		<ul>
			<li v-for="() in lists"></li>
		</ul>

		<div><van-button type="primary">点击</van-button></div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity';

// const aa = 'bb';
const state = reactive({
	lists: [1, 2, 3],
});
import { ref } from 'vue';
const aa = ref(0);
</script>

<style scoped></style>
