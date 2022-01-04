<template>
  <div class="container">
    <div class="form-warp">
      <n-form
        class="sign-in-form errorCss"
        :model="formInline"
        :rules="rules"
        label-placement="right"
        size="small"
        ref="formRef"
        :label-width="220"
        :style="{
          maxWidth: '640px',
        }"
        :show-label="false"
      >
        <h2 class="form-title">登录</h2>
        <n-form-item path="username" class="errorCss">
          <n-input
            placeholder
            size="small"
            v-model:value="formInline.username"
            id="username"
            style="
              min-width: 300px;
              outline: none;
              padding: 12px 30px;
              line-height: 1;
              font-size: 16px;
              border-radius: 60px;
              color: #333;
              background-color: #6267f513;
              border: none;
            "
          />
        </n-form-item>
        <n-form-item path="password" global>
          <n-input
            id="password"
            placeholder
            type="password"
            size="small"
            v-model:value="formInline.password"
            style="
              min-width: 300px;
              outline: none;
              padding: 12px 30px;
              line-height: 1;
              font-size: 16px;
              border-radius: 60px;
              color: #333;
              background-color: #6267f513;
              border: none;
            "
          />
        </n-form-item>

        <!-- <div class="submit-btn" @click="handleSubmit">立即登录</div> -->
        <n-form-item>
          <n-button
            class="submit-btn"
            strong
            secondary
            round
            attr-type="button"
            @click="handleSubmit"
            :loading="loading"
          >立即登录</n-button>
        </n-form-item>
      </n-form>
      <!-- <form class="sign-up-form">
        <h2 class="form-title">注册</h2>
        <input placeholder="用户名" />
        <input type="password" placeholder="密码" />
        <div class="submit-btn">立即注册</div>
      </form>-->
    </div>
    <div class="desc-warp">
      <div class="desc-warp-item sign-up-desc">
        <!-- <div class="content">
          <button id="sign-up-btn">注册</button>
        </div>-->
        <img src="@/assets/images/log.svg" alt="login" />
      </div>
      <div class="desc-warp-item sign-in-desc">
        <div class="content">
          <button id="sign-in-btn">登录</button>
        </div>
        <img src="@/assets/images/register.svg" alt="login" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import userLogin from "@/api/login";

export default defineComponent({
  setup() {
    interface FormState {
      username: string;
      password: string;
    }

    const formRef = ref();
    const message = useMessage();
    const loading = ref(false);
    const autoLogin = ref(true);
    const formInline = reactive<FormState>({
      username: "",
      password: "",
    });
    const rules = {
      username: { required: true, message: "", trigger: ["input", "blur"] },
      password: { required: true, message: "", trigger: ["input", "blur"] },
    };
    // const userStore = useUserStore();
    const router = useRouter();
    // const route = useRoute();
    const handleSubmit = (e: MouseEvent) => {
      loading.value = true;
      e.preventDefault();
      formRef.value.validate(async (errors: any) => {
        console.log(errors);
        if (!errors) {
          userLogin.login(formInline).then(res => {
            loading.value = false;
            if (res && res?.data?.code && res?.data?.code === 200) {
              localStorage.setItem('token', res.data.data.token);
              router.push('/backend');
            } else {
              message.error('账号密码错误! 请重试');
            }
          });
        }
      });
    };

    return {
      size: ref("medium"),
      // reactive,
      // ref,
      // useRoute,
      // useRouter,
      // useMessage,
      formRef,
      // message,
      loading,
      // autoLogin,
      formInline,
      rules,
      // router,
      handleSubmit,
      // onAuthCode,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("@/static/style.css");

#username::placeholder {
  color: #cccc;
}
.errorCss {
  .n-form-item-feedback-wrapper {
    .n-form-item-feedback {
      margin-left: 42px;
    }
  }
}
</style>
