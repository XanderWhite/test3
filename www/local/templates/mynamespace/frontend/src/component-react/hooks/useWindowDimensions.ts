import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

const useWindowDimensions = (): object => {
	const [size, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	// выполняем 1 раз
	useEffect(() => {
		// делаем функцию
		const resizeHandler = throttle((e: UIEvent)  => {
			const w = e.target as Window
			setWindowSize({
				width: w.innerWidth,
				height: w.innerHeight
			})
		}, 100)

		// подписываем на событие при монтировании
		window.addEventListener('resize', resizeHandler)

		// отписываемся от события при размонтировании
		return (): void => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [])

	return size
}

export default useWindowDimensions
