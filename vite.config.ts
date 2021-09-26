import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import { viteMockServe } from "vite-plugin-mock"
import styleImport from "vite-plugin-style-import"

// https://vitejs.dev/config/

const config = defineConfig({
	plugins: [
		vue(),
		viteMockServe({}),
		styleImport({
			libs: [
				{
					libraryName: "vant",
					esModule: true,
					resolveStyle: (name: string) => `vant/es/${name}/style`,
				},
			],
		}),
	],
	// hmr: { overlay: false },
	// baseUrl: "./",
	server: {
		host: "0.0.0.0",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src/"),
			"~": resolve(__dirname, "src/components"),
			"#": resolve(__dirname, "src/views"),
			"*": resolve(__dirname, "src/assets"),
		},
	},
})

export default config
