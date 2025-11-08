import Github from "@/ui/Github"
import LinkedIn from "@/ui/LinkedIn"
import Discord from "@/ui/Discord"
import Telegram from "@/ui/Telegram"


export default function ContactBody() {

    return (
			<div className='contactBody'>
				<div className='contactBodyItem'>
					<Github />
				</div>
				<div className='contactBodyItem'>
					<LinkedIn />
				</div>
				<div className='contactBodyItem'>
					<Discord />
				</div>
				<div className='contactBodyItem'>
                    <Telegram />
                </div>
			</div>
		)
}
