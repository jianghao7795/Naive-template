import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/

const config = defineConfig({
	plugins: [
		vue(),
		viteMockServe({}),
	],
	// hmr: { overlay: false },
	//  baseUrl: "./",
	server: {
		host: '0.0.0.0',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src/'),
		},
	},
});

export default config;
