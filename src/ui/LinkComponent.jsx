'use client'

import Link from 'next/link'

export default function LinkComponent({ title, link, onClick }) {
	return (
		<Link
			href={link}
			onClick={onClick}
			className='flex items-center justify-center w-full h-full'
		>
			{title}
		</Link>
	)
}
