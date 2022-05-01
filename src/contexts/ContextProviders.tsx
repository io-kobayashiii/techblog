import * as React from 'react'
import { GlobalNavigationStateContextProvider } from './GlobalNavigationStateContext'

const ContextProviders = ({ children }): JSX.Element => {
	return <GlobalNavigationStateContextProvider>{children}</GlobalNavigationStateContextProvider>
}

export default ContextProviders
