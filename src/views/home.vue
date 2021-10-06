<template>
	<div>
		{{ aa }}
		<h1>todoList</h1>
		<ul>
			<li v-for="() in lists"></li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity';

const aa = 'bb';
const state = reactive({
	lists: [1, 2, 3],
});
</script>

<style scoped></style>
