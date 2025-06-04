const createAppStub = (name) => {
	return `import React from 'react'

const ${name}: React.FC = () => {
	return (
		<div>
			${name}
		</div>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	const root = createRoot(document.getElementById('${name}') as HTMLElement)
	root.render(<${name} />)
})

export { ${name} }
`
}

module.exports = createAppStub