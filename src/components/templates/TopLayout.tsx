import { fetchMicroCMS } from '../../libs/fetch'
import Header from '../../components/Organisms/header/Header'

export default function TopLayout({ children }) {
	let customProps = { categories: [] }
	fetchMicroCMS(['categories']).then(res => res.json()).then(data => {
		console.log(data.contents)
		customProps = data.contents
	})
	return (
		<>
			{/* <Header categories={customProps.categories.map(category => category.name)} /> */}
			{children}
		</>
	)
}

