/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg-mobile': "url('/images/hero/mobile/background.png')",
				'hero-bg-laptop': "url('/images/hero/laptop/background.png')",
				'about-repeat-logo': 'url(/light-mo-money-taxes-laptop-alt-logo.png)',
				'optin-small': 'url(/images/optIn/large/email-opt-in-background-large.png)',
				'optin-large': 'url(/images/optIn/small/email-opt-in-background-mobile.png)'
			},
			colors: {
				'main-green': '#2DA75A',
				'main-gold': '#FFDD02'
			}
		},
	},
	plugins: [],
}
