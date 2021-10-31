<template>
  <div>
    <div>
      <router-link to="/backend/home">Home</router-link>
      |
      <router-link to="/backend/about">About</router-link>
    </div>
    <router-view class="child-view"></router-view>
  </div>
</template>
