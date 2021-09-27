import { createApp } from 'vue';
import vant from './vants/index';
import App from './App.vue';

const baseApp = createApp(App);

vant.forEach((item) => {
	baseApp.use(item);
});

baseApp.mount('#app');
