const createInterfaceStub = (name) => {
	return `export interface ${name}ApiI {

}`
}

const createApiStub = (name) => {
	return `import axios from 'axios'

import { ${name}ApiI } from './types'
import { ResponseT } from 'api/types'

class ${name}Api implements ${name}ApiI {
	instance = axios.create({
		baseURL: '/api/',
		timeout: 5000,
		headers: {
			'Content-Type': 'application/json'
		}
	})

	constructor() {
	}
}

const instance = new ${name}()
export default instance`
}

module.exports = { createApiStub, createInterfaceStub }