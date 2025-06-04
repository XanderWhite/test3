const reExportStub = (name) => {
	return `export { ${name} } from './ui'`
}

module.exports = reExportStub