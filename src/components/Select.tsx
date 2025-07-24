'use client';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

type OptionValue = string | number | readonly string[] | undefined;

interface SelectOption<TValues extends OptionValue> {
	label: string;
	value: TValues;
}

interface SelectExtraPreferences {
	placeholder?: string;
	noPickedDisplay?: boolean;
	icon?: ReactNode;
}

interface SelectProps<TValue extends OptionValue>
	extends HTMLAttributes<HTMLDivElement>,
		SelectExtraPreferences {
	options: SelectOption<TValue>[];
	value?: TValue;
	action?: (value: TValue) => void;
}

function Select<TValue extends OptionValue = undefined>({
	options,
	value = undefined,
	action = () => {},
	placeholder,
	noPickedDisplay = false,
	icon = undefined,
	className = '',
	...props
}: SelectProps<TValue>) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(value);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSelect = (val: TValue) => {
		setSelected(val);
		action?.(val);
		setIsOpen(false);
	};

	const selectedLabel = options.find((opt) => opt.value === selected)?.label;

	return (
		<div
			ref={wrapperRef}
			className={`${className} relative inline-block w-fit rounded-md`}
			{...props}>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className='inline-flex items-center justify-between space-x-2 rounded-md py-2 pl-4 pr-3.5 text-sm shadow-sm focus:outline-none focus:ring-2'>
				{icon}
				{noPickedDisplay ? (
					placeholder && <span className='opacity-50'>{placeholder}</span>
				) : (
					<span className={selectedLabel ? '' : 'font-light opacity-50'}>
						{selectedLabel || placeholder || '...'}
					</span>
				)}
				<FontAwesomeIcon
					icon={faAngleDown}
					size='sm'
					className={`aspect-square text-secondary-300 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
				/>
			</button>

			{isOpen && (
				<ul className='absolute right-0 z-10 mt-1 max-h-60 w-full min-w-[150px] overflow-auto rounded-md border border-secondary-800 bg-background'>
					{options.map((opt, i) => (
						<li
							key={i}
							onClick={() => handleSelect(opt.value)}
							className='cursor-pointer px-4 py-2 hover:bg-secondary-800'>
							{opt.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Select;
