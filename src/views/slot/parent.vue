<template>
  <div>
    123123
    <Children>
      <template v-slot:default>
        <p v-for="item in itemList.list" :key="item">{{ item }}</p>
      </template>
      <template v-slot:header>
        <p>12312555553</p>
      </template>
      <template v-slot:footer>
        <p>12312555553pppppp</p>
      </template>
      <template v-slot:ok="{ age }">{{ age }}</template>
    </Children>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Children from './children.vue';

export default defineComponent({
  name: 'parent',
  components: {
    Children,
  },
  setup() {
    const itemList = reactive({
      list: ['PHP', 'bbs', 'jiba'],
    });
    return {
      itemList,
    };
  },
});
</script>

<style scoped></style>
