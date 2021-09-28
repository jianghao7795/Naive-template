import { createApp } from 'vue';
import Vant from './vants';
import App from './App.vue';
import router from './rotuer';

const baseApp = createApp(App);
Vant.forEach((item) => {
	baseApp.use(item);
});
baseApp.use(router).mount('#app');
