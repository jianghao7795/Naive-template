<template>
  <div class="box">父组件</div>
  <no-cont :mytitle="msg" othertitle="别人的标题" @sonclick="sonclick"></no-cont>
  <p>{{ count }}</p>
  <n-button @click="changeCount">点击</n-button>
  <p>{{ reactiveCount }}</p>
  <n-button type="primary" @click="changeReactiveCount">点击changeReactiveCount</n-button>
  <div>
    <div>
      <n-input placeholder="姓" v-model:value="user.xing"></n-input>
      <n-input placeholder="名" v-model:value="user.ming"></n-input>
    </div>
    <div>
      <n-input placeholder="姓名" v-model:value="username"></n-input>
    </div>
  </div>
</template>

<script lang="ts">
import NoCont from '@/components/NoCont.vue';
import { defineComponent, ref, reactive, computed } from 'vue';
import { NButton, NInput } from 'naive-ui';

export default defineComponent({
  name: 'demo',
  setup() {
    const msg = reactive({
      title: '父组件给子给子组件的数据',
    });
    const count = ref<number>(0);
    const reactiveCount = reactive({
      name: 'wuwuwuwuwuuw',
      title: 'heheheehehehehe',
    });
    const sonclick = (msss: string) => {
      console.log(msss);
      msg.title = '55555';
    };

    const changeCount = () => {
      count.value++;
    };
    const changeReactiveCount = () => {
      reactiveCount.name = 'jijijijiji';
      reactiveCount.title = 'bababa';
    };

    const user = reactive({
      xing: 'wo',
      ming: 'asfasf',
    });

    const username = computed((a, b) => {
      console.log(a, b);
      return user.xing + '_' + user.ming;
    });

    // const username = computed({
    //   get: () => {
    //     return `${user.xing}_${user.ming}`;
    //   },
    //   set: (value: string) => {
    //     console.log(value);
    //     const names = value.split('_');
    //     user.xing = names[0];
    //     user.ming = names[1];
    //   },
    // });
    return { msg, sonclick, count, reactiveCount, changeCount, changeReactiveCount, user, username };
  },
  components: {
    NoCont,
    NButton,
    NInput,
  },
});
</script>
