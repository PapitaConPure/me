'use client';

import React, { ComponentProps } from 'react';

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
