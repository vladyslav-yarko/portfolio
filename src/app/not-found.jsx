import NotFoundIcon from "@/ui/NotFoundIcon"
import ButtonPrimary from "@/ui/ButtonPrimary"
import LinkComponent from "@/ui/LinkComponent"


export default function NotFoundPage() {

	return (
		<div>
			<div className='flex justify-center items-center'>
				<NotFoundIcon className='notFoundIcon' />
				<h2>Page not found</h2>
			</div>
			<div className='flex justify-center items-center'>
				<div className='notFoundButton'>
					<ButtonPrimary>
						<h2 className='w-full h-full'>
							<LinkComponent title='Return to home' link='/' onClick={null} />
						</h2>
					</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}
