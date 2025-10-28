'use client'
import { createContext, useState } from 'react'


export const NavbarContext = createContext()


export const NavbarContextProvider = ({ children }) => {
    const [ menuOpened, setMenuOpened ] = useState(false)

	return (
		<NavbarContext.Provider value={{
            menuOpened, setMenuOpened
        }}>
			{children}
		</NavbarContext.Provider>
	)
}
