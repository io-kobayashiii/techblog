import { NextPage } from 'next'
import Link from 'next/link'
import { client } from '../libs/client'

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
	const data = await client.get<Res>({
		endpoint: 'blog',
	})
	return {
		props: {
			blogs: data.contents,
		},
	}
}

export default Home
