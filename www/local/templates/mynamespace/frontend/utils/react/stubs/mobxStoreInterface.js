const createMobxStoreInterfaceStub = () => {
	return `export interface RootStoreI {

}`
}

const createNamedMobxStoreInterfaceStub = (name) => {
	return `export interface ${name}StoreI {

}\n\n`
}

module.exports = { createMobxStoreInterfaceStub, createNamedMobxStoreInterfaceStub }