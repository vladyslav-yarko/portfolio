export default function LoadingState(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 48 48'
			{...props}
		>
			{/* Icon from IconPark Outline by ByteDance - https://github.com/bytedance/IconPark/blob/master/LICENSE */}
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='4'
				d='M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464'
			/>
		</svg>
	)
}
