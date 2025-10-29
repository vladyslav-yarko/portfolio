"use client"

import { useContext } from "react"

import NavHamburgerIcon from "./components/NavHamburgerIcon"
import NavHamburgerMenu from "./features/NavHamburgerMenu"

import { NavbarContext } from "@/context/NavbarConext"


export default function NavHamburger() {
    const { menuOpened, setMenuOpened } = useContext(NavbarContext)

    const toggleMenu = () => {
        setMenuOpened(prev => !prev)
    }

    return (
        <div className="relative">
            <NavHamburgerIcon onClick={() => toggleMenu()} menuOpened={menuOpened}/>
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
