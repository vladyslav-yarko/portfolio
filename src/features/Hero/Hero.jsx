import ImageComponent from "@/ui/ImageComponent"
import Title from "./components/Title"
import Tagline from "./components/Tagline"
import AboutButton from "./components/AboutButton"
import ContactButton from "./components/ContactButton"
import ProjectsButton from "./components/ProjectsButton"
import StackButton from "./components/StackButton"


export default function Hero() {

    return (
			<div className='hero'>
				<ImageComponent
					src='/personal.jpg'
					alt='profile photo'
					className='heroImage'
				/>
				<Title />
				<Tagline />
				{/* <AboutButton /> */}
				<StackButton />
				<ProjectsButton />
				<ContactButton />
			</div>
		)
}
