import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import NeumorphismButton from '../atoms/button/NeumorphismButton'

const Header = ({categories}): JSX.Element => {
	const ref = useRef(true)
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		if(ref.current){
			ref.current = false
			return
		}
		document.getElementsByTagName('header')[0].classList.toggle(styles.isGnavSpOpen)
	}, [isOpen])
	console.log(categories)
	return (
		<>
			<header className={`${styles.default} ${styles.header} w-full overflow-hidden`}>
				<div className='flex justify-between items-center max-w-1000 mx-auto px-15 w-full'>
					<Link href='/'>
						<a>
							<p className={`text-32 md:text-40 ${styles.logo}`}>For</p>
						</a>
					</Link>
					<div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
						<NeumorphismButton unevenness={'bumps'} displayText={`<i class='cil-hamburger-menu'></i>`} additionalClasses={['default', 'rounded-6', 'leading-0', 'p-8', 'md:p-16', 'text-16', 'md:text-24']} />
					</div>
					<div className='hidden md:block'>
						<Link href='https://twitter.com/?lang=ja'>
							<a target='_blank'>
								<NeumorphismButton unevenness={'bumps'} displayText={`<i class='cib-twitter'></i>`} additionalClasses={['default', 'rounded-100vh', 'leading-0', 'p-16', 'text-24']} />
							</a>
						</Link>
						<Link href='https://qiita.com/'>
							<a target='_blank'>
								<NeumorphismButton unevenness={'bumps'} displayText={`<i class='cib-qiita'></i>`} additionalClasses={['default', 'rounded-100vh', 'leading-0', 'ml-15', 'p-16', 'text-24']} />
							</a>
						</Link>
						<Link href='mailto:io.kobayashiii@gmail.com'>
							<a target='_blank'>
								<NeumorphismButton unevenness={'bumps'} displayText={`<i class='cib-gmail'></i>`} additionalClasses={['default', 'rounded-100vh', 'leading-0', 'ml-15', 'p-16', 'text-24']} />
							</a>
						</Link>
					</div>
				</div>
				<div className='p-15 md:hidden'>
					<p className='text-16 text-bold pb-5 border-b border-gray-700'>カテゴリー</p>
					<ul className='flex flex-wrap m-minus-5 pt-15'>
						{categories.map((category, index) => {
							return (
								<Link key={index} href={`/category/${category}`}>
									<a>
										<li>
											<NeumorphismButton unevenness={'bumps'} displayText={category} additionalClasses={['default', 'rounded-100vh', 'leading-0', 'm-5', 'p-16', 'text-16']} />
										</li>
									</a>
								</Link>
							)
						})}
					</ul>
				</div>
				<div className='mt-30 p-15 md:hidden'>
					<p className='text-16 text-bold pb-5 border-b border-gray-700'>プロフィール</p>
				</div>
			</header>
		</>
	)
}

export default Header