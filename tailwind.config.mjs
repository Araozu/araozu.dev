/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'c-bg': 'var(--c-bg)',
				'c-on-bg': 'var(--c-on-bg)',
				'c-bg-2': 'var(--c-bg-2)',
			},
		},
	},
	plugins: [],
}
