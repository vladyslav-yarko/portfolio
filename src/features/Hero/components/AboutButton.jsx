import ButtonPrimary from "@/ui/ButtonPrimary"
import LinkComponent from "@/ui/LinkComponent"


export default function AboutButton() {

    return (
			<div className='heroPrimaryButton'>
				<ButtonPrimary>
					<h2>
						<LinkComponent title='About me' link='/about' onClick={null} />
					</h2>
				</ButtonPrimary>
			</div>
		)
}
