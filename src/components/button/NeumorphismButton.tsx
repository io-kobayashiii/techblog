import * as React from 'react'

type Props = {
	unevenness: 'dents' | 'bumps'
	shadowColor: 'default' | 'primary'
	displayText: string
	className?: string
}

const NeumorphismButton = ({ unevenness, shadowColor, displayText, className }: Props): JSX.Element => {
	const getStyle = () => {
		switch (true) {
			case unevenness == 'dents' && shadowColor == 'default':
				return { boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset, -2px -2px 2px 0 rgba(255, 255, 255, 0.5) inset' } as React.CSSProperties
			case unevenness == 'dents' && shadowColor == 'primary':
				return { boxShadow: '2px 2px 2px 0 rgba(6, 13, 19, 0.5) inset, -2px -2px 2px 0 rgba(231, 231, 231, 0.5) inset' } as React.CSSProperties
			case unevenness == 'bumps' && shadowColor == 'default':
				return { boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.5)' } as React.CSSProperties
			case unevenness == 'bumps' && shadowColor == 'primary':
				return { boxShadow: '2px 2px 2px 0 rgba(4, 9, 14, 0.5), -2px -2px 2px 0 rgba(36, 81, 129, 0.5)' } as React.CSSProperties
		}
	}
	return <button className={`${className ? className : ''} ${unevenness == 'dents' ? 'cursor-auto pointer-events-none' : ''}`} style={getStyle()} dangerouslySetInnerHTML={{ __html: displayText }}></button>
}

export default NeumorphismButton
