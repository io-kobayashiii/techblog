import * as React from 'react'
import styles from './NeumorphismButton.module.css'
import { CheckIfItExistsInStyles } from '@/libs/CheckIfItExistsInStyles'

type Props = {
	unevenness: 'dents' | 'bumps'
	shadowColor: 'default' | 'primary'
	displayText: string
	additionalClasses?: string[]
}

const NeumorphismButton = ({
	unevenness,
	shadowColor,
	displayText,
	additionalClasses = [''],
}: Props): JSX.Element => {
	const styleClass = styles[`${unevenness}_${shadowColor}`]
	const commonClasses = ['']
	const classes = [
		styleClass,
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
