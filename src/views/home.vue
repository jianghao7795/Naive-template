<template>
  <div>
    {{ aa }}
    <NButton type="primary" @click="changeCount">count ++</NButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton } from 'naive-ui';
const aa = ref<number>(0);
const changeCount = (b: any) => {
  console.log(b);
};
// type DState = {
//   lists: Item[];
//   finishLists: Item[];
//   deleteLists: Item[];
// };
// type Item = {
//   status: boolean;
//   name: string;
// };
// import { ref, reactive } from 'vue';
// // import { Cell, CellGroup, Tab, Tabs, Button, Checkbox, Field, Toast } from 'vant';

// const active = ref(0);
// const todoItem = ref('');

// // const aa = 'bb';
// const state: DState = reactive({
//   lists: [],
//   finishLists: [],
//   deleteLists: [],
// });

// const changeStatus = (checked: boolean, index: number, type: 1 | 2 | 3) => {
//   if (type === 1) {
//     state.lists[index].status = checked;
//   }
//   if (type === 2) {
//     state.finishLists[index].status = checked;
//   }
//   if (type === 3) {
//     state.deleteLists[index].status = checked;
//   }
// };

// const addFinish = () => {
//   const finishList = state.lists.filter((item) => item.status);
//   const lists = state.lists.filter((item) => !item.status);
//   const finishLists = finishList.map((item) => ({ ...item, status: false }));
//   state.finishLists = finishLists;
//   state.lists = lists;
// };

// const deleteTodo = () => {
//   const deleteList = state.finishLists.filter((item) => item.status);
//   const lists = state.finishLists.filter((item) => !item.status);
//   const finishLists = deleteList.map((item) => ({ ...item, status: false }));
//   state.deleteLists = finishLists;
//   state.finishLists = lists;
// };

// const permanentDeleteTodo = () => {
//   const deleteList = state.deleteLists.filter((item) => !item.status);
//   state.deleteLists = deleteList;
// };

// const onSubmit = () => {
//   if (todoItem.value === '') {
//     Toast.fail('请输入TODO');
//     return;
//   }
//   state.lists.push({ name: todoItem.value, status: false });
//   todoItem.value = '';
//   Toast.success('成功添加TODO');
// };
</script>

<style scoped></style>
