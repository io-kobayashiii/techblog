import * as React from 'react'
import Head from 'next/head'
import Header from '@/components/organisms/header/Header'
import Footer from '@/components/organisms/footer/Footer'
import { SiteConfig } from '@/config/SiteConfig'
import { GlobalNavigationStateContext } from '@/contexts/GlobalNavigationStateContext'

const DefaultLayout = ({ children, categories }) => {
	const [isInitialRendering, setIsInitialRendering] = React.useState(true)
	const { isGlobalNavigationOpen } = React.useContext(GlobalNavigationStateContext)
	const [bodyElement, setBodyElement] = React.useState<HTMLBodyElement>()
	React.useEffect(() => {
		setBodyElement(document.getElementsByTagName('body')[0])
	}, [])
	React.useEffect(() => {
		console.log(`App.useEffect() / isGlobalNavigationOpen: ${isGlobalNavigationOpen}`)
		if (isInitialRendering) {
			setIsInitialRendering(false)
			return
		}
		bodyElement.classList.toggle('overflow-hidden')
	}, [isGlobalNavigationOpen])
	return (
		<>
			<Head>
				<title>{SiteConfig.title}</title>
				<meta property="description" content={SiteConfig.description} />
				<script defer src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
				<script
					id={'ga'}
					defer
					dangerouslySetInnerHTML={{
						__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`,
					}}
				/>
			</Head>
			<Header categories={categories} />
			<main className="pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100">
				<div className="px-15 md:px-30 max-w-lg mx-auto">{children}</div>
			</main>
			<Footer categories={categories} />
		</>
	)
}

export default DefaultLayout
