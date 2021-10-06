import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://unpkg.com/@coreui/icons/css/all.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&family=News+Cycle:wght@700&family=Noto+Sans+JP:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
