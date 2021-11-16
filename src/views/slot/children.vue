<template>
  <div>
    <slot></slot>
    <hr />
    <slot name="header"></slot>
    <hr />
    <slot name="footer"></slot>
    <hr />
    <slot name="ok" :age="12"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'children',

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
