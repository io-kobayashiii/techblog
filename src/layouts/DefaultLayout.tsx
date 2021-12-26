import React from 'react'
import Head from 'next/head'
import Header from '@/components/organisms/header/Header'
import Footer from '@/components/organisms/footer/Footer'
import { SiteConfig } from '@/config/SiteConfig'

const DefaultLayout = ({ children, categories }) => {
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
