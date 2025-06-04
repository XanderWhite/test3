const fs = require('fs')
const path = require('path')
const process = require('process')

class EntryBuilder {
	constructor() {
		this.basePath = 'src/block/'
		this.commonBlocksBasePath = 'src/block/common-blocks/'
		this.reactComponentsBasePath = 'src/component-react/'
		this._injectDefaultLayout = this._injectDefaultLayout.bind(this)
		this._createPathForPageBlocks = this._createPathForPageBlocks.bind(this)
		this._createPathsArrForAdditionalBlocks = this._createPathsArrForAdditionalBlocks.bind(this)
		this.__createPathsArrForReactComponents = this._createPathsArrForReactComponents.bind(this)
		this._catchError = this._catchError.bind(this)
	}

	_catchError(path) {
		if(!fs.existsSync(path)) {
			console.error('\x1b[46m', `Отсутствует директория: ${path}`, '\x1b[0m')
			process.exit()
		}
	}

	_injectDefaultLayout() {
		return `${this.basePath}layout`
	}

	_createPathForPageBlocks(pageBlocks) {
		// Если используется только папка common
		if(pageBlocks === '')
			return ''

		// Если используются несколько папок
		if(Array.isArray(pageBlocks)) {
			let blockList = []

			pageBlocks.forEach(pageBlock => {
				this._catchError(`${this.basePath}${pageBlock}`)

				blockList.push(`${this.basePath}${pageBlock}`)
			})

			return blockList
		}

		// Дефолтное поведение при использовании одной папки
		this._catchError(`${this.basePath}${pageBlocks}`)

		return `${this.basePath}${pageBlocks}`
	}

	_createPathsArrForAdditionalBlocks(additionalBlocks) {
		if(additionalBlocks.length === 0)
			return null

		const result = []

		additionalBlocks.forEach(e => {
			this._catchError(`${this.commonBlocksBasePath}${e}`)

			const files = fs.readdirSync(`${this.commonBlocksBasePath}${e}`, { withFileTypes: true }).map(dirent => dirent.name)

			const obj = {
				block: e,
				files: []
			}

			files.forEach(file => {
				if(path.extname(file) !== '.php')
					if(path.basename(file, '.ts') !== 'types')
						obj.files.push(`${this.commonBlocksBasePath}${e}/${file}`)
			})

			result.push(...obj.files)
		})

		return result
	}

	_createPathsArrForReactComponents(reactComponents) {
		if(reactComponents.length === 0)
			return null

		const result = []

		reactComponents.forEach(e => {
			this._catchError(`${this.reactComponentsBasePath}${e}`)

			const files = fs.readdirSync(`${this.reactComponentsBasePath}${e}`, { withFileTypes: true }).map(dirent => dirent.name)

			const obj = {
				block: e,
				files: []
			}

			files.forEach(file => {
				if(path.extname(file) === '.jsx' || path.extname(file) === '.js' || path.extname(file) === '.tsx' || path.extname(file) === '.ts')
					// обработка файла с названием index
					obj.files.push(`${this.reactComponentsBasePath}${e}/${file}`)
			})

			result.push(...obj.files)
		})

		return result
	}

	_createPathForAdditionalFiles(additionalFiles) {
		if(additionalFiles.length === 0)
			return null

		const result = []

		additionalFiles.forEach(file => {
			this._catchError(`src/${file}`)

			result.push(`src/${file}`)
		})

		return result
	}

	_createPathForLayout(layout) {
		this._catchError(`src/${layout}`)

		return `src/${layout}`
	}

	buildEntry(pageBlocks, additionalBlocks = [], reactComponents = [], layout = '', additionalFiles = []) {
		const buildedEntry = []
		const pageBlocksPath = this._createPathForPageBlocks(pageBlocks)
		const additionalBlocksPaths = this._createPathsArrForAdditionalBlocks(additionalBlocks)
		const reactComponentsPaths = this._createPathsArrForReactComponents(reactComponents)
		const additionalFilesPaths = this._createPathForAdditionalFiles(additionalFiles)
		const layoutPaths = this._createPathForLayout(layout)

		// base site styles
		buildedEntry.push('src/style/layout/base.scss')
		buildedEntry.push('src/block/common-components')
		// page components
		if(pageBlocksPath !== '') {
			if(typeof pageBlocksPath === 'string')
				buildedEntry.push(pageBlocksPath)
			else
				buildedEntry.push(...pageBlocksPath)
		}

		if(reactComponentsPaths !== null && reactComponentsPaths.length > 0)
			buildedEntry.push(...reactComponentsPaths)

		if(additionalBlocksPaths !== null && additionalBlocksPaths.length > 0)
			buildedEntry.push(...additionalBlocksPaths)

		if(layout === '')
			buildedEntry.push(this._injectDefaultLayout())
		else {
			buildedEntry.push(layoutPaths)
		}
		// обработка другого лейаута

		if(additionalFiles !== null && additionalFiles.length > 0)
			buildedEntry.push(...additionalFilesPaths)

		// обработка рандомных подключаемых файлов

		return buildedEntry
	}
}

module.exports = new EntryBuilder()