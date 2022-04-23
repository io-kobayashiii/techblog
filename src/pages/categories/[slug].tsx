import { FetchMicroCMS } from '@/libs/fetch'
import { Category, Article, Articles } from '@/types/GlobalTypes'
import ArticleCard from '@/components/molecules/card/ArticleCard'
import styles from '@/styles/pages/categories/categories.module.scss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'highlight.js/styles/stackoverflow-dark.css'

export default function CreateCategoryPage({ articles, slug }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	return (
		<>
			<h1 className={`${styles.heading} text-24 sm:text-28 md:text-32`}>Category: {slug}</h1>
			<ul className="mt-30 md:mt-50 md:flex md:flex-wrap md:justify-between">
				{articles.map((article, index) => (
					<li key={article.id} className={index == 0 ? 'md:w-100p' : 'md:w-[calc(50%-15px)] mt-15 md:mt-30'}>
						<ArticleCard
							unevenness="bumps"
							shadowColor="default"
							data={{
								title: article.title,
								date: dayjs.utc(article.publishedAt).tz('Asia/Tokyo').format('YYYY.MM.DD'),
								href: `/articles/${article.id}`,
								categories: article.categories.map((category) => category.name),
							}}
							className={['default', 'bg-white']}
						/>
					</li>
				))}
			</ul>
		</>
	)
}

export const getStaticPaths = async () => {
	const fetchCategories = await FetchMicroCMS(['categories'])
	const data = await fetchCategories.json()
	const paths = data.contents.map((content) => `/categories/${content.slug}`)
	return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
	const fetchArticles = await FetchMicroCMS(['articles'])
	const articles = await fetchArticles.json()
	// prettier-ignore
	const matchedArticles: Articles = articles.contents.reduce((array: Articles, article: Article): Articles =>
			article.categories.reduce((bool: boolean, category: Category): boolean =>
				category.slug === context.params.slug ? true : bool
			, false) ? array.concat([article]) : array
		, [])
	const fetchCategories = await FetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()
	return {
		props: {
			layout: 'default',
			articles: matchedArticles,
			categories: categoryList.contents,
			slug: categoryList.contents.map((category) => category.slug === context.params.slug && category.name),
		},
	}
}
