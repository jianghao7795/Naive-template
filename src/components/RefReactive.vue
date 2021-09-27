<template>
	<div>ceshi: {{ count }}</div>
	<div><input type="text" ref="root" /></div>
</template>

<script lang="ts" setup>
type DState = {
	count: number
	double: number
}
import { ref, reactive, computed, onMounted } from "vue"
const count = ref(0)
console.log("count ", count.value)
count.value++
console.log("count: ", count.value)

const state: DState = reactive({
	count: 0,
	double: computed(() => state.count * 2),
})

const root = ref(null)
onMounted(() => {
	console.log(root.value)
	// console.log(this.$refs.root)
	const aa = root.value as unknown as HTMLInputElement
	aa.value = "asdfasdf"
})
</script>

<style scoped lang="less"></style>
