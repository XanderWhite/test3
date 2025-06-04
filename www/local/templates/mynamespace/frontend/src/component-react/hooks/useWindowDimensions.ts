import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

const useWindowDimensions = (): object => {
	const [size, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	useEffect(() => {
		const resizeHandler = throttle((e: UIEvent)  => {
			const w = e.target as Window
			setWindowSize({
				width: w.innerWidth,
				height: w.innerWidth
			})
		}, 100)

		window.addEventListener('resize', resizeHandler)

		return (): void => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [])

	return size
}

export default useWindowDimensions
