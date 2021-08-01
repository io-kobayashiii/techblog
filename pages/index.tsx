import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { NextPage } from 'next'
import Link from 'next/link'
import { client } from '../src/libs/client'

type Blog = {
	id: number
	title: string
}

type Props = {
	blogs: Blog[]
}

type Res = {
	contents: Blog[]
}

const Home: NextPage<Props> = ({ blogs }) => {
	return (
		<div>
			<ul>
				{ blogs.map(blog => (
					<li key={ blog.id }>
						<Link href={`/blog/${blog.id}`}>
							<a>{ blog.title }</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const getStaticProps = async () => {
	const data: Res = await client.get({
		endpoint: 'blog',
	})
	return {
		props: {
			blogs: data.contents,
		},
	}
}

export default Home
