import ButtonPrimary from "@/ui/ButtonPrimary"
import LinkComponent from "@/ui/LinkComponent"


export default function StackButton() {

    return (
        <div className="heroPrimaryButton">
            <ButtonPrimary>
                <LinkComponent 
                    title="My stack"
                    link="/stack"
                    onClick={null}
                />
            </ButtonPrimary>
        </div>
    )
}
