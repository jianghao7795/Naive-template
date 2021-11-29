<template>
  <div class="view-account">
    <div class="view-account-container">
      <div class="view-account-top">
        <h1>登录</h1>
      </div>
      <n-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="160"
        :style="{
          maxWidth: '720px',
        }"
      >
        <n-form-item>
          <n-input v-model:value="formData.username" type="text" placeholder="Please Inputs" />
        </n-form-item>
        <n-form-item>
          <n-input type="password" v-model:value="formData.password" placeholder="密码" :maxlength="8" />
        </n-form-item>
        <n-form-item>
          <span><img @click="getImage" style="width: 150px; height: 50px" :src="image" alt="tus" /></span>
          <n-input type="text" v-model:value="formData.captcha" placeholder="验证码" :maxlength="8" />
        </n-form-item>
        <n-form-item>
          <n-button @click="handleSubmit" class="other" size="large" type="primary">登录</n-button>
        </n-form-item>
      </n-form>
      <!-- <n-form :model="formData" :rules="rules" ref="formRef">
        <n-form-item path="user.name">
          <n-input v-model:value="formData.username" placeholder="输入姓名" />
        </n-form-item>
        <n-form-item path="phone">
          <n-input placeholder="密码" type="password" v-model:value="formData.password" />
        </n-form-item>
        <n-form-item>
          <n-button @click="handleValidateClick" attr-type="button">验证</n-button>
        </n-form-item>
      </n-form>
      <n-button @click="notify('info')">信息</n-button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { PersonOutline, LockClosedOutline, LogoGithub, LogoFacebook } from '@vicons/ionicons5';
import { NInput, NButton, NForm, NFormItem, useNotification } from 'naive-ui';
import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';

type ImageType = {
  code: number;
  data: {
    id: string;
    picPath: string;
  };
  msg: string;
};

type LoginType = {
  code: number;
  data: {
    token: string;
  };
  msg: string;
};

export default defineComponent({
  name: 'Login',
  components: {
    PersonOutline,
    LockClosedOutline,
    LogoGithub,
    LogoFacebook,
    NInput,
    NButton,
    NForm,
    NFormItem,
  },
  setup() {
    const notification = useNotification();
    const router = useRouter();
    const formData = ref({
      username: '',
      password: '',
      captcha: '',
    });
    const image = ref<string>();
    const getImage = () => {
      axios.get<{}, AxiosResponse<ImageType>>(`/user/captcha`).then((resp: AxiosResponse<ImageType>) => {
        const { code, data, msg } = resp.data;
        if (code === 200) {
          image.value = data.picPath;
          return;
        }

        notification.error({
          title: '请求失败' + code,
          content: '',
          meta: msg,
        });
      });
    };
    onMounted(() => {
      getImage();
    });
    const formRef = ref<HTMLFormElement>();
    return {
      formRef,
      formData,
      image,
      logo: '@/assets/head.png',
      getImage,
      handleSubmit: () => {
        // console.log(formRef.value);
        formRef.value?.validate((err: any) => {
          console.log(err);
        });
        // router.replace('/dashboard/control');
        axios.post<typeof formData, AxiosResponse<LoginType>>('/user/login', { ...formData }).then((resp) => {
          // console.log(resp);
          const {
            code,
            data: { token },
            msg,
          } = resp.data;
          if (code === 200) {
            localStorage.setItem('token', token);
            router.push({
              path: '/backend/home',
            });
            return;
          }

          notification.error({
            content: '登录失败',
            meta: msg,
          });
        });
      },
      // notify: (type: string) => {
      //   console.log(type);
      //   notification.error({
      //     content: '说点啥呢',
      //     meta: '想不出来',
      //   });
      // },
      rules: {
        username: {
          required: true,
          message: '请输入用户名',
          trigger: ['input'],
        },
        password: {
          required: true,
          message: '请输入密码',
          trigger: ['input'],
        },
      },
      // handleValidateClick() {
      //   console.log('123123');
      //   formRef.value?.validate((errors) => {
      //     console.log(errors);
      //     if (!errors) {
      //       message.success('Valid');
      //     } else {
      //       console.log(errors);
      //       message.error('Invalid');
      //     }
      //   });
      // },
    };
  },
});
</script>

<style lang="less" scoped>
@import 'src/styles/login.less';
</style>
