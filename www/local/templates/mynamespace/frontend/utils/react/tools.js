const fs = require('fs')

const pathToReactComponents = 'src/component-react/'
const pathToCommonBlocks = 'src/block/common-blocks'

const createModule = (name) => {
	const reExportStub = require('./stubs/reExport.js')
	const createModuleStub = require('./stubs/module.js')

	console.clear()

	if(!name)
		return console.error('\x1b[41m', 'Введите имя модуля', '\x1b[0m')

	const path = `${pathToReactComponents}modules/`
	fs.mkdirSync(`${path}${name}/lib`, { recursive: true })
	fs.mkdirSync(`${path}${name}/ui`, { recursive: true })
	fs.mkdirSync(`${path}${name}/store`, { recursive: true })

	try {
		fs.writeFileSync(`${path}${name}/index.tsx`, reExportStub(name))
		fs.writeFileSync(`${path}${name}/ui/index.tsx`, createModuleStub(name))
	} catch (err) {
		console.error(err)
	}

	return console.log(`Module ${name} successfully created. Path: ${path}${name}`)
}

const removeModule = (name) => {
	const path = `${pathToReactComponents}modules/`

	fs.rmSync(`${path}${name}`, { recursive: true, force: true })

	console.log(`Module ${name} successfully removed. Path: ${path}${name}`)
}

const createApp = (name) => {
	const reExportStub = require('./stubs/reExport.js')
	const createAppStub = require('./stubs/app.js')

	console.clear()

	if(!name)
		return console.error('\x1b[41m', 'Введите имя App', '\x1b[0m')

	const path = `${pathToReactComponents}apps/`
	fs.mkdirSync(`${path}${name}/lib`, { recursive: true })
	fs.mkdirSync(`${path}${name}/ui`, { recursive: true })
	fs.mkdirSync(`${path}${name}/store`, { recursive: true })
	fs.mkdirSync(`${path}${name}/controllers`, { recursive: true })
	fs.mkdirSync(`${path}${name}/pages`, { recursive: true })

	try {
		fs.writeFileSync(`${path}${name}/index.tsx`, reExportStub(name))
		fs.writeFileSync(`${path}${name}/ui/index.tsx`, createAppStub(name))
	} catch (err) {
		console.error(err)
	}

	return console.log(`App ${name} successfully created. Path: ${path}${name}`)
}

const removeApp = (name) => {
	const path = `${pathToReactComponents}apps/`

	fs.rmSync(`${path}${name}`, { recursive: true, force: true })

	console.log(`App ${name} successfully removed. Path: ${path}${name}`)
}

const createComponent = (name) => {
	const createCommonStub = require('./stubs/common.js')
	const createStylesStub = require('./stubs/styles.js')

	console.clear()

	if(!name)
		return console.error('\x1b[41m', 'Введите имя компонента', '\x1b[0m')

	const path = `${pathToReactComponents}components/`
	fs.mkdirSync(`${path}${name}`, { recursive: true })

	try {
		fs.writeFileSync(`${path}${name}/index.tsx`, createCommonStub(name))
		fs.writeFileSync(`${path}${name}/index.module.scss`, createStylesStub(name))
	} catch (err) {
		console.error(err)
	}

	return console.log(`Component ${name} successfully created. Path: ${path}${name}`)
}

const createMobxStore = (path, name) => {
	const mobxStores = require('./stubs/mobxStore.js')
	const mobxStoreInterfaces = require('./stubs/mobxStoreInterface.js')

	if(!path)
		return console.error('\x1b[41m', 'Введите путь, где необходимо создать Mobx Store', '\x1b[0m')

	const pathAndName = path.split('/')
	const pathForWrite = `${pathToReactComponents}${pathAndName[0]}/`

	try {
		if(!name) {
			fs.writeFileSync(`${pathForWrite}${pathAndName.at(-1)}/store/index.ts`, mobxStores.createMobxStoreStub('Root'))
			fs.writeFileSync(`${pathForWrite}${pathAndName.at(-1)}/store/types.ts`, mobxStoreInterfaces.createMobxStoreInterfaceStub('Root'))
		} else {
			fs.writeFileSync(`${pathForWrite}${pathAndName.at(-1)}/store/${name}Store.ts`, mobxStores.createNamedMobxStoreStub(name))
			fs.appendFileSync(`${pathForWrite}${pathAndName.at(-1)}/store/types.ts`, mobxStoreInterfaces.createNamedMobxStoreInterfaceStub(name))
		}
	} catch(err) {
		console.error(err)
	}
}

const createCasesString = (arr) => {
	let result = ''

	arr.forEach((e, i) => {
		result += `${i > 0 ? '\n\t\t\t' : ''}case '${e.block}':`

		e.files.forEach(paths => {
			result += `\n\t\t\t\timport('src/block/common-blocks/${e.block}/${paths}')`
		})

		result += '\n\t\t\t\tbreak;'
	})

	return result
}

const createFileContent = (arr) => {
	const cases = createCasesString(arr)

	return `const importCommonBlocks = (arr) => {
	arr.forEach(e => {
		switch(e) {
			${cases}
		}
	})
}

export { importCommonBlocks }`
}

const updateImporterPaths = () => {
	if(!fs.existsSync(pathToCommonBlocks))
		return console.error('\x1b[46m', `Отстутствует директория: ${pathToCommonBlocks}`, '\x1b[0m')

	const path = require('path')

	const blocks = fs.readdirSync(pathToCommonBlocks, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)

	if(blocks.length === 0)
		return console.error('\x1b[46m', `Отстутствуют блоки в директории: ${pathToCommonBlocks}`, '\x1b[0m')

	const blocksData = []

	blocks.forEach(e => {
		const files = fs.readdirSync(`${pathToCommonBlocks}/${e}/`, { withFileTypes: true }).map(dirent => dirent.name)

		const obj = {
			block: e,
			files: []
		}

		files.forEach(file => {
			if(path.extname(file) !== '.php')
				obj.files.push(file)
		})

		blocksData.push(obj)
	})

	const result = createFileContent(blocksData)

	fs.writeFileSync('src/component/importer.js', result)

	console.log('\x1b[36m', `\n\n${result}\n\n`, '\x1b[0m')
}

const createApi = (name) => {
	const api = require('./stubs/api.js')

	console.clear()

	const path = 'src/api/'

	if(!name)
		return console.error('\x1b[41m', 'Введите имя компонента', '\x1b[0m')

	fs.mkdirSync(`${path}${name}`, { recursive: true })

	try {
		fs.writeFileSync(`${path}${name}/index.ts`, api.createApiStub(name))
		fs.writeFileSync(`${path}${name}/types.ts`, api.createInterfaceStub(name))
		fs.writeFileSync(`${path}${name}/actions.ts`, '')
	} catch (err) {
		console.error(err)
	}

	return console.log(`Api ${name} successfully created. Path: ${path}${name}`)
}

module.exports = { createModule, removeModule, createApp, removeApp, createComponent, createMobxStore, updateImporterPaths, createApi }
