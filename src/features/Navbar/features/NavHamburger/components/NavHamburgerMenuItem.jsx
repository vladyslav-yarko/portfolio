import LinkComponent from "@/ui/LinkComponent"


export default function NavHamburgerMenuItem({ title, link }) {

    return (
        <div>
            <LinkComponent title={title} link={link}/>
        </div>
    )
}
