import ImageComponent from "@/ui/ImageComponent"
import Title from "./components/Title"


export default function Hero() {

    return (
        <div>
            <ImageComponent 
                src="/personal.jpg"
                alt="profile photo"
                width={200}
                height={200}
            />
            <Title />
        </div>
    )
}
