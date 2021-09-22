import * as React from 'react'

type Props = {
	displayText: string
	additionalClasses?: string[]
}

const ArticleCardTitle = ({displayText, additionalClasses = ['']}: Props): JSX.Element => {
	const commonClasses = ['text-white', 'text-16', 'sm:text-18', 'md:text-20', 'lg:text-24', 'font-bold']
	const classes = [...commonClasses, ...additionalClasses]
	return (
		<h3 className={classes.join(' ')}>{displayText}</h3>
	)
}

export default ArticleCardTitle