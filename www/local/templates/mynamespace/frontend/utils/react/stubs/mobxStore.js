const createMobxStoreStub = (name) => {
	return `import { makeAutoObservable } from 'mobx'

import { ${name}StoreI } from './types'

class ${name}Store implements ${name}StoreI {

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}
}

const store = new ${name}Store()
export default store`
}

const createNamedMobxStoreStub = (name) => {
	return `import { makeAutoObservable } from 'mobx'

import { ${name}StoreI } from './types'

class ${name}Store implements ${name}StoreI {

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}
}

export default ${name}Store`
}

module.exports = { createMobxStoreStub, createNamedMobxStoreStub }