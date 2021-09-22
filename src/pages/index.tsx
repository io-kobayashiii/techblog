import { fetchMicroCMS } from '../libs/fetch'
import Link from 'next/link'
import { ArticleList, getStaticPropsArticles } from '../types/GlobalTypes'
import ArticleCard from '../components/Molecules/card/ArticleCard'

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
			<div className="px-15">
				<ArticleCard
					unevenness='bumps'
					data={{
						title: 'ユーザビリティーの実験からわかったパスワードレス認証の課題',
						date: '2021.09.22',
						href: 'https://nextjs.org/',
						categories: ['JacaScript', 'TypeScript', 'Next.js', 'microCMS']
					}}
					additionalClasses={['default']}
				/>
			</div>
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
