/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#2456DF',
					50: '#C4D2F6',
					100: '#B2C4F4',
					200: '#8FA8EF',
					300: '#6B8DE9',
					400: '#4871E4',
					500: '#2456DF',
					600: '#1A42B1',
					700: '#133080',
					800: '#0C1E4F',
					900: '#040B1E',
					950: '#010206'
				},
				background: {
					DEFAULT: '#040404',
					light: '#FAFAFA',
					dark: '#040404'
				},
				text: {
					DEFAULT: '#f2ece8',
					light: '#17110D',
					dark: '#f2ece8'
				},
			}
		}
	},

	plugins: [ require('flowbite/plugin'), require('@tailwindcss/typography')],
	darkMode: 'class',
};
