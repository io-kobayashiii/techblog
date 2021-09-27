import { fetchMicroCMS } from '../libs/fetch'
import ArticleCard from '../components/molecules/card/ArticleCard'
import Header from '../components/organisms/header/Header'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export default function Home({ articles, categories }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	return (
		<>
			<Header categories={categories.map(category => category.name)} />
			<main className='mt-70 md:mt-120'>
				<div className='px-15 max-w-1000 mx-auto'>
					<ul>
						{articles.map((article, index) => (
							<li
								key={article.id}
								className={index == 0 ? '' : 'mt-15'}
							>
								<ArticleCard
									unevenness="bumps"
									data={{
										title: article.title,
										date: dayjs
											.utc(article.publishedAt)
											.tz('Asia/Tokyo')
											.format('YYYY年MM月DD日'),
										href: `/articles/${article.id}`,
										categories: article.categories.map(category => category.name),
									}}
									additionalClasses={['default']}
								/>
							</li>
						))}
					</ul>
				</div>
			</main>
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
			articles: articleList.contents,
			categories: categoryList.contents,
		},
	}
}
