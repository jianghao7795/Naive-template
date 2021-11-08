<template>
  <div id="demo">
    <p>{{ show ? '1' : '2' }}</p>
    <n-button type="primary" @click="show = !show">Toggle</n-button>
    <p>1: {{ app }}</p>
    <n-button type="warning">点击</n-button>
  </div>
</template>

<script lang="ts">
type PropsType = {
  app: string;
};
import { ref, defineComponent } from 'vue';
import { NButton } from 'naive-ui';

export default defineComponent<PropsType>({
  name: 'transition',
  components: {
    NButton,
  },
  setup(props) {
    const show = ref<boolean>(false);
    const { app } = props;
    return {
      show,
      app,
    };
  },
});
</script>
<style lang="less"></style>
