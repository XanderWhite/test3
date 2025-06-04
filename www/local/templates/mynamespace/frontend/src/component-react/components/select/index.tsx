import React, { useCallback, useRef } from 'react'
import clsx from 'clsx'

import useSelect from './hooks'

import { useDefaultSelect } from './styles'

import { SelectT } from './types'

const Select: React.FC<SelectT> = ({
	options,
	disabled,
	isValid,
	placeholder,
	handler,
	classes,
	clear
}) => {
	const defaultStyles = useDefaultSelect().defaultSelect
	const selectRef = useRef<HTMLLabelElement>(null),

		{
			curOption,
			showOptions,
			setShowOptions,
			setCurOption,
		} = useSelect(clear!, selectRef),

		onClickHandler = useCallback((value: string) => {
			setCurOption(value)
			setShowOptions(false)

			if(handler)
				handler(value)
		}, [])

	return (
		<label className={clsx(defaultStyles, classes, {
			['disabled']: disabled,
			})}
			ref={selectRef}
		>
			<div className={clsx('title', {
				['open']: showOptions,
				['error']: isValid,
			})} onClick={() => setShowOptions(!showOptions)}>
				{ curOption ? curOption : placeholder }
			</div>
			{showOptions &&
			<div className='select'>
				{options.map(item => (
					<div
						key={item.name}
						className={clsx('option', {
							['active']: curOption === item.value,
						})}
						onClick={() => onClickHandler(item.value) }
					>
					{ item.name }
					</div>
				))}
			</div>
			}
		</label>
	)
}

export default React.memo(Select)
