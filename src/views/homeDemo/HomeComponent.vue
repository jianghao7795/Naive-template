<template>
  <div>bbs： {{ is }}</div>
  <p>123123123</p>
</template>

<script lang="ts">
type PropsType = {
  is: string;
};
import { defineComponent } from 'vue';

export default defineComponent<PropsType>({
  name: 'HomeComponent',

  setup(props) {
    const { is } = props;

    return {
      is,
    };
  },
});
</script>
