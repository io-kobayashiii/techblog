import Link from 'next/link'

export default function Home({ blogs }) {

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
	const url = 'https://for.microcms.io/api/v1/blog'
	const key = {
		headers: {
			'X-API-KEY': 'dc69c2a6-f791-4ddd-a2b6-d1f552cb5718',
		}
	}
	let data = null
	fetch(url, key).then(res => data = res.json())

	return {
		props: {
			blogs: data.contents
		},
	}
}
