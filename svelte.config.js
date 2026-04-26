import runRue from 'rue-lang';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [runRue()],
	kit: { adapter: adapter() }
};

export default config;