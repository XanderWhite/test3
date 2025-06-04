const createCommonStub = (name) => {
	return `import React from 'react'

import styles from './index.module.scss'

const ${name}: React.FC = () => {
	return (
		<div className={styles.root}>
			${name}
		</div>
	)
}

export { ${name} }
`
}

module.exports = createCommonStub