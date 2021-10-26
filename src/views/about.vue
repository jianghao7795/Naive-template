<template>
  <div>{{ aa }}</div>
  <NButton @click="changeNumberAa" type="primary">Count++</NButton>
  <div id="demo">
    Push this button to do something you shouldn't be doing:
    <br />

    <div :class="{ shake: noActivated }">
      <NButton type="primary" @click="noActivated = !noActivated">Click me</NButton>
      <span v-if="noActivated">Oh no!</span>
    </div>
    <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
      <h3>Move your mouse across the screen...</h3>
      <p>x: {{ x }}</p>
    </div>
    <p>{{ firstName }} : {{ lastName }}</p>
    <p>
      FirstName :
      <input type="text" v-model="firstName" />
    </p>
    <p>
      LastName :
      <input type="text" v-model="lastName" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { ref, onBeforeMount, watch } from 'vue';

const aa = ref<number>(0);
const changeNumberAa = (e: MouseEvent) => {
  aa.value++;
  console.log(e);
};

watch(aa, (newAa: number, oldAa: number) => {
  console.log(newAa, oldAa);
  console.log(aa.value);
});

const firstName = ref<string>('');
const lastName = ref<string>('');
watch([firstName, lastName], (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

firstName.value = 'jj';
lastName.value = 'bb';

const noActivated = ref<boolean>(false);
const x = ref<number>(0);

const xCoordinate = (e: MouseEvent) => {
  x.value = e.clientX;
};
onBeforeMount(() => {
  console.log('onBeforeMount');
});
</script>

<style scoped lang="less">
.movearea {
  transition: 0.1s background-color ease;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
