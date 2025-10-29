export default function NavHamburgerIcon(props) {
	return (
		<div className='hamburgerIcon'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width="100%"
				height="100%"
				viewBox='0 0 512 512'
				{...props}
			>
				{/* Icon from Game Icons by GameIcons - https://github.com/game-icons/icons/blob/master/license.txt */}
				<path
					fill='currentColor'
					d='M32 96v64h448V96zm0 128v64h448v-64zm0 128v64h448v-64z'
				/>
			</svg>
		</div>
	)
}
