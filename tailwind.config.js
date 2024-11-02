/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				foreground: '#efebec',
				background: '#0c0909',
				primary: {
					main: '#9c162d',
					50 : '#fce9ec',
					100: '#f6bcc6',
					200: '#ef8fa0',
					300: '#e9637a',
					400: '#e33654',
					500: '#c91c3a',
					600: '#9c162d',
					700: '#701020',
					800: '#430913',
					900: '#160306',
				},
				secondary: {
					main: '#3a2c2d',
					50 : '#f4f1f1',
					100: '#ded4d4',
					200: '#c8b7b8',
					300: '#b29a9b',
					400: '#9c7d7f',
					500: '#826365',
					600: '#654d4f',
					700: '#483738',
					800: '#2b2122',
					900: '#1b1616',
				},
				accent: {
					main: '#922050',
					50 : '#faeaf1',
					100: '#f1c0d5',
					200: '#e896b9',
					300: '#df6d9d',
					400: '#d64381',
					500: '#bc2967',
					600: '#922050',
					700: '#691739',
					800: '#3f0e22',
					900: '#15050b',
				},
			},
			fontFamily: {
				'default-sans': '"Outfit", "M PLUS 2", ui-sans-serif system-ui sans-serif',
				'default-serif': '"Vollkorn", "Noto Serif JP", ui-serif, Georgia, serif',
				//'mono': 'ui-monospace, SFMono-Regular',
			},
			animation: {
				'glow-primary': 'glow-primary 0.5s ease-out forwards',
			},
			keyframes: {
				'glow-primary': {
					from: {
						'box-shadow': '0 0 0 primary-200',
					},
					to: {
						'box-shadow': '0 1pt 14pt primary-200',
					},
				},
			},
		},
	},
	plugins: [],
}

