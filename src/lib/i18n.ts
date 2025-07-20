export const locales = ['es', 'en', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

const messagesIndex = {
	es: () => import('../messages/es.json').then((module) => module.default),
	en: () => import('../messages/en.json').then((module) => module.default),
	ja: () => import('../messages/ja.json').then((module) => module.default),
};

export function isValidLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}

export async function getMessages(locale: Locale) {
	try {
		const messages = await messagesIndex[locale]();
		return messages;
	} catch {
		return undefined;
	}
}
