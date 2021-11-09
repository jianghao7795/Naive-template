<template>
  <n-message-provider>
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NMessageProvider, NNotificationProvider } from 'naive-ui';
export default defineComponent({
  name: 'App',
  components: {
    NMessageProvider,
    NNotificationProvider,
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
