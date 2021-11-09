<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-switch :on-update:value="changeTheme" class="dark-theme-switch">
      <template #checked>
        <n-icon size="14" color="#ffd93b">
          <Moon />
        </n-icon>
      </template>
      <template #unchecked>
        <n-icon size="14" color="#ffd93b">
          <SunnySharp />
        </n-icon>
      </template>
    </n-switch>
    <n-message-provider>
      <n-notification-provider>
        <router-view />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NMessageProvider, NNotificationProvider, NConfigProvider, NSwitch, NIcon } from 'naive-ui';
import { darkTheme, zhCN, dateZhCN } from 'naive-ui';
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import { Moon, SunnySharp } from '@vicons/ionicons5';
export default defineComponent({
  name: 'App',
  components: {
    NMessageProvider,
    NNotificationProvider,
    NConfigProvider,
    NSwitch,
    Moon,
    SunnySharp,
    NIcon,
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
