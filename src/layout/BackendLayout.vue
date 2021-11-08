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
        <transition
            name="fade-slide"
            mode="out-in"
            appear
        >
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
// import { useRoute, onBeforeRouteUpdate } from 'vue-router';
export default defineComponent({
  name: 'BackendLayout',
  setup() {
    // const route = useRoute();
    const slide = ref<string>('slide-left');
    // const;
    // onBeforeRouteUpdate((to, from) => {
    //   const toIndex: any = to.meta;
    //   const fromIndex: any = from.meta;
    //
    //   slide.value = toIndex.index < fromIndex.index ? 'slide-right' : 'slide-left';
    // });
    return {
      slide
    };
  },
});
</script>

<style lang="less">


</style>
