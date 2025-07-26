'use client';

import { useEffect } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { defaultLocale, isValidLocale, locales } from '@/lib/i18n';

interface LanguageRedirectProps {
	targetPath?: string;
	conditional?: boolean;
}

function normalizePath(path: string) {
	return path.startsWith('/') ? path : `/${path || ''}`;
}

function isLocalizedPath(path: string) {
	const normalizedPath = normalizePath(path).slice(1);
	return locales.some((locale) => normalizedPath.startsWith(locale));
}

function LanguageRedirect({ targetPath, conditional }: LanguageRedirectProps) {
	const pathName = usePathname();

	useEffect(() => {
		if (conditional && isLocalizedPath(pathName)) return;

		const userLang = navigator.language?.slice(0, 2) ?? defaultLocale;
		const lang = isValidLocale(userLang) ? userLang : defaultLocale;

		return !targetPath || typeof targetPath !== 'string'
			? redirect(`/${lang}${pathName}`)
			: redirect(`/${lang}${normalizePath(targetPath)}`);
	}, [targetPath, conditional, pathName]);

	return null;
}

export default LanguageRedirect;
