import { createUseStyles } from 'react-jss'

type RuleNames = 'svgContainer'

type useCommonSvgStrokeTransitionType = {
	timing?: string
	activeColor?: string
	type?: string
}

export const useCommonSvgStrokeTransition = createUseStyles<RuleNames, any>({
	svgContainer: {
		'& div': {
			display: 'flex',
			alignItems: 'center'
		},

		'& svg path': {
			transition: props => `stroke ${props.timing ?? '0.3s'}, fill ${props.timing ?? '0.3s'}`
		},

		'&:hover svg path': {
			'stroke': props => props.type === 'stroke' ? props.activeColor : '',
			'fill': (props: useCommonSvgStrokeTransitionType) => props.type === 'fill' ? props.activeColor : '',
		},

		'&.active svg path': {
			'stroke': props => props.type === 'stroke' ? props.activeColor : '',
			'fill': (props: useCommonSvgStrokeTransitionType) => props.type === 'fill' ? props.activeColor : '',
		},

		'& .c-right-ico': {
			order: 1
		}
	}
})