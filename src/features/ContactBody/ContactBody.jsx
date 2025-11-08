import Github from "@/ui/Github"
import LinkedIn from "@/ui/LinkedIn"
import Discord from "@/ui/Discord"


export default function ContactBody() {

    return (
			<div className='contactBody'>
				<div className='contactBodyItem'>
					<Github />
				</div>
				<div className='contactBodyItem'>
					<LinkedIn />
				</div>
                <div className="contactBodyItem">
                    <Discord />
                </div>
			</div>
		)
}
