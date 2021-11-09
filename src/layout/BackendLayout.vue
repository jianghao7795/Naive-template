<template>
  <div>
    <div>
      <router-link to="/backend/home">Home</router-link>
      |
      <router-link to="/backend/about">About</router-link>
    </div>
    <!-- <transition appear name="slide-fade" mode="out-in">
      <keep-alive><router-view class="child-view"></router-view></keep-alive>
    </transition> -->
    <!--    <router-view v-slot="{ Component }">-->
    <!--      <transition appear name="slide-fade" mode="out-in">-->
    <!--        <component class="child-view" :is="Component" />-->
    <!--      </transition>-->
    <!--    </router-view>-->
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
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useMessage, useNotification } from 'naive-ui';

export default defineComponent({
  name: 'BackendLayout',
  provide() {
    return {
      user: 'John Doc',
      slide: this.slide,
    };
  },
  setup() {
    const slide = ref<string>('slide-left');
    window.$message = useMessage();
    window.$notification = useNotification();
    return {
      slide,
    };
  },
});
</script>

<style lang="less"></style>
