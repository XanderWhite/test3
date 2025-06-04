import { RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form'

export type SelectT = {
	options: Array<{
		name: string,
		value: string,
	}>
	classes: string
	placeholder: string
	handler?: any
	disabled?: boolean
	clear?: boolean
	isValid?: object | undefined
}