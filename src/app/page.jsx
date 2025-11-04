import Hero from "@/features/Hero"


export default async function HomePage() {
    async function wait(seconds) {
			return new Promise(resolve => setTimeout(resolve, seconds * 1000))
		}
    await wait(5)

    return (
        <div> 
            <Hero />
        </div>
    )
}

// className = 'home'
