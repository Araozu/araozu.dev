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
            fontFamily: {
                "etoile": ["'Iosevka Etoile Web'", "serif"],
            }
		},
	},
	plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    width: '98%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                    '@screen xl': {
                        maxWidth: '1400px',
                    },
                },
            })
        }
	],
}
