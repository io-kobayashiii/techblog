import { fetchMicroCMS } from '@/libs/fetch'
import ArticleCard from '@/components/molecules/card/ArticleCard'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export default function Home({ articles }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	return (
		<>
			<ul className="md:flex md:flex-wrap md:justify-between">
				{articles.map((article, index) => (
					<li
						key={article.id}
						className={
							index == 0
								? 'md:w-100p'
								: 'md:w-[calc(50%-15px)] mt-15 md:mt-30'
						}
					>
						<ArticleCard
							unevenness="bumps"
							shadowColor="default"
							data={{
								title: article.title,
								date: dayjs
									.utc(article.publishedAt)
									.tz('Asia/Tokyo')
									.format('YYYY.MM.DD'),
								href: `/articles/${article.id}`,
								categories: article.categories.map(
									(category) => category.name
								),
							}}
							additionalClasses={['default', 'bg-white']}
						/>
					</li>
				))}
			</ul>
		</>
	)
}

export const getStaticProps = async () => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const articleList = await fetchArticles.json()
	const fetchCategories = await fetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()

	return {
		props: {
			layout: 'default',
			articles: articleList.contents,
			categories: categoryList.contents,
		},
	}
}
