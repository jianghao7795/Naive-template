<template>
  <div id="demo">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">bbs toToDo</p>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref<boolean>(false);
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
