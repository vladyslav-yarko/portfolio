import "../styles/globals.css"

import Navbar from "@/features/Navbar";
import Footer from "@/features/Footer";
import { NavbarContextProvider } from "@/context/NavbarConext";


export const metadata = {
	title: 'a',
	description: 'a',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
		other: [
			{
				rel: 'manifest',
				url: '/site.webmanifest',
			},
		],
	},
}


export default function RootLayout({ children }) {
  	return (
		<html lang='en'>
			<body>
				<NavbarContextProvider>
					<Navbar />
				</NavbarContextProvider>
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
