import Link from "next/link"


export default function LinkComponent({ title, link }) {

    return (
        <div>
            <Link href={link}>{title}</Link>
        </div>
    )
}
