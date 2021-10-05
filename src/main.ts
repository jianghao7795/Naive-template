
import { createApp } from 'vue';
// import Vant from './vants';
import Vant from 'vant'
import App from './App.vue';
import 'vant/lib/index.css'

const baseApp = createApp(App);
baseApp.use(Vant)
// Vant.forEach((item) => {
// 	baseApp.use(item);
// });
baseApp.mount('#app');
