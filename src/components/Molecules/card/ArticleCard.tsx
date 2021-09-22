import * as React from 'react'
import styles from './ArticleCard.module.scss'
import { CheckIfItExistsInStyles } from '../../../libs/CheckIfItExistsInStyles'
import Link from 'next/link'
import ArticleCardTitle from '../../atoms/text/ArticleCardTitle'
import NeumorphismButton from '../../atoms/button/NeumorphismButton'

type Props = {
	unevenness: 'dents' | 'bumps'
	data: {
		title: string
		date: string
		href: string
		categories?: string[]
	}
	additionalClasses?: string[]
}

const ArticleCard = ({unevenness, data, additionalClasses = ['']}: Props): JSX.Element => {
	const unevennessClass = unevenness == 'dents' ? styles.dents : styles.bumps
	const commonClasses = ['p-15']
	const classes = [unevennessClass, ...commonClasses, ...CheckIfItExistsInStyles(additionalClasses, styles)]
	return (
		<Link href={data.href} >
			<a className='block'>
				<div className={classes.join(' ')}>
					<ArticleCardTitle displayText={data.title} additionalClasses={['mb-15']} />
					<div className='flex flex-wrap m-minus-5'>
						{!!data.categories && (data.categories.map((category, index) => {
							return <NeumorphismButton key={index} unevenness='dents' displayText={category} additionalClasses={['default', 'm-5']} />
						}))}
					</div>
					<p className='text-12 text-white text-right mt-15'>{data.date}</p>
				</div>
			</a>
		</Link>
	)
}

export default ArticleCard