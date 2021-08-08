import styles from '../../styles/Home.module.scss'

import { fetchMicroCMS } from '../../libs/fetch'

export default function BlogId({ article }) {
	return (
		<main className={styles.main}>
			<h1>{ article.title }</h1>
			<p>{ article.publishedAt }</p>
		</main>
	)
}

export const getStaticPaths = async () => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const data = await fetchArticles.json()
	const paths = data.contents.map(content => `/articles/${content.id}`)
	return { paths, fallback: false }
}

export const getStaticProps = async context => {
	const fetchArticles = await fetchMicroCMS(['articles', context.params.id])
	const data = await fetchArticles.json()
	return {
		props: {
			article: data,
		},
	}
}
