import { fetchMicroCMS } from '../../libs/fetch'
import { useEffect } from 'react'
import Header from '../../components/organisms/header/Header'
import Footer from '../../components/organisms/footer/Footer'
import NeumorphismButton from '../../components/atoms/button/NeumorphismButton'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import styles from '../../styles/articles.module.scss'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-dark.css'

export default function CreateArticle({ article, categories }) {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	useEffect(() => {
		const blockquoteElems = document.getElementsByTagName('blockquote')
		if(blockquoteElems.length > 0) {
			Array.prototype.forEach.call(blockquoteElems, elem => {
				elem.insertAdjacentHTML('afterbegin', `<div class="${styles.blockquoteBorder}"></div>`)
			})
		}
		const preElems = document.querySelectorAll('pre')
		if(preElems.length > 0) {
			Array.prototype.forEach.call(preElems, preElem => {
				preElem.classList.add(styles.preCodeLanguage)
				const codeElem = preElem.querySelector('code')
				const splittedElemInner = codeElem.innerHTML.split('_____')
				codeElem.className = `hljs ${splittedElemInner[0]}`
				codeElem.innerHTML = splittedElemInner[1]
				preElem.setAttribute('data-langage', splittedElemInner[0])
			})
			hljs.highlightAll()
		}
	}, [])
	return (
		<>
			<Header categories={categories.map((category) => category.name)} />
			<main className="pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100">
				<article className="px-15 md:px-30 max-w-1000 mx-auto">
					<p className='text-18'>{dayjs.utc(article.publishedAt).tz('Asia/Tokyo').format('YYYY.MM.DD')}</p>
					<h1 className='text-24 mt-25'>{article.title}</h1>
					<div className="flex flex-wrap m-minus-5 mt-20">
						{!!categories &&
							categories.map((category, index) => {
								return (
									<NeumorphismButton
										key={index}
										unevenness="dents"
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
										]}
									/>
								)
							})
						}
					</div>
					<div
						className={`${styles.articles} mt-30 pt-60 border-t-2 border-gray-200 text-16`}
						dangerouslySetInnerHTML={{ __html: article.body }}
					/>
				</article>
			</main>
			<Footer categories={categories.map((category) => category.name)} />
		</>
	)
}

export const getStaticPaths = async () => {
	const fetchArticles = await fetchMicroCMS(['articles'])
	const data = await fetchArticles.json()
	const paths = data.contents.map((content) => `/articles/${content.id}`)
	return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
	const fetchArticle = await fetchMicroCMS(['articles', context.params.id])
	const article = await fetchArticle.json()
	const fetchCategories = await fetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()
	return {
		props: {
			article: article,
			categories: categoryList.contents,
		},
	}
}
