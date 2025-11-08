import Github from "@/ui/Github"
import LinkedIn from "@/ui/LinkedIn"


export default function ContactBody() {

    return (
			<div className='contactBody'>
				<div className='contactBodyItem'>
					<Github />
				</div>
				<div className='contactBodyItem'>
					<LinkedIn />
				</div>
			</div>
		)
}
