'use client'

// import { useRouter } from "next/navigation"
// import { startTransition } from "react"

import ErrorState from "@/ui/ErrorState"
import ButtonPrimary from "@/ui/ButtonPrimary"


export default function ErrorPage({ error, reset }) {
    // const router = useRouter()

    // const reload = () => { 
    //     startTransition(() => { 
    //         router.refresh() 
    //         reset() 
    //     }) 
    // }

    const reload = () => {
        window.location.reload()
    }

	return (
		<div>
			<div className='error'>
				<ErrorState className='errorIcon' />
				<h2>An error occured</h2>
			</div>
			<div className='flex justify-center'>
				<div className='errorButton'>
					<ButtonPrimary onClick={() => reload()}>
						<h2>Try again</h2>
					</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}
