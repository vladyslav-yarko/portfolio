import ButtonPrimary from "@/ui/ButtonPrimary"
import LinkComponent from "@/ui/LinkComponent"


export default function StackButton() {

    return (
			<div className='heroPrimaryButton'>
				<ButtonPrimary>
					<h2 className='w-full h-full'>
						<LinkComponent title='My stack' link='/stack' onClick={null} />
					</h2>
				</ButtonPrimary>
			</div>
		)
}
