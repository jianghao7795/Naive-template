import { createApp } from 'vue';
import App from './App.vue';
import router from './rotuer';
import store from './store';
import 'vfonts/FiraCode.css';
import './styles/index.less';
import Naive, { NA } from 'naive-ui';

const baseApp = createApp(App);
// console.log(baseApp.config);
// baseApp.config = {
//   errorHandler: (err, vm, info) => {
//     console.log(err, vm, info);
//   },
//   warnHandler: (msg, vm, trace) => {
//     console.log(msg, vm, trace);
//   },
//   globalProperties: {},
//   optionMergeStrategies: {},
//   performance: false,
//   compilerOptions: {
//     isCustomElement: (tag: string) => false,
//     whitespace: 'condense',
//     delimiters: ['{{', '}}'],
//     comments: false,
//   },
// };

// 为 Vue 的运行时警告指定一个自定义处理函数。注意这只会在开发环境下生效，在生产环境下它会被忽略
baseApp.config.warnHandler = (msg, vm, trace) => {
  // console.log(msg, vm, trace);
};

// 指定一个处理函数，来处理组件渲染方法和侦听器执行期间抛出的未捕获错误。这个处理函数被调用时，可获取错误信息和应用实例
baseApp.config.errorHandler = (err, vm, info) => {
  // console.log(err, vm, info);
};

// globalProperties
baseApp.config.globalProperties.foo = 'bar';

baseApp.use(Naive).use(router).use(store).mount('#app');
