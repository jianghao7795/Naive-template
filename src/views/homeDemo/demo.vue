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
  <div><n-input v-model:value="debounceCurrValue" /></div>
  <p>{{ debounceValue }}</p>
  <p>{{ data }}</p>
  <img :src="data?.data?.picPath" />
  <p>{{ loading }}</p>
</template>

<script lang="ts">
import NoCont from '@/components/NoCont.vue';
import { defineComponent, ref, reactive, computed, onMounted, watchEffect } from 'vue';
import { NButton, NInput } from 'naive-ui';
import { useDebounce, useRequest } from 'v3hooks';
// import request from '@/hooks/useRequest/request';
import Captcha from '@/api/captcha';
import type { Captcha as CaptchaType } from '@/api/captcha';
// import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'demo',
  setup() {
    // const captchaData = ref<CaptchaType>();
    const debounceCurrValue = ref<string>('');
    const debounceValue = useDebounce(debounceCurrValue, 1000);
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

    const username = computed(() => {
      // console.log(a, b);
      return user.xing + '_' + user.ming;
    });
    onMounted(() => {
      // const response = Captcha.captcha();
      // console.log(response);
      // const { data, loading } = useRequest<CaptchaType>(() => {
      //   return Captcha.captcha().then((res) => res.data);
      // });
      // // captchaData = data;
      // console.log(data, loading.value);
    });

    const { data, loading, run } = useRequest<CaptchaType>(
      () => {
        return Captcha.captcha();
      },
      {
        manual: true,
      },
    );
    // captchaData = data;
    // captchaData.value = data;
    // console.log((captchaData.value = data.value));
    watchEffect(() => {
      // const { value } = data;
      // console.log(data.value, loading.value);
      // if (data.value) {
      //   captchaData.value = data.value;
      // }
      if (loading.value) {
        console.log(loading.value);
        // run();
      } else {
        console.log(loading.value);
      }
    });
    // run();
    // const { data, loading } = request();
    //
    // console.log(data.value, loading);
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
    return { msg, sonclick, count, reactiveCount, changeCount, changeReactiveCount, user, username, debounceValue, debounceCurrValue, data, loading };
  },
  components: {
    NoCont,
    // data,
    NButton,
    NInput,
  },
});
</script>
