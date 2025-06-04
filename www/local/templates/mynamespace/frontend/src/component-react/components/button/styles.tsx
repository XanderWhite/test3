import { createUseStyles } from 'react-jss'
import { colors } from 'style/variables'

import { useCommonSvgStrokeTransition } from 'style/svgTransitionsPreset'

export const useButtonWithIcon = (type: string) => {
	const buttonSvg = useCommonSvgStrokeTransition({
		activeColor: colors.colorHover,
		timing: '0.3s',
		type: type
	}).svgContainer

	return {
		button: useButtonView().simpleButton,
		svg: buttonSvg
	}
}

export const useButtonView = createUseStyles<string, any>({
	simpleButton: {
		color: colors.colorActive,
		backgroundColor: colors.colorWhite,

		'&:hover': {
			backgroundColor: colors.colorWhite,
			color: colors.colorHover,
		},

		'&.active': {
			backgroundColor: colors.colorWhite,
			color: colors.colorHover,
		},
	}
})
