import Link from "next/link"


export default function LinkNewTabComponent({ link, children }) {

    return (
        <Link href={link}>
            <a target="_blank">
                {children}
            </a>
        </Link>
    )
}
