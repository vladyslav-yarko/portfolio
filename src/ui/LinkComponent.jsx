"use client"

import Link from "next/link"


export default function LinkComponent({ title, link, onClick }) {

    return (
        <div onClick={onClick}>
            <Link href={link}>{title}</Link>
        </div>
    )
}
