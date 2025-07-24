'use client';

import React, { ComponentProps } from 'react';
import Select from './Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { redirect } from 'next/navigation';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

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
	return <nav onClick={toggleMenu} {...params} />;
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
