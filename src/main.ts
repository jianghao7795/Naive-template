import { createApp } from "vue"
import vant from "@/vant"
import App from "@/App.vue"
// mport 'vant'

const baseApp = createApp(App)

vant.forEach((item) => {
	baseApp.use(item)
})

baseApp.mount("#app")
