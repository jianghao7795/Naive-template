<template>
  <div @click="sonHander">{{ mytitle.title }}我是子组件中的数据</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NoCont',
  //  未进行接受
  props: {
    mytitle: {
      type: Object,
    },
  },
  setup(props, context) {
    const { mytitle } = props;
    console.log('props==>', props.mytitle); //输出的值是 undefined

    // 输出别人的标题【使用context获取值，不需要使用props去接受】
    console.log('context==> ', context.attrs.othertitle);

    // 输出undefined，因为context不需要使用props去接受。
    console.log('contextmytitle==> ', context.attrs.mytitle);
    function sonHander() {
      context.emit('sonclick', '子组件传递给父组件'); //调用 父级的方法 第二个是传给方法的参数
      console.log('props==>', props.mytitle);
    }
    return { sonHander, mytitle };
  },
});
</script>
