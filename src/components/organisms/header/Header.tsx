import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import NeumorphismButton from '../../atoms/button/NeumorphismButton'

const Header = ({ categories }): JSX.Element => {
	const ref = useRef(true)
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		if (ref.current) {
			ref.current = false
			return
		}
		document
			.getElementsByTagName('header')[0]
			.classList.toggle(styles.isGnavSpOpen)
		document.getElementsByTagName('body')[0].classList.toggle('is-fixed')
	}, [isOpen])
	if (process.browser) {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 768)
				document
					.getElementsByTagName('header')[0]
					.classList.remove(styles.isGnavSpOpen)
		})
	}
	return (
		<>
			<header
				className={`${styles.default} ${styles.header} w-100p overflow-hidden bg-white`}
			>
				<div className="flex justify-between items-center max-w-1000 mx-auto px-15 md:px-30 w-100p">
					<Link href="/">
						<a>
							<p className={`text-32 md:text-40 ${styles.logo}`}>
								For
							</p>
						</a>
					</Link>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden"
					>
						<NeumorphismButton
							unevenness={'bumps'}
							displayText={`<i class='cil-hamburger-menu'></i>`}
							additionalClasses={[
								'default',
								'rounded-6',
								'leading-0',
								'p-8',
								'md:p-16',
								'text-16',
								'md:text-24',
							]}
						/>
					</div>
					<div className="hidden md:block">
						<Link href="https://twitter.com/?lang=ja">
							<a target="_blank">
								<NeumorphismButton
									unevenness={'bumps'}
									displayText={`<i class='cib-twitter'></i>`}
									additionalClasses={[
										'default',
										'rounded-100vh',
										'leading-0',
										'p-16',
										'text-24',
										'bg-[#00acee]',
										'text-white',
									]}
								/>
							</a>
						</Link>
						<Link href="https://qiita.com/">
							<a target="_blank">
								<NeumorphismButton
									unevenness={'bumps'}
									displayText={`<i class='cib-qiita'></i>`}
									additionalClasses={[
										'default',
										'rounded-100vh',
										'leading-0',
										'ml-15',
										'p-16',
										'text-24',
										'bg-[#59bb0c]',
										'text-white',
									]}
								/>
							</a>
						</Link>
						<Link href="https://github.com/io-kobayashiii/techblog">
							<a target="_blank">
								<NeumorphismButton
									unevenness={'bumps'}
									displayText={`<i class="cib-github"></i>`}
									additionalClasses={[
										'default',
										'rounded-100vh',
										'leading-0',
										'ml-15',
										'p-16',
										'text-24',
										'bg-[#171515]',
										'text-white',
									]}
								/>
							</a>
						</Link>
					</div>
				</div>
				<div className="p-15 md:hidden">
					<div
						className={`${styles.headerInner} p-15 rounded-12 bg-gray-100`}
					>
						<p className="text-16 text-bold pb-5 border-b-2 border-gray-200">
							Categories
						</p>
						<ul className="flex flex-wrap m-minus-5 pt-15">
							{categories.map((category, index) => {
								return (
									<Link
										key={index}
										href={`/categories/${category.slug}`}
									>
										<a>
											<li>
												<NeumorphismButton
													unevenness={'bumps'}
													displayText={category.name}
													additionalClasses={[
														'default',
														'rounded-100vh',
														'leading-0',
														'm-5',
														'p-16',
														'text-14',
														'bg-white',
													]}
												/>
											</li>
										</a>
									</Link>
								)
							})}
						</ul>
					</div>
				</div>
				<div className="mt-30 p-15 md:hidden">
					<div
						className={`${styles.headerInner} p-15 rounded-12 bg-gray-100`}
					>
						<p className="text-16 text-bold pb-5 border-b-2 border-gray-200">
							Profile
						</p>

						<div className="mt-15">
							<Link href="https://twitter.com/?lang=ja">
								<a target="_blank">
									<NeumorphismButton
										unevenness={'bumps'}
										displayText={`<i class='cib-twitter'></i>`}
										additionalClasses={[
											'default',
											'rounded-100vh',
											'leading-0',
											'p-10',
											'text-24',
											'bg-white',
										]}
									/>
								</a>
							</Link>
							<Link href="https://qiita.com/">
								<a target="_blank">
									<NeumorphismButton
										unevenness={'bumps'}
										displayText={`<i class='cib-qiita'></i>`}
										additionalClasses={[
											'default',
											'rounded-100vh',
											'leading-0',
											'ml-15',
											'p-10',
											'text-24',
											'bg-white',
										]}
									/>
								</a>
							</Link>
							<Link href="https://github.com/io-kobayashiii/techblog">
								<a target="_blank">
									<NeumorphismButton
										unevenness={'bumps'}
										displayText={`<i class="cib-github"></i>`}
										additionalClasses={[
											'default',
											'rounded-100vh',
											'leading-0',
											'ml-15',
											'p-10',
											'text-24',
											'bg-white',
										]}
									/>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
