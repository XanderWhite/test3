const createModuleStub = (name) => {
	return `import React from 'react'

const ${name}: React.FC = () => {
	return (
		<div>
			${name}
		</div>
	)
}

export { ${name} }
`
}

module.exports = createModuleStub