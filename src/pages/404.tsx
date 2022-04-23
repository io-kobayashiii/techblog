import ApiRequests from '@/libs/ApiRequests'

export default function Custom404() {
	return <h1 className="text-24">Not found.</h1>
}

export const getStaticProps = async () => {
	const categoryList = await ApiRequests.categories()
	return {
		props: {
			layout: '404',
			categories: categoryList.contents,
		},
	}
}
