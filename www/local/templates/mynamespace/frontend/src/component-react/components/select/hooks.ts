import { useEffect, useState, useCallback, RefObject } from 'react'

const useSelect = (clear: boolean, ref: RefObject<HTMLLabelElement | null>) => {
	const [curOption, setCurOption] = useState<string | null>(null)
	const [showOptions, setShowOptions] = useState<boolean>(false)

	useEffect(() => {
		if(ref.current) {
			const outsideMenuClickHandler = (e: Event) => {
				if(ref.current && !ref.current.contains(e.target as HTMLElement))
					setShowOptions(false)
			}

			document.addEventListener('click', outsideMenuClickHandler)

			return () => {
				document.removeEventListener('click', outsideMenuClickHandler)
			}
		}
	}, [ref])

	useEffect(() => {
		if(clear) {
			setCurOption(null)
		}
	}, [clear])

	return {
		curOption,
		setCurOption,
		showOptions,
		setShowOptions,
	}
}

export default useSelect