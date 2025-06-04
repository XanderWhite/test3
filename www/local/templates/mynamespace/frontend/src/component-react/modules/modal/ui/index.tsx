import { createRoot } from 'react-dom/client'
import { observer } from 'mobx-react-lite'

import Store from '../lib/Store'

import styles from './index.module.scss'
import { useCallback } from 'react'

const Modal = observer(() => {
	const { modalState, modalComponent, changeModalState } = Store

	const closeModal = useCallback(() => {
		changeModalState(false)
	}, [])

	if(!modalState)
		return null

	return (
		<div className={styles.root}>
			<div className={styles.bg} onClick={closeModal}>
				<div className={styles.buttonWrapper}>
					<div className={styles.close} onClick={closeModal}>
						X
						{/* <CloseIcon /> */}
					</div>
				</div>
			</div>
			<div className={styles.content}>
				{modalComponent}
			</div>
		</div>

	)
})

document.addEventListener('DOMContentLoaded', () => {
	const root = createRoot(document.getElementById('modal') as HTMLElement)
	root.render(<Modal />)
})

export { Modal }