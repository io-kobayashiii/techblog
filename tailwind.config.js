module.exports = {
	mode: 'jit',
	purge: [ './src/pages/index.tsx', './src/pages/**/*.{js,ts,tsx}', './src/components/**/*.{js,ts,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			sm: '560px',
			md: '768px',
			lg: '1000px',
		},
		borderRadius: {
			...[...Array(32)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			'100vh': '100vh',
		},
		fontSize: {
			...[...Array(100)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},
		padding: {
			...[...Array(201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},
		margin: {
			...[...Array(201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(201)].reduce((m, _, i) => {
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
		width: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
		},
		height: {
			...[...Array(1000)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},
		lineHeight: {
			...[...Array(100)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
		},		
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
