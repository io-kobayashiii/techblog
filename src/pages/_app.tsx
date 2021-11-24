import '@/styles/tailwind.css'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import ArticleLayout from '@/layouts/ArticleLayout'

function App({ Component, pageProps }) {
	pageProps['tailwindClasses'] = 'pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100 px-15 md:px-30 max-w-lg mx-auto'
	switch (pageProps.layout) {
		case 'default':
			return (
				<DefaultLayout categories={pageProps.categories}>
					<Component {...pageProps} />
				</DefaultLayout>
			)
		case 'article':
			return (
				<ArticleLayout article={pageProps.article} categories={pageProps.categories}>
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
