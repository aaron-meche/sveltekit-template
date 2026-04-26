import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ruePlugin from 'rue-lang';

export default defineConfig({ 
    plugins: [ruePlugin(), sveltekit()] 
});
