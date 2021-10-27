import { FetchMicroCMS } from '@/libs/fetch'

export default function Custom500() {
	return <h1 className="text-24">Server Error.</h1>
}

export const getStaticProps = async () => {
	const fetchCategories = await FetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()

	return {
		props: {
			layout: '500',
			categories: categoryList.contents,
		},
	}
}
