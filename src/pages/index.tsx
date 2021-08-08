import { fetchMicroCMS } from '../libs/fetch'
import Link from 'next/link'

export default function Home({ articles }) {
	const articleList = articles.map(article => (
		<li key={ article.id }>
			<Link href={`/articles/${article.id}`}>
				<a>{ article.title }</a>
			</Link>
		</li>
	))

	return (
		<ul>{ articleList }</ul>
	)
}

export const getStaticProps = async () => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const data = await fetchArticles.json()

	return {
		props: {
			articles: data.contents
		},
	}
}
