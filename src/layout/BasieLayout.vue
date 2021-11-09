<template>
  <div>
    <n-space vertical size="large">
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
        <n-layout>
          <n-layout-header>
            颐和园路
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
          </n-layout-header>
          <n-layout-content content-style="padding: 24px;"><router-view /></n-layout-content>
          <n-layout-footer>成府路</n-layout-footer>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NLayoutSider, NSpace, useMessage, useNotification, NIcon, NSwitch } from 'naive-ui';
import { Moon, SunnySharp } from '@vicons/ionicons5';

type PropsType = {};

export default defineComponent<PropsType>({
  name: 'BasieLayout',
  // props: ['theme', 'changeTheme'],
  // inject: ['theme', 'changeTheme'],
  components: {
    NLayout,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
    NSpace,
    Moon,
    SunnySharp,
    NIcon,
    NSwitch,
  },
  setup() {
    // console.log(theme);
    const theme = inject('theme');
    const changeTheme = inject('changeTheme');
    window.$message = useMessage();
    window.$notification = useNotification();
    return { theme, changeTheme };
  },
});
</script>

<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
