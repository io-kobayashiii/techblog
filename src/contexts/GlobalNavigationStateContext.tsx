import * as React from 'react'

export type GlobalNavigationStateContextProps = {
	isGlobalNavigationOpen: boolean
	setIsGlobalNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalNavigationStateContext = React.createContext({} as GlobalNavigationStateContextProps)

export const GlobalNavigationStateContextProvider = ({ children }: { children: any }) => {
	const [isGlobalNavigationOpen, setIsGlobalNavigationOpen] = React.useState(false)
	return <GlobalNavigationStateContext.Provider value={{ isGlobalNavigationOpen, setIsGlobalNavigationOpen }}>{children}</GlobalNavigationStateContext.Provider>
}
