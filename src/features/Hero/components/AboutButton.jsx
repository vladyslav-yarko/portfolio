import ButtonComponent from "@/ui/ButtonComponent"
import LinkComponent from "@/ui/LinkComponent"


export default function AboutButton() {

    return (
        <div>
            <ButtonComponent>
                <LinkComponent 
                    title="About me"
                    link="/about"
                    onClick={null}
                />
            </ButtonComponent>
        </div>
    )
}
