import ImageComponent from "@/ui/ImageComponent"
import Title from "./components/Title"
import Tagline from "./components/Tagline"
import AboutButton from "./components/AboutButton"
import ContactButton from "./components/ContactButton"
import StackButton from "./components/StackButton"


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
            <AboutButton />
            <StackButton />
            <ContactButton />
        </div>
    )
}
