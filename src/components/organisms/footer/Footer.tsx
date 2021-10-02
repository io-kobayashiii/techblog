import * as React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'
import NeumorphismButton from '../../atoms/button/NeumorphismButton'

const Footer = ({ categories }): JSX.Element => {
	return (
		<>
			<footer className={`${styles.default} py-30 md:py-50 bg-white`}>
				<div className="max-w-1000 mx-auto px-15 md:px-30">
					<div className="hidden md:block">
						<div
							className={`${styles.footerInner} p-15 md:p-30 rounded-12 bg-gray-100`}
						>
							<p className="text-16 text-bold pb-5 border-b border-gray-700">
								Categories
							</p>
							<ul className="flex flex-wrap m-minus-5 pt-15">
								{categories.map((category, index) => {
									return (
										<Link
											key={index}
											href={`/category/${category}`}
										>
											<a>
												<li>
													<NeumorphismButton
														unevenness={'bumps'}
														displayText={category}
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
					<div className="mt-30 hidden md:block">
						<div
							className={`${styles.footerInner} p-15 md:p-30 rounded-12 bg-gray-100`}
						>
							<p className="text-16 text-bold pb-5 border-b border-gray-700">
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
				</div>
				<div className="text-12 text-center md:mt-50">
					&copy; {new Date().getFullYear()} io-kobayashiii All Rights
					Reserved.
				</div>
			</footer>
		</>
	)
}

export default Footer
