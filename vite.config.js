import { sveltekit } from '@sveltejs/kit/vite';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			events: 'rollup-plugin-node-polyfills/polyfills/events'
		}
	},
	plugins: [
		sveltekit(),
		rollupNodePolyFill()
	]
};

export default config;
