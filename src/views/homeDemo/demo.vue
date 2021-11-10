<template>
  <div class="box">父组件</div>
  <no-cont :mytitle="msg" othertitle="别人的标题" @sonclick="sonclick"></no-cont>
</template>

<script lang="ts">
import NoCont from '@/components/NoCont.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo',
  setup() {
    let msg = {
      title: '父组件给子给子组件的数据',
    };
    function sonclick(msss: string) {
      console.log(msss);
    }
    return { msg, sonclick };
  },
  components: {
    NoCont,
  },
});
</script>
