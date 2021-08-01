import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { client } from '../../src/libs/client'
import styles from '../../src/styles/Home.module.scss'

type Blog = {
	id: number
	title: string
}

type Res = {
	contents: Blog[]
}

export default function BlogId({ blog }) {
	return (
		<main className={styles.main}>
			<h1>{ blog.title }</h1>
			<p>{ blog.publishedAt }</p>x
			<div
				dangerouslySetInnerHTML={{
					__html: `${ blog.body }`,
				}}
			/>
		</main>
	)
}

export const getStaticPaths = async () => {
	const data: Res = await client.get({
		endpoint: 'blog',
	})
	const paths = data.contents.map(content => `/blog/${content.id}`)
	return { paths, fallback: false }
}

export const getStaticProps = async context => {
	const id = context.params.id
	const data: Res = await client.get({
		endpoint: 'blog',
		contentId: id,
	})
	return {
		props: {
			blog: data.contents,
		},
	}
}
