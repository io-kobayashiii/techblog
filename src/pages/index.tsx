import { fetchMicroCMS } from '../libs/fetch'
import Link from 'next/link'
import NeumorphismButton from '../components/atoms/button/NeumorphismButton'
import { ArticleList, getStaticPropsArticles } from '../types/GlobalTypes'

export default function Home({ articles }) {
	const articleList = articles.map((article) => (
		<li key={article.id}>
			<Link href={`/articles/${article.id}`}>
				<a className='bg-gray-500'>{article.title}</a>
			</Link>
		</li>
	))

	return (
		<>
			<ul>{articleList}</ul>
			<NeumorphismButton unevenness={'dents'} displayText='TypeScript' additionalClasses={['default']}></NeumorphismButton>
			<Link href='https://nextjs.org/'>
				<a target='_blank'>
					<NeumorphismButton unevenness={'bumps'} displayText='JavaScript' additionalClasses={['default', 'ml-4']}></NeumorphismButton>
				</a>
			</Link>
		</>
	)
}

export const getStaticProps: getStaticPropsArticles = async () => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const data: ArticleList = await fetchArticles.json()

	return {
		props: {
			articles: data.contents,
		},
	}
}
