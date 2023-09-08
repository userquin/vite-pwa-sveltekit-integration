import { vitePreprocess } from '@sveltejs/kit/vite';
// you don't need to do this if you're using generateSW strategy in your app
import { generateSW } from './pwa.mjs'
import { adapter } from './adapter.mjs'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter,
		serviceWorker: {
			register: false,
		},
		files: {
			// you don't need to do this if you're using generateSW strategy in your app
			serviceWorker: generateSW ? undefined : 'src/prompt-sw.ts',
		}
	}
};

export default config;
