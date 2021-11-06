<template>
  <router-view />
</template>

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
.slide-fade-enter {
  opacity: 1;
}
/* 离开 */
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
/* 进入 */
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-fade-enter-active {
  transition: opacity 1s;
}
.slide-fade-leave-active {
  transition: transform 1;
}
/* .slide-fade-enter-active {

  transition: opacity 2s ease;
}
.slide-fade-leave-active {

  transition: opacity 2s ease;
} */
</style>
