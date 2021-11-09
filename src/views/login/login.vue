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
          <span><img @click="getImage" style="width: 150; height: 50" :src="image" alt="tus" /></span>
          <n-input type="text" v-model:value="formData.captcha" placeholder="验证码" :maxlength="8" />
        </n-form-item>
        <n-form-item>
          <n-button @click="handleSubmit" class="other" size="large" type="primary">登录</n-button>
        </n-form-item>
      </n-form>
      <n-button @click="notify('info')">信息</n-button>
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
    const formData = reactive({
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
    return {
      formData,
      image,
      logo: '@/assets/head.png',
      getImage,
      handleSubmit: () => {
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
      notify: (type: string) => {
        console.log(type);
        notification.error({
          content: '说点啥呢',
          meta: '想不出来',
        });
      },
      rules: {
        username: {
          required: true,
          message: '请输入用户名！',
          trigger: 'blur',
        },
        password: { required: true, message: '请输入密码！', trigger: 'blur' },
      },
    };
  },
});
</script>

<style lang="less" scoped>
.view-account {
  background-image: url('./src/assets/images/login1.svg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  display: flex;
  height: 100vh;
  overflow: auto;
  &-top {
    padding: 12px 0;
    text-align: center;
    .img {
      width: 80%;
    }
    .text {
      font-size: 16px;
      padding: 12px 0;
      color: #666666;
    }
  }
  &-container {
    padding: 48px 24px;
    max-width: 384px;
    margin: 0 auto;
  }

  &-cont {
    padding: 10px 0;
  }
}
.other {
  width: 100%;
}
@media (min-width: 768px) {
  .view-account {
    background-image: url('./src/assets/images/login1.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }
}
</style>
