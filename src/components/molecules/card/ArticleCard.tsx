import * as React from 'react'
import styles from './ArticleCard.module.css'
import { CheckIfItExistsInStyles } from '../../../libs/CheckIfItExistsInStyles'
import Link from 'next/link'
import ArticleCardTitle from '../../atoms/text/ArticleCardTitle'
import NeumorphismButton from '../../atoms/button/NeumorphismButton'

type Props = {
	unevenness: 'dents' | 'bumps'
	shadowColor: 'default' | 'primary'
	data: {
		title: string
		date: string
		href: string
		categories?: string[]
	}
	additionalClasses?: string[]
}

const ArticleCard = ({
	unevenness,
	shadowColor,
	data,
	additionalClasses = [''],
}: Props): JSX.Element => {
	const styleClass = styles[`${unevenness}_${shadowColor}`]
	const commonClasses = ['p-15', 'md:p-30', 'rounded-12']
	const classes = [
		styleClass,
		...commonClasses,
		...CheckIfItExistsInStyles(additionalClasses, styles),
	]
	return (
		<Link href={data.href}>
			<a className="block">
				<div className={classes.join(' ')}>
					<ArticleCardTitle
						displayText={data.title}
						additionalClasses={['mb-15']}
					/>
					<div className="flex flex-wrap m-minus-5">
						{!!data.categories &&
							data.categories.map((category, index) => {
								return (
									<NeumorphismButton
										key={index}
										unevenness="dents"
										shadowColor="default"
										displayText={category}
										additionalClasses={[
											'default',
											'm-5',
											'rounded-100vh',
											'py-5',
											'px-15',
											'md:py-8',
											'md:px-12',
											'text-12',
											'md:text-14',
											'bg-gray-100',
										]}
									/>
								)
							})}
					</div>
					<p className="text-12 md:text-14 text-right mt-15">
						{data.date}
					</p>
				</div>
			</a>
		</Link>
	)
}

export default ArticleCard
