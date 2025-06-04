import { useState, useEffect, useCallback } from 'react'
import { Props } from './types'

const useButton = (props: Props) => {
	const { handler, size, override, classes, options } = props

	const [isActive, setIsActive] = useState<boolean>(false)
	const [activeClass, setActiveClass] = useState<string>('defaultBtnActiveClass')
	const [classesList, setClassesList] = useState<string>(`button`)
	const [currentSize, setCurrentSize] = useState<string | null>('small')
	const [currentAlign, setCurrentAlign] = useState<string>('left')

	const onClickHandler = useCallback(() => {
		if(!handler)
			return null
		else {
			handler()
			if(options?.canActive)
				setIsActive(!isActive)
		}
	}, [handler, isActive])

	useEffect(() => {
		if(override) {
			if(!classes) {
				throw new Error('Override button must have prop classes')
			}

			setClassesList(classes!)
			setCurrentSize(null)
		} else {
			setClassesList(`${classesList} ${classes}`)

			if(size)
				setCurrentSize(size)

			if(options?.Ico?.src)
				setCurrentAlign(`c-${options?.Ico?.align}-ico`)

			if(options?.activeClass)
				setActiveClass(options!.activeClass)

			if(options?.forceActive)
				setIsActive(true)
		}

	}, [])

	return { onClickHandler, classesList, currentSize, isActive, activeClass, currentAlign }
}

export default useButton