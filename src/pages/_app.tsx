import '@/styles/tailwind.css'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import ArticleLayout from '@/layouts/ArticleLayout'

function App({ Component, pageProps }) {
	switch (pageProps.layout) {
		case 'default':
			return (
				<DefaultLayout categories={pageProps.categories}>
					<Component {...pageProps} />
				</DefaultLayout>
			)
		case 'article':
			return (
				<ArticleLayout
					article={pageProps.article}
					categories={pageProps.categories}
				>
					<Component {...pageProps} />
				</ArticleLayout>
			)
		case '404':
			return (
				<DefaultLayout categories={pageProps.categories}>
					<Component {...pageProps} />
				</DefaultLayout>
			)
		case '500':
			return (
				<DefaultLayout categories={pageProps.categories}>
					<Component {...pageProps} />
				</DefaultLayout>
			)
	}
}

export default App
