import React from 'react'
import ArticleCardTitle from './ArticleCardTitle'

const exportComponent = {
	component: ArticleCardTitle,
	title: 'ArticleCardTitle',
}
export default exportComponent

const Template = (args) => <ArticleCardTitle {...args} />

export const Default = Template.bind({})
Default.args = {
	displayText: 'title',
	additionalClasses: ['mb-15'],
}
