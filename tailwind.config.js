/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"soft-violet": "hsl(257, 40%, 49%)",
				"soft-magenta": "hsl(300, 69%, 71%)",
				"light-grayish-blue": "hsl(240, 5%, 91%)",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				OpenSans: ["Open Sans", "sans-serif"],
			},
			screens: {
				"-sm": { max: "639px" },
			},
			backgroundImage: {
				"mobile-bg": "url('/assets/images/bg-mobile.svg')",
				"desktop-bg": "url('/assets/images/bg-desktop.svg')",
			},
		},
	},
	plugins: [],
};
