<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { NButton } from 'naive-ui';
import { onBeforeMount, ref, watch, defineComponent } from 'vue';

export default defineComponent<{}>({
  name: 'about',
  components: {
    NButton,
  },
  setup() {
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

    return {
      aa,
      changeNumberAa,
      firstName,
      lastName,
      noActivated,
      x,
      xCoordinate,
    };
  },
});
</script>

<style scoped lang="less"></style>
