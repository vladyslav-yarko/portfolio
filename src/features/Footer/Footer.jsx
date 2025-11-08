import Github from "@/ui/Github"
import LinkedIn from "@/ui/LinkedIn"


export default function Footer() {

    return (
			<div className='footer'>
				<div className='footerItem'>
					<Github />
				</div>
				<div className='footerItem'>
					<LinkedIn />
				</div>
			</div>
		)
}
