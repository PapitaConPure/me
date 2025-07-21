'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { defaultLocale, isValidLocale } from '@/lib/i18n';

interface LanguageRedirectProps {
	targetPath: string;
}

function LanguageRedirect({ targetPath }: LanguageRedirectProps) {
	useEffect(() => {
		const userLang = navigator.language?.slice(0, 2) ?? defaultLocale;
		const lang = isValidLocale(userLang) ? userLang : defaultLocale;
        const normalizedPath = targetPath?.startsWith('/') ? targetPath : `/${targetPath || ''}`;

		return redirect(`/${lang}${normalizedPath}`);
	}, [targetPath]);

	return null;
}

export default LanguageRedirect;
