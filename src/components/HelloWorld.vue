<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
defineProps({
	msg: {
		type: String,
		required: true,
	},
});

type DState = {
	count: number;
	double: number;
};

// const count = ref(0)
const state: DState = reactive({
	count: 0,
	double: computed(() => state.count * 2),
});

const add = () => {
	state.count++;
	// console.log(state.count)
};
</script>

<template>
	<h1>{{ msg }}</h1>
	<h2>{{ state.count }}</h2>
	<h3>{{ state.double }}</h3>
	<van-button type="primary" @click="add">+count</van-button>
	<van-cell-group>
		<van-cell title="单元格" value="内容"></van-cell>
		<van-cell title="单元格" value="内容" label="描述信息"></van-cell>
	</van-cell-group>
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
