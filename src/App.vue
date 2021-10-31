<template>
  <h1>App todoList</h1>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component class="child-view" :is="Component" />
    </transition>
  </router-view>
</template>
