'use client';

import React, {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ComponentProps,
	MouseEventHandler,
	useState,
} from 'react';
import Select from './Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { redirect } from 'next/navigation';
import { faAngleDown, faLanguage, faListDots } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

const toggleMenu = () => {
	const header = document.getElementById('header');
	const menu = document.getElementById('mobile-menu');

	if (!menu) return;

	menu.classList.toggle('h-screen');

	document.getElementById('menu-reveal')?.classList.toggle('hidden');
	document.getElementById('menu-collapse')?.classList.toggle('hidden');

	if (header) {
		header.classList.toggle('backdrop-blur-md');
		header.classList.toggle('backdrop-blur-lg');
		header.classList.toggle('bg-opacity-60');
		header.classList.toggle('bg-opacity-80');
	}
};

export function HeaderNavButton(params: ComponentProps<'button'>) {
	return <button onClick={toggleMenu} {...params} />;
}

export function HeaderNavMenu(params: ComponentProps<'nav'>) {
	return <nav {...params} />;
}

interface BaseMenuItemProps {
	icon?: IconProp;
	label: string;
}

interface MenuItemProps extends BaseMenuItemProps, AnchorHTMLAttributes<HTMLAnchorElement> {}

export function MenuItem({
	icon,
	label,
	href,
	onClick: clickAction = undefined,
	...props
}: MenuItemProps) {
	const performLinkWithAction: MouseEventHandler<HTMLAnchorElement> = (e) => {
		toggleMenu();
		clickAction?.(e);
	};

	return (
		<Link
			href={href as Url}
			onClick={performLinkWithAction}
			className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-5 py-5 text-secondary-100 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-50 active:bg-opacity-20'
			tabIndex={0}
			{...props}>
			<FontAwesomeIcon icon={icon ?? faListDots} className='mr-3 w-6' />
			{label}
		</Link>
	);
}

interface MenuSubMenuItem extends BaseMenuItemProps, ButtonHTMLAttributes<HTMLButtonElement> {}

export function MenuSubMenu({
	icon,
	label,
	children,
	onClick: clickAction = undefined,
	...props
}: MenuSubMenuItem) {
	const [isOpen, setIsOpen] = useState(false);

	const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		setIsOpen(!isOpen);
		clickAction?.(e);
	};

	return (
		<div>
			<button
				onClick={handleButtonClick}
				className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-5 py-5 text-left text-secondary-100 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-50 active:bg-opacity-20'
				{...props}>
				<FontAwesomeIcon icon={icon ?? faListDots} className='mr-3 w-6' />
				{label}
				<FontAwesomeIcon
					icon={faAngleDown}
					size={'sm'}
					className={`ml-2 w-6 ${isOpen ? 'rotate-180 scale-[0.8] text-secondary-400' : 'rotate-0 text-secondary-300'} transition-transform duration-300 motion-reduce:scale-100 motion-reduce:transition-none`}
				/>
			</button>
			<div
				className={`w-full ${isOpen ? 'my-1 max-h-48 scale-y-100 opacity-100' : 'max-h-0 scale-y-75 opacity-30'} flex items-stretch justify-start overflow-hidden px-5 transition-all duration-500 motion-reduce:transition-none`}>
				<div className='mr-1 w-1 rounded-sm bg-foreground opacity-10'></div>
				<ul className='flex-grow'>{children}</ul>
			</div>
		</div>
	);
}

interface HeaderLanguagePickerProps {
	langPickerAria: string;
}

export function HeaderLanguagePicker({ langPickerAria }: HeaderLanguagePickerProps) {
	return (
		<Select
			icon={<FontAwesomeIcon icon={faLanguage} size='lg' />}
			options={[
				{ label: 'Español', value: 'es' },
				{ label: 'English', value: 'en' },
				{ label: '日本語', value: 'ja' },
			]}
			action={(value) => redirect(`/${value}`)}
			className='hover:bg-secondary-800'
			aria-label={langPickerAria}
			noPickedDisplay
		/>
	);
}
