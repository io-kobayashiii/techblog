module.exports = {
	mode: 'jit',
	purge: [ './src/pages/**/*.{js,ts,tsx}', './src/components/**/*.{js,ts,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			sm: '560px',
			md: '768px',
			lg: '1000px',
		},
		fontSize: {
			...[...Array(100)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},
		padding: {
			...[...Array(100)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},
		margin: {
			...[...Array(100)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(100)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			'auto': 'auto',
		},
		maxWidth: {
			'560': '560px',
			'768': '768px',
			'1000': '1000px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
