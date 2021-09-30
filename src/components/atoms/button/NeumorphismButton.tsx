import * as React from 'react'
import styles from './NeumorphismButton.module.scss'
import { CheckIfItExistsInStyles } from '../../../libs/CheckIfItExistsInStyles'

type Props = {
	unevenness: 'dents' | 'bumps'
	displayText: string
	additionalClasses?: string[]
}

const NeumorphismButton = ({
	unevenness,
	displayText,
	additionalClasses = [''],
}: Props): JSX.Element => {
	const unevennessClass = unevenness == 'dents' ? styles.dents : styles.bumps
	const commonClasses = ['']
	const classes = [
		unevennessClass,
		...commonClasses,
		...CheckIfItExistsInStyles(additionalClasses, styles),
	]
	return (
		<button
			className={classes.join(' ')}
			dangerouslySetInnerHTML={{ __html: displayText }}
		></button>
	)
}

export default NeumorphismButton
