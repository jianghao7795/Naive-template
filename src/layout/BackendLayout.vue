<template>
  <div>
    <div>
      <router-link to="/backend/home">Home</router-link>
      |
      <router-link to="/backend/about">About</router-link>
    </div>
    <transition appear name="slide-fade">
      <keep-alive><router-view class="child-view"></router-view></keep-alive>
    </transition>
  </div>
</template>
