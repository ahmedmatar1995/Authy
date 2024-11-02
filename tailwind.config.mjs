/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			colors:{
				primary:{
					dark:"#040F0F",
					white:"#FCFFFC",
					gray:"#2D3A3A"
				}
			}
		},
	},
	plugins: [require("daisyui"), require("tailwindcss-motion")],
}
