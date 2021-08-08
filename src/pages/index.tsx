import { fetchByEndpoint } from '../libs/fetch'
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
	const url = 'https://for.microcms.io/api/v1/articles'
	const fetchArticles = await fetch(url, { headers: { 'X-API-KEY': 'dc69c2a6-f791-4ddd-a2b6-d1f552cb5718' } })
	const res = fetchArticles
	const data = await res.json()

	return {
		props: {
			articles: data.contents
		},
	}
}
