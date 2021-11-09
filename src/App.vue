<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <n-notification-provider>
        <router-view :theme="theme" :changeTheme="changeTheme" />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NMessageProvider, NNotificationProvider, NConfigProvider, NSwitch } from 'naive-ui';
import { darkTheme, zhCN, dateZhCN } from 'naive-ui';
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';
import { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider';

declare global {
  interface Window {
    $message: MessageApiInjection;
    $notification: NotificationApiInjection;
  }
}
export default defineComponent({
  name: 'App',
  components: {
    NMessageProvider,
    NNotificationProvider,
    NConfigProvider,
    NSwitch,
  },
  provide() {
    return {
      theme: this.theme,
      changeTheme: this.changeTheme,
    };
  },
  setup() {
    const theme = ref<BuiltInGlobalTheme | null>(null);

    const changeTheme = (e: boolean) => {
      // console.log(e);
      if (e) {
        theme.value = darkTheme;
      } else {
        theme.value = null;
      }
    };
    return {
      // darkTheme,
      zhCN,
      dateZhCN,
      theme,
      changeTheme,
    };
  },
});
</script>

<style>
@import './styles/global.less';
</style>
