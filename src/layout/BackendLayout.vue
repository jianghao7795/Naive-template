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
    <router-view v-slot="{ Component }">
      <transition :name="slide" mode="out-in">
        <component class="child-view" :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import setup from 'naive-ui/lib/radio/src/use-radio';
import { ref, defineComponent } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
export default defineComponent({
  name: 'BackendLayout',

  setup() {
    const route = useRoute();
    const slide = ref<string>('slide-left');
    // const;
    onBeforeRouteUpdate((to, from) => {
      const toIndex: any = to.meta;
      const fromIndex: any = from.meta;

      slide.value = toIndex.index < fromIndex.index ? 'slide-right' : 'slide-left';
    });
    return {
      slide,
    };
  },
});
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  width: 100vw;
  will-change: transform;
  transition: all 500ms;
}

.slide-right-enter {
  opacity: 1 0.5s;
  transform: translate3d(100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-left-enter {
  opacity: 1 0.5s;
  transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
