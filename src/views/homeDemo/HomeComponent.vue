<template>
  <div>bbs： {{ is }}</div>
  <p>123123123</p>
  <p>count: {{ count }}</p>
  <p>sun: {{ sumCount }}</p>
  <div><n-input-number :max="100200000" :min="0" v-model:value="count" :show-button="false" /></div>
  <div>
    String:
    <n-input v-model:value="changeString" />
  </div>
</template>

<script lang="ts">
type PropsType = {
  is: string;
};
import { defineComponent, ref, computed, watchEffect } from 'vue';
import { NButton, NInputNumber, NInput } from 'naive-ui';

export default defineComponent<PropsType>({
  name: 'HomeComponent',
  components: {
    NButton,
    NInputNumber,
    NInput,
  },
  setup(props, context) {
    console.log(context);
    const { is } = props;
    const count = ref<number>(0);
    const sumCount = computed(() => count.value * 2);
    const changeString = ref<string>('');
    const stop = watchEffect(() => {
      console.log('1');
      console.log(count.value); // watch count 传入的 被监控
      console.log(changeString.value);
    });
    stop();
    return {
      is,
      count,
      sumCount,
      changeString,
    };
  },
});
</script>
