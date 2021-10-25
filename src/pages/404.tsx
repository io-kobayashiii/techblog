import { fetchMicroCMS } from '@/libs/fetch'

export default function Custom404() {
	return <h1 className="text-24">Not found.</h1>
}

export const getStaticProps = async () => {
	const fetchCategories = await fetchMicroCMS(['categories'])
	const categoryList = await fetchCategories.json()

	return {
		props: {
			layout: '404',
			categories: categoryList.contents,
		},
	}
}
