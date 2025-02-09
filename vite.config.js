import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: 'src/main.jsx',
				background: './background.js'
			},
			output: {
				entryFileNames: (chunk) => {
					return chunk.name === 'main' ? 'content.js' : '[name].js';
				},
				chunkFileNames: 'chunks/[name]-[hash].js'
			}
		}
	}
});
