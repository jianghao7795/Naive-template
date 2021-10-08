<template>
  <div>
    {{ aa }}
    <h1>todoList</h1>
    <ul>
      <li v-for="item in state.lists" :key="item">{{ item }}</li>
    </ul>

    <div><van-button type="primary" v-on:click="add">点击</van-button></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// const aa = 'bb';
const state = reactive({
  lists: [1, 2, 3],
});

const aa = ref(0);
function add() {
  aa.value++;
  // console.log(aa.value);
}
</script>

<style scoped></style>
