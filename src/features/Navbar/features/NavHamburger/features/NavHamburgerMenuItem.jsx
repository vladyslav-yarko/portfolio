import { useContext } from "react"

import LinkComponent from "@/ui/LinkComponent"

import { NavbarContext } from "@/context/NavbarConext"


export default function NavHamburgerMenuItem({ title, link }) {
    const { setMenuOpened } = useContext(NavbarContext)

    const closeMenu = () => {
        setMenuOpened(false)
    }

    return (
        <div>
            <LinkComponent title={title} link={link} onClick={() => closeMenu()}/>
        </div>
    )
}
