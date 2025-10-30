import ButtonSecondary from "@/ui/ButtonSecondary"
import LinkComponent from "@/ui/LinkComponent"


export default function ContactButton() {

    return (
        <div className="heroSecondaryButton">
            <ButtonSecondary>
                <LinkComponent 
                    title="Contact with me"
                    link="/contact"
                    onClick={null}
                />
            </ButtonSecondary>
        </div>
    )
}
