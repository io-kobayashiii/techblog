import * as React from 'react'
import styles from './NeumorphismButton.module.scss'
import { CheckIfItExistsInStyles } from '../../../libs/CheckIfItExistsInStyles'

type Props = {
	unevenness: 'dents' | 'bumps'
	displayText: string
	additionalClasses?: string[]
}

const NeumorphismButton = ({unevenness, displayText, additionalClasses}: Props) => {
	const unevennessClass = unevenness == 'dents' ? styles.dents : styles.bumps
	const commonClasses = ['py-1', 'px-3', 'text-white', 'md:py-2', 'md:px-6', 'text-12', 'md:text-14']
	const classes = [unevennessClass, ...commonClasses, ...CheckIfItExistsInStyles(additionalClasses, styles)]
	return (
		<button className={classes.join(' ')}>{displayText}</button>
	)
}

export default NeumorphismButton