'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { defaultLocale, isValidLocale } from '@/lib/i18n';

interface LanguageRedirectProps {
	targetPath?: string;
}

function LanguageRedirect({ targetPath }: LanguageRedirectProps) {
    //Try to detect browser language or use default locale
	useEffect(() => {
		const userLang = navigator.language?.slice(0, 2) ?? defaultLocale;
		const lang = isValidLocale(userLang) ? userLang : defaultLocale;
        
        if(!targetPath || typeof targetPath !== 'string') return redirect(`/${lang}`);

        const normalizedPath = targetPath.startsWith('/') ? targetPath : `/${targetPath || ''}`;

		return redirect(`/${lang}${normalizedPath}`);
	}, [targetPath]);

	return null;
}

export default LanguageRedirect;
