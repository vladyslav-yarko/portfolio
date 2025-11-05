export default function ButtonPrimary({ children, ...props }) {

    return (
			<div className='buttonPrimary'>
				<button {...props} className="w-full h-full">{children}</button>
			</div>
		)
}
