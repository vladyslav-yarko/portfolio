import ButtonPrimary from "@/ui/ButtonPrimary"
import LinkComponent from "@/ui/LinkComponent"


export default function ProjectsButton() {

    return (
            <div className='heroPrimaryButton'>
                <ButtonPrimary>
                    <h2 className='w-full h-full'>
                        <LinkComponent title='Projects' link='/projects' onClick={null} />
                    </h2>
                </ButtonPrimary>
            </div>
        )
}
