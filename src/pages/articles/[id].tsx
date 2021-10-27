import { FetchMicroCMS } from '@/libs/fetch'
import { useEffect } from 'react'
import NeumorphismButton from '@/components/atoms/button/NeumorphismButton'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import styles from '@/styles/pages/articles/articles.module.scss'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-dark.css'

export default function CreateArticle({ article }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	useEffect(() => {
		const preElems = document.querySelectorAll('pre')
		if (preElems.length > 0) {
			Array.prototype.forEach.call(preElems, (preElem) => {
				preElem.classList.add(styles.preCodeLanguage)
				const codeElem = preElem.querySelector('code')
				const splittedElemInner = codeElem.innerHTML.split('_____')
				switch (splittedElemInner[0]) {
					case 'terminal':
						codeElem.className = `hljs bash`
						break
					default:
						codeElem.className = `hljs ${splittedElemInner[0]}`
						break
				}
				preElem.setAttribute(
					'data-language',
					splittedElemInner[1] == 'none'
						? splittedElemInner[0]
						: splittedElemInner[1]
				)
				codeElem.innerHTML = splittedElemInner[2]
			})
			hljs.highlightAll()
		}
	}, [])
	return (
		<>
			<p className="text-14 md:text-18">
				{dayjs
					.utc(article.publishedAt)
					.tz('Asia/Tokyo')
					.format('YYYY.MM.DD')}
			</p>
			<h1
				className={`${styles.heading} text-20 sm:text-24 md:text-28 mt-16 md:mt-22`}
			>
				{article.title}
			</h1>
			<div className="flex flex-wrap m-minus-5 mt-15 md:mt-25">
				{!!article.categories &&
					article.categories.map((category, index) => {
						return (
							<NeumorphismButton
								key={index}
								unevenness={'dents'}
								shadowColor={'default'}
								displayText={category.name}
								additionalClasses={[
									'default',
									'm-5',
									'rounded-100vh',
									'py-5',
									'px-15',
									'md:py-8',
									'md:px-12',
									'text-12',
									'md:text-14',
									'bg-gray-100',
									'pointer-events-none',
								]}
							/>
						)
					})}
			</div>
			<div
				className={`${styles.articles} mt-40 sm:mt-60 md:mt-80 border-t-2 border-gray-200 text-16`}
				dangerouslySetInnerHTML={{ __html: article.body }}
			/>
		</>
	)
}

export const getStaticPaths = async () => {
	const fetchArticles = await FetchMicroCMS(['articles'])
	const data = await fetchArticles.json()
	const paths = data.contents.map((content) => `/articles/${content.id}`)
	return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
	const fetchArticle = await FetchMicroCMS(['articles', context.params.id])
	const article = await fetchArticle.json()
	const fetchCategories = await FetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()
	return {
		props: {
			layout: 'article',
			article: article,
			categories: categoryList.contents,
		},
	}
}
