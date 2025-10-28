"use client"

import { useState } from "react"

import NavHamburgerIcon from "./components/NavHamburgerIcon"
import NavHamburgerMenu from "./features/NavHamburgerMenu"


export default function NavHamburger() {
    const [ menuOpened, setMenuOpened ] = useState(false)

    const toggleMenu = () => {
        setMenuOpened(prev => !prev)
    }

    return (
        <div>
            <NavHamburgerIcon onClick={() => toggleMenu()}/>
            {
                menuOpened ? (
                    <NavHamburgerMenu />
                ) : (
                    null
                )
            }
        </div>
    )
}
