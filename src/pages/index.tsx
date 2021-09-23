import { fetchMicroCMS } from '../libs/fetch'
import { ArticleList, getStaticPropsArticles } from '../types/GlobalTypes'
import ArticleCard from '../components/Molecules/card/ArticleCard'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export default function Home({ articles }) {
	dayjs.extend(utc);
	dayjs.extend(timezone);
	return (
		<>
			<div className="px-15 max-w-1000 mx-auto">
				<ul>
					{articles.map((article, index) => (
						<li key={article.id} className={index==0 ? '' : 'mt-15'}>
							<ArticleCard
								unevenness='bumps'
								data={{
									title: article.title,
									date: dayjs.utc(article.publishedAt).tz('Asia/Tokyo').format('YYYY年MM月DD日'),
									href: `/articles/${article.id}`,
									categories: [...article.categories.split('|')]
								}}
								additionalClasses={['default']}
							/>
						</li>
					))}
				</ul>
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
