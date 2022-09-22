import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	]
}

export default config
