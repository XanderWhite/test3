import { createUseStyles } from 'react-jss'
import { colors } from 'style/variables'



export const useButtonView = createUseStyles<string, any>({
    form:{
        margin: '40px 50px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },

    input: {
        padding: '10px 20px',
        fontSize: '14px',
        minWidth: '200px'
    },

	button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
		color: colors.colorActive,
		backgroundColor: colors.colorWhite,
        padding: '5px',
        border: '1px solid light-grey',
        transition: '0.3s',
        cursor: 'pointer',

		'&:hover': {
			backgroundColor: colors.colorWhite,
			color: colors.colorHover,
            scale: '1.05'
		},

		'&.active': {
			backgroundColor: colors.colorWhite,
			color: colors.colorHover,
		},
	},

    svg: {
        fill: 'black',
        width: '30px',
        height: '30px',
    }
})
