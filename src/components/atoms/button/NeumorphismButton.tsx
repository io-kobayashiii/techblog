import * as React from 'react'
import styles from './NeumorphismButton.module.scss'
import { CheckIfItExistsInStyles } from '../../../libs/CheckIfItExistsInStyles'

type Props = {
	unevenness: 'dents' | 'bumps'
	displayText: string
	additionalClasses?: string[]
}

const NeumorphismButton = ({unevenness, displayText, additionalClasses = ['']}: Props): JSX.Element => {
	const unevennessClass = unevenness == 'dents' ? styles.dents : styles.bumps
	const commonClasses = ['text-white', 'py-5', 'px-15', 'md:py-8', 'md:px-12', 'text-12', 'md:text-14']
	const classes = [unevennessClass, ...commonClasses, ...CheckIfItExistsInStyles(additionalClasses, styles)]
	return (
		<button className={classes.join(' ')}>{displayText}</button>
	)
}

export default NeumorphismButton