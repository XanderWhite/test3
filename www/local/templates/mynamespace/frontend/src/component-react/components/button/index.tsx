import React from 'react'
import clsx from 'clsx'

import { Props } from './types'

import useButton from './buttonHooks'

const Button: React.FC<Props> = (props: Props) => {
	const { activeClass, classesList, currentSize, isActive, onClickHandler, currentAlign } = useButton(props)

	return (
		<button
			onClick={onClickHandler}
			className={clsx(classesList, currentSize, {
					[activeClass]: isActive,
					['disabled']: props.options?.disabled,
				})
			}
		>
			{props.options?.Ico && <div className={currentAlign}>{props.options!.Ico.src}</div>}
			<span>
				{props.text}
			</span>
		</button>
	)
}

export default React.memo(Button)