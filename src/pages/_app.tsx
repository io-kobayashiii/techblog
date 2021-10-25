import '@/styles/tailwind.css'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'

function App({ Component, pageProps }) {
	// 現状出し分けるレイアウトがないが今後のために実装
	switch (pageProps.layout) {
		case 'default':
			return (
				<DefaultLayout categories={pageProps.categories}>
					<Component {...pageProps} />
				</DefaultLayout>
			)
		case '404':
			return (
				<DefaultLayout categories={pageProps.categories}>
					<Component {...pageProps} />
				</DefaultLayout>
			)
	}
}

export default App
