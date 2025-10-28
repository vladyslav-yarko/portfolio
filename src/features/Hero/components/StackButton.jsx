import ButtonComponent from "@/ui/ButtonComponent"
import LinkComponent from "@/ui/LinkComponent"


export default function StackButton() {

    return (
        <div>
            <ButtonComponent>
                <LinkComponent 
                    title="My stack"
                    link="/stack"
                    onClick={null}
                />
            </ButtonComponent>
        </div>
    )
}
