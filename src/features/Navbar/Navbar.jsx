import NavHamburger from "./features/NavHamburger"
import ThemeToggler from "./features/ThemeToggler"


export default function Navbar() {

    return (
        <nav className="navbar">
            <NavHamburger />
            <ThemeToggler />
        </nav>
    )
}
