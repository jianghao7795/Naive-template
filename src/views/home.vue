<template>
  <div>
    {{ aa }}
    <n-button type="primary" @click="changeCount">count ++</n-button>
    <br />
    <span v-once v-bind:id="dynamicId">Message: {{ msg }}</span>
    <!-- v-once是渲染一次 v-bind-->
    <n-button @click="changeMsg">change msg</n-button>
    <br />
    <p>{{ msg }}</p>
    <HomeComponent v-once :is="msg"></HomeComponent>
  </div>
</template>

<script lang="ts">
import { NButton } from 'naive-ui';
import { ref, defineComponent } from 'vue';
import HomeComponent from '@/views/homeDemo/HomeComponent.vue';
// const is = ref<string>();
// console.log(is);
export default defineComponent({
  name: 'Home',
  components: {
    NButton,
    HomeComponent
  },
  setup() {
    const aa = ref<number>(0);
    const msg = ref<string>('');
    const dynamicId = ref<string>('dynamicId');
    const changeCount = (b: any) => {
      console.log(b);
      aa.value++;
    };

    const changeMsg = () => {
      msg.value = 'wowowowo';
    };

    return {
      aa,
      msg,
      dynamicId,
      changeCount,
      changeMsg
    }
  }
});

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
