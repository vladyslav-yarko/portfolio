import NavHamburger from "./features/NavHamburger"
import ThemeToggler from "./features/ThemeToggler"


export default function Navbar() {

    return (
        <div className="flex">
            <NavHamburger />
            <ThemeToggler />
        </div>
    )
}
