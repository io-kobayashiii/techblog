import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/all.min.css" />
					<link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&family=M+PLUS+1p:wght@400&display=swap" rel="stylesheet" />
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
