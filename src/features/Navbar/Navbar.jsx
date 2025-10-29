import NavHamburger from "./features/NavHamburger"
import ThemeToggler from "./features/ThemeToggler"


export default function Navbar() {

    return (
        <div className="navbar">
            <NavHamburger />
            <ThemeToggler />
        </div>
    )
}
