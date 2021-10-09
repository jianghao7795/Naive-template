<template>
  <div>
    <Tabs v-model:active="active" type="card">
      <Tab title="增加">
        <CellGroup inset>
          <Field v-model="todoItem" name="name" label="TODO" placeholder="TODO range" />
        </CellGroup>
        <Button block type="primary" @click="onSubmit">提交</Button>
      </Tab>
      <Tab title="未完成">
        <CellGroup inset>
          <Cell v-for="(item, index) in state.lists" :key="item.name" :value="item.name">
            <template #title>
              <Checkbox shape="square" v-model="item.status" @change="(checked: boolean) => changeStatus(checked, index, 1)" />
            </template>
          </Cell>
        </CellGroup>
        <div style="margin-top: 15px"><Button type="primary" block size="small" v-on:click="addFinish">完成</Button></div>
      </Tab>
      <Tab title="已完成">
        <CellGroup inset>
          <Cell v-for="(item, index) in state.finishLists" :key="item.name" :value="item.name">
            <template #title>
              <Checkbox shape="square" v-model="item.status" @change="(checked: boolean) => changeStatus(checked, index, 2)" />
            </template>
          </Cell>
        </CellGroup>
        <div style="margin-top: 15px"><Button type="primary" block size="small" v-on:click="deleteTodo">删除</Button></div>
      </Tab>
      <Tab title="已删除">
        <CellGroup inset>
          <Cell v-for="(item, index) in state.deleteLists" :key="item.name" :value="item.name">
            <template #title>
              <Checkbox shape="square" v-model="item.status" @change="(checked: boolean) => changeStatus(checked, index, 3)" />
            </template>
          </Cell>
        </CellGroup>
        <div style="margin-top: 15px; display: flex; justify-content: space-around; align-items: center">
          <Button type="primary" size="small" v-on:click="deleteTodo">恢复</Button>
          <Button type="primary" size="small" v-on:click="deleteTodo">永久删除</Button>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
type DState = {
  lists: Item[];
  finishLists: Item[];
  deleteLists: Item[];
};
type Item = {
  status: boolean;
  name: string;
};
import { ref, reactive } from 'vue';
import { Cell, CellGroup, Tab, Tabs, Button, Checkbox, Field, Toast } from 'vant';

const active = ref(0);
const todoItem = ref('');

// const aa = 'bb';
const state: DState = reactive({
  lists: [],
  finishLists: [],
  deleteLists: [],
});

const changeStatus = (checked: boolean, index: number, type: 1 | 2 | 3) => {
  if (type === 1) {
    state.lists[index].status = checked;
  }
  if (type === 2) {
    state.finishLists[index].status = checked;
  }
  if (type === 3) {
    state.deleteLists[index].status = checked;
  }
};

const addFinish = () => {
  const finishList = state.lists.filter((item) => item.status);
  const lists = state.lists.filter((item) => !item.status);
  const finishLists = finishList.map((item) => ({ ...item, status: false }));
  state.finishLists = finishLists;
  state.lists = lists;
};

const deleteTodo = () => {
  const deleteList = state.finishLists.filter((item) => item.status);
  const lists = state.finishLists.filter((item) => !item.status);
  const finishLists = deleteList.map((item) => ({ ...item, status: false }));
  state.deleteLists = finishLists;
  state.finishLists = lists;
};

const onSubmit = () => {
  if (todoItem.value === '') {
    Toast.fail('请输入TODO');
    return;
  }
  state.lists.push({ name: todoItem.value, status: false });
  todoItem.value = '';
  Toast.success('成功添加TODO');
};
</script>

<style scoped></style>
