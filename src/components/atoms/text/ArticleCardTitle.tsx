import * as React from 'react'
import styles from './ArticleCardTitle.module.css'

type Props = {
	displayText: string
	className?: string[]
}

const ArticleCardTitle = ({ displayText, className = [''] }: Props): JSX.Element => {
	const commonClasses = [styles.heading, 'text-16', 'sm:text-18', 'lg:text-20']
	const classes = [...commonClasses, ...className]
	return <h3 className={classes.join(' ')}>{displayText}</h3>
}

export default ArticleCardTitle
