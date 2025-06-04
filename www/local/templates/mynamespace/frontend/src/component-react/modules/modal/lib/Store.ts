import { makeAutoObservable } from 'mobx'

import ModalController from '../controller'

class ModalStore {
	modalState: boolean = false
	modalComponent: any = null

	constructor() {
		this.changeModalComponent = this.changeModalComponent.bind(this)
		this.changeModalState = this.changeModalState.bind(this)
		makeAutoObservable(this)
	}

	changeModalState(state: boolean) {
		this.modalState = state
	}

	changeModalComponent(component: any) {
		this.modalComponent = ModalController(component)
	}
}

const Store = new ModalStore()
export default Store