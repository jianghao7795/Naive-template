
import { createApp } from 'vue';
// import Vant from './vants';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './rotuer';

const baseApp = createApp(App);
baseApp.use(Vant);
baseApp.use(router).mount('#app');
