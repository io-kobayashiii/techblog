import React from 'react'
import ArticleCard from './ArticleCard'

const exportComponent = {
	component: ArticleCard,
	title: 'ArticleCard',
}
export default exportComponent

const Template = (args) => <ArticleCard {...args} />

export const Default = Template.bind({})
Default.args = {
	unevenness: 'bumps',
	shadowColor: 'default',
	data: {
		title: 'title',
		date: '2021.01.01',
		href: 'https://nextjs.org/',
		categories: ['JavaScript', 'HTML', 'CSS', 'SCSS'],
	},
	className: ['p-15', 'md:p-30', 'rounded-12', 'default', 'bg-white'],
}
