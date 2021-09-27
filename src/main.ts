import { createApp } from 'vue';
import Vant from '@/vants';
import App from './App.vue';

const baseApp = createApp(App);
Vant.forEach((item) => {
	baseApp.use(item);
});
baseApp.mount('#app');
