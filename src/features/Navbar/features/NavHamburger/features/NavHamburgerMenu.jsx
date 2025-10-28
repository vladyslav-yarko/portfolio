import NavHamburgerMenuItem from "../components/NavHamburgerMenuItem"


export default function NavHamburgerMenu() {

    return (
        <div>
            <NavHamburgerMenuItem title="Home" link="/"/>
            <NavHamburgerMenuItem title="About" link="/about"/>
            <NavHamburgerMenuItem title="Stack" link="/stack"/>
            <NavHamburgerMenuItem title="Projects" link="/projects"/>
            <NavHamburgerMenuItem title="Contact" link="/contact"/>
        </div>
    )
}
