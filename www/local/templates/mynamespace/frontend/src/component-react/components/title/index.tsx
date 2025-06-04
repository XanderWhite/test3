import React from 'react'

import styles from './index.module.scss'

type CommonTitleT = {
	children: string,
}

const Title: React.FC<CommonTitleT> = ({ children }) => {
	return <h1 className={styles.root}>{children}</h1>
}

export default React.memo(Title)