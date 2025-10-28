import ButtonComponent from "@/ui/ButtonComponent"
import LinkComponent from "@/ui/LinkComponent"


export default function ContactButton() {

    return (
        <div>
            <ButtonComponent>
                <LinkComponent 
                    title="Contact with me"
                    link="/contact"
                    onClick={null}
                />
            </ButtonComponent>
        </div>
    )
}
