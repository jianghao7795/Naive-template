<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NMessageProvider } from 'naive-ui';
export default defineComponent({
  name: 'App',
  components: {
    NMessageProvider,
  },
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  overflow: hidden;
  width: 100%;
  position: relative;
  min-height: 100vh;
}

.child-view {
  position: absolute;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.88, 0, 0.1, 1);
}
</style>
