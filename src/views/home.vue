<template>
	<div>
		{{ aa }}
		<div><van-button type="primary">点击</van-button></div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const aa = ref(0);
</script>

<style scoped></style>
