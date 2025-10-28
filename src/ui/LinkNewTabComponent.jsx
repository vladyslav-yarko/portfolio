import Link from "next/link"


export default function LinkNewTabComponent({ link, children }) {

    return (
        <Link target="_blank" href={link}>
            {children}
        </Link>
    )
}
