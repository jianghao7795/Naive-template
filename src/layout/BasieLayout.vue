<template>
  <div>
    <n-space vertical size="large">
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
        <n-layout>
          <n-layout-header>
            颐和园路
            <n-switch :on-update:value="changeTheme" :default-value="!!theme" class="dark-theme-switch">
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
          <n-layout-content content-style="padding: 24px;">
            <RouterView>
              <template v-slot="{ Component, route }">
                <transition name="fade-slide" mode="out-in" appear>
                  <keep-alive>
                    <component :is="Component" :key="route.fullPath" />
                  </keep-alive>
                  <!--          <component v-else :is="Component" :key="route.fullPath" />-->
                </transition>
              </template>
            </RouterView>
          </n-layout-content>
          <n-layout-footer>成府路</n-layout-footer>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';
import { NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent, NLayoutSider, NSpace, useMessage, useNotification, NIcon, NSwitch } from 'naive-ui';
import { Moon, SunnySharp } from '@vicons/ionicons5';
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import menus from '@/api/menus';

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
    onMounted(() => {
      menus.getList().then((response) => {
        console.log(response);
        if (response.code === 200) {
          const { code, data, msg } = response;
          console.log(code, data, msg);
        }
      });
    });
    const theme = inject<BuiltInGlobalTheme | null>('theme');
    const changeTheme = inject<(e: boolean) => void>('changeTheme');
    window.$message = useMessage();
    window.$notification = useNotification();
    return { theme, changeTheme };
  },
});
</script>

<style scoped lang="less">
@import './src/styles/layout.less';
</style>
