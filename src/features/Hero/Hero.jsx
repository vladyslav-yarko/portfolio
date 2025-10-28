import ImageComponent from "@/ui/ImageComponent"
import Title from "./components/Title"
import Tagline from "./components/Tagline"


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
            <Tagline />
        </div>
    )
}
