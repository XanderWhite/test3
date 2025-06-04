const ModalController = (modalComponent = '') => {
	let component = null

	switch (modalComponent) {
		case 'sendCheckWord':
			component = <div>компонент1</div>
			break
		case 'сhangePassword':
			component = <div>компонент2</div>
			break
		default:
			component = modalComponent
			break
	}

	return component

}

export default ModalController