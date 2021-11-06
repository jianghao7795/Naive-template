<template>
  <div>bbs： {{ is }}</div>
  <p>123123123</p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// 相当于setup(props) 的props
defineProps({
  is: String,
});
</script>
