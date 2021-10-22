import { fetchMicroCMS } from '@/libs/fetch'
import { Category, Article, Articles } from '@/types/GlobalTypes'
import Header from '@/components/organisms/header/Header'
import Footer from '@/components/organisms/footer/Footer'
import ArticleCard from '@/components/molecules/card/ArticleCard'
import styles from '@/styles/pages/categories/categories.module.scss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'highlight.js/styles/stackoverflow-dark.css'

export default function CreateCategoryPage({ articles, categories, slug }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	return (
		<>
			<Header categories={categories} />
			<main className="pt-80 md:pt-160 pb-50 md:pb-80 bg-gray-100">
				<div className="px-15 md:px-30 max-w-lg mx-auto">
					<h1
						className={`${styles.heading} text-24 sm:text-28 md:text-32`}
					>
						Category: {slug}
					</h1>
					<ul className="mt-30 md:mt-50 md:flex md:flex-wrap md:justify-between">
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

export const getStaticPaths = async () => {
	const fetchCategories = await fetchMicroCMS(['categories'])
	const data = await fetchCategories.json()
	const paths = data.contents.map((content) => `/categories/${content.slug}`)
	return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const articles = await fetchArticles.json()
	// prettier-ignore
	const matchedArticles: Articles = articles.contents.reduce((array: Articles, article: Article): Articles =>
			article.categories.reduce((bool: boolean, category: Category): boolean =>
				category.slug === context.params.slug ? true : bool
			, false) ? array.concat([article]) : array
		, [])
	const fetchCategories = await fetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()
	return {
		props: {
			articles: matchedArticles,
			categories: categoryList.contents,
			slug: categoryList.contents.map(
				(category) =>
					category.slug === context.params.slug && category.name
			),
		},
	}
}
