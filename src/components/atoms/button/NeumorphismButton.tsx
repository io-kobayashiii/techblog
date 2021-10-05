import * as React from 'react'
import styles from './NeumorphismButton.module.css'
import { CheckIfItExistsInStyles } from '../../../libs/CheckIfItExistsInStyles'

type Props = {
	unevenness: 'dents' | 'bumps'
	color: 'default' | 'primary'
	displayText: string
	additionalClasses?: string[]
}

const NeumorphismButton = ({
	unevenness,
	color,
	displayText,
	additionalClasses = [''],
}: Props): JSX.Element => {
	const styleClass = styles[`${unevenness}_${color}`]
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
