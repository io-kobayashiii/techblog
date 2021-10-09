import { fetchMicroCMS } from '../libs/fetch'
import ArticleCard from '../components/molecules/card/ArticleCard'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/footer/Footer'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export default function Home({ articles, categories }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	return (
		<>
			<Header categories={categories} />
			<main className="pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100">
				<div className="px-15 md:px-30 max-w-lg mx-auto">
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
				</div>
			</main>
			<Footer categories={categories} />
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
