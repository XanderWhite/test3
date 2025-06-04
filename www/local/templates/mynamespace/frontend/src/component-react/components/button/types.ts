export type Icon = {
	src: React.ReactNode
	align: string
}

export type Options = {
	canActive?: boolean
	forceActive?: boolean
	activeClass?: string
	Ico?: Icon | null
	disabled?: boolean
}

export type Props = {
	text: string
	handler?: () => void
	size?: string
	override?: boolean
	classes?: string
	options?: Options
}