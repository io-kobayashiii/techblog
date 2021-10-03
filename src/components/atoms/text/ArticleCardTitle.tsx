import * as React from 'react'
import styles from './ArticleCardTitle.module.scss'

type Props = {
	displayText: string
	additionalClasses?: string[]
}

const ArticleCardTitle = ({
	displayText,
	additionalClasses = [''],
}: Props): JSX.Element => {
	const commonClasses = [styles.heading, 'text-16', 'sm:text-18', 'lg:text-20']
	const classes = [...commonClasses, ...additionalClasses]
	return <h3 className={classes.join(' ')}>{displayText}</h3>
}

export default ArticleCardTitle
