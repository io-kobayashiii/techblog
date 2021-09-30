import { fetchMicroCMS } from '../libs/fetch'
import ArticleCard from '../components/Molecules/card/ArticleCard'
import Header from '../components/Organisms/header/Header'
import Footer from '../components/Organisms/footer/Footer'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export default function Home({ articles, categories }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	return (
		<>
			<Header categories={categories.map((category) => category.name)} />
			<main className="pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100">
				<div className="px-15 max-w-1000 mx-auto">
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
			<Footer categories={categories.map((category) => category.name)} />
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
