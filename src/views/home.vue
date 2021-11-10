<template>
  <div>
    {{ aa }}
    <n-button type="primary" @click="changeCount">count ++</n-button>
    <br />
    <p>显示: {{ user }}</p>
    <p>show: {{ slide }}</p>
    <span v-once v-bind:id="dynamicId">Message: {{ message }}</span>
    <!-- v-once是渲染一次 v-bind-->
    <n-button @click="changeMsg">change msg</n-button>
    <br />
    <p>{{ message }}</p>
    <HomeComponent :is="msg"></HomeComponent>

    <demo :app="msg"></demo>
  </div>
</template>

<script lang="ts">
import { NButton } from 'naive-ui';
import { ref, defineComponent, onMounted } from 'vue';
import HomeComponent from '@/views/homeDemo/HomeComponent.vue';
import Transition from '@/views/transition.vue';
// import axios from '@/utils/axios';
// import { AxiosResponse } from 'axios';

type Menu = {
  id: number;
  parent_id: number;
  name: string;
  icon: string;
};

type MenusType = {
  data: Menu[];
  code: number;
  msg: string;
};

export default defineComponent({
  name: 'Home',
  components: {
    NButton,
    HomeComponent,
    demo: Transition,
  },
  inject: ['user', 'slide'], // 父级的provide 子级的 inject 接收
  setup() {
    const aa = ref<number>(0);
    const message = ref<string>('');
    const dynamicId = ref<string>('dynamicId');
    const msg = ref<string>('');
    // const menusList = ref<Menu[]>([]);
    // const notification = useNotification();
    onMounted(() => {
      // axios.get<{}, AxiosResponse<MenusType>>('/api/v1/menus-all').then((response) => {
      //   // console.log(response);
      //   const { data, code, msg } = response.data;
      //   // console.log(data);
      //   if (code === 200) {
      //     menusList.value = data;
      //     return;
      //   }
      //
      //   notification.error({
      //     title: `请求菜单错误：${code}`,
      //     description: msg,
      //     duration: 10000,
      //   });
      // });
    });
    const changeCount = (b: any) => {
      console.log(b);
      aa.value++;
    };

    const changeMsg = () => {
      message.value = 'wowowowo';
    };

    return {
      msg,
      aa,
      message,
      dynamicId,
      changeCount,
      changeMsg,
    };
  },
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
