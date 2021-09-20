import { fetchMicroCMS } from '../libs/fetch'
import Link from 'next/link'
import NeumorphismButton from '../components/atoms/button/NeumorphismButton'
import ArticleCardTitle from '../components/atoms/text/ArticleCardTitle'
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
			<NeumorphismButton unevenness={'dents'} displayText='TypeScript' additionalClasses={['default']} />
			<Link href='https://nextjs.org/'>
				<a target='_blank'>
					<NeumorphismButton unevenness={'bumps'} displayText='JavaScript' additionalClasses={['default', 'ml-4']} />
				</a>
			</Link>
			<ArticleCardTitle displayText='ユーザビリティーの実験からわかったパスワードレス認証の課題' additionalClasses={['']} />
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
