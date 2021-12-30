<template>
  <div class="container">
    <div class="form-warp">
      <form class="sign-in-form" :ref="formRef">
        <h2 class="form-title">登录</h2>
        <input placeholder="用户名" v-model="formInline.username" />
        <input type="password" placeholder="密码" v-model="formInline.password" />
        <div class="submit-btn" @click="handleSubmit">立即登录</div>
      </form>
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

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { useUserStore } from '@/store/modules/user';
import { useMessage } from "naive-ui";
// import { ResultEnum } from '@/enums/httpEnum';
// import logo from "@/assets/images/logo.png";
interface FormState {
  username: string;
  password: string;
}
const formRef = ref();
const message = useMessage();
const loading = ref(false);
const autoLogin = ref(true);
const formInline = reactive({
  username: "admin",
  password: "123456",
  isCaptcha: false,
});
const rules = {
  username: { required: true, message: "请输入用户名", trigger: "blur" },
  password: { required: true, message: "请输入密码", trigger: "blur" },
  isCaptcha: {
    required: true,
    type: "boolean",
    trigger: "change",
    message: "请点击按钮进行验证码校验",
    validator: (_: any, value: boolean) => value === true,
  },
};
// const userStore = useUserStore();
const router = useRouter();
// const route = useRoute();
const handleSubmit = (e: MouseEvent) => {
  const { username, password } = formInline;
  console.log(username, password);
  e.preventDefault();
  formRef.value.validate(async (errors: any) => {
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
const onAuthCode = () => {
  formInline.isCaptcha = true;
};
</script>

<style lang="less" scoped>
@import url("@/static/style.css");
</style>
