import ApiRequests from '@/libs/ApiRequests'

export default function Custom500() {
	return <h1 className="text-24">Server Error.</h1>
}

export const getStaticProps = async () => {
	const categories = await ApiRequests.categories()
	return {
		props: {
			layout: '500',
			categories: categories.contents,
		},
	}
}
