import { fetchMicroCMS } from '../libs/fetch'
import Link from 'next/link'
import {
	ArticleList,
	getStaticPropsArticles
} from '../types/global'

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

export const getStaticProps: getStaticPropsArticles = async () => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const data: ArticleList = await fetchArticles.json()

	return {
		props: {
			articles: data.contents
		},
	}
}
