<template>
  <div>测试: {{ count }}</div>
  <div><input type="text" ref="root" /></div>
  <NButton>tijiao</NButton>
</template>

<script lang="ts" setup>
type DState = {
  count: number;
  double: number;
};
import { computed, onMounted, reactive, ref } from 'vue';
import { NButton } from 'naive-ui';

const count = ref(0);
console.log('count ', count.value);
count.value++;
console.log('count: ', count.value);

const state: DState = reactive({
  count: 0,
  double: computed(() => state.count * 2),
});

const root = ref(null);
onMounted(() => {
  console.log(root.value);

  // console.log(this.$refs.root)
  const aa = root.value as unknown as HTMLInputElement;
  aa.value = 'asdfasdf';
});
</script>

<style scoped></style>
