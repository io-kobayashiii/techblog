import { InferGetStaticPropsType } from 'next';
import Link from 'next/link'
import { client } from '../libs/client'

export default function Home({ blogs }) {
	type Props = InferGetStaticPropsType<typeof getStaticProps>

	const blogList = blogs.map(blog => (
		<li key={ blog.id }>
			<Link href={`/blog/${blog.id}`}>
				<a>{ blog.title }</a>
			</Link>
		</li>
	))

	return (
		<ul>{ blogList }</ul>
	)
}

export const getStaticProps = async () => {
	const { data } = await client.get({ endpoint: 'blog' })
	return {
		props: {
			blogs: data.contents,
		},
	}
}
