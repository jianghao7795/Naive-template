<template>
  <div class="container">
    <div class="form-warp">
      <n-form
        class="sign-in-form"
        :model="formInline"
        :rules="rules"
        label-placement="right"
        size="small"
        ref="formRef"
        :label-width="220"
        :style="{
          maxWidth: '640px',
        }"
      >
        <h2 class="form-title">登录</h2>
        <n-form-item path="username">
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
        <n-form-item path="password">
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

        <div class="submit-btn" @click="handleSubmit">立即登录</div>
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
import { useRoute, useRouter } from "vue-router";
import { useMessage } from "naive-ui";

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
      username: { required: true, message: "请输入用户名", trigger: ["input", "blur"] },
      password: { required: true, message: "请输入密码", trigger: ["input", "blur"] },
    };
    // const userStore = useUserStore();
    const router = useRouter();
    // const route = useRoute();
    const handleSubmit = (e: MouseEvent) => {
      const { username, password } = formInline;
      console.log(username, password);
      e.preventDefault();
      formRef.value.value.validate(async (errors: any) => {
        console.log(errors);
        if (!errors) {
          // const { username, password } = formInline;
          // message.loading("登录中...");
          // loading.value = true;
          // const params: FormState = {
          //   username,
          //   password,
          // };
          // router.push("/backend");
          // const { code, message: msg } = await userStore.login(params);
          // if (code == ResultEnum.SUCCESS) {
          //   const toPath = decodeURIComponent((route.query?.redirect || "/") as string);
          //   message.success("登录成功！");
          //   router.replace(toPath).then((_) => {
          //     if (route.name == "login") {
          //       router.replace("/");
          //     }
          //   });
          // } else {
          //   message.info(msg || "登录失败");
          // }
        } else {
          message.error("请填写完整信息，并且进行验证码校验");
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
      // loading,
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
</style>
