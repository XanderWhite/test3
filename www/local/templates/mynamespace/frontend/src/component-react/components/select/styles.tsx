import { createUseStyles } from 'react-jss'

export const useDefaultSelect = createUseStyles<string, any>({
	defaultSelect: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		cursor: 'pointer',
		backgroundColor: 'red',

		'&.disabled': {
			'pointerEvents': 'none',
		},

		'& div.title': {
			position: 'relative',
			width: '100%',
			overflow: 'hidden',
			textOverflow: 'ellipsis',

			'&::before': {
				position: 'absolute',
				top: '50%',
				zIndex: 1,
				content: `''`,
			}
		},

		'& div.title.open': {
			'&::before': {
				transform: 'translateY(-50%) rotate(180deg)',
			}
		},

		'& div.select': {
			display: 'block',
			position: 'absolute',
			top: '100%',
			left: 0,
			zIndex: 99,
			width: '100%',
			overflowY: 'auto',
			overflowX: 'hidden',
		},

		'& div.option': {
			lineHeight: 1,
		},
	},
})
