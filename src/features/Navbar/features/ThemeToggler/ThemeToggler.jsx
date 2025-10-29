"use client"

import { useEffect, useState } from "react"

import Sun from "./components/Sun"
import Moon from "./components/Moon"


export default function ThemeToggler() {
    const [ theme, setTheme ] = useState("light")

    useEffect(() => {
        const localTheme = localStorage.getItem("portfolioTheme")
        setTheme(localTheme)
    }, [])

    useEffect(() => {
        if (["dark", "light"].includes(theme)) {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('portfolioTheme', theme)
        } else {
            setTheme("light")
        }
    }, [theme])

    const updateTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
			<div onClick={() => updateTheme()} className='themeTogglerIcon'>
				{theme === 'dark' ? (
					<Sun width='100%' height='100%' />
				) : (
					<Moon width='100%' height='100%' />
				)}
			</div>
		)
}
