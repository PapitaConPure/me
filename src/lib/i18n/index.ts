export const locales = ['es', 'en', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export type Messages = typeof import('../../messages/es.json');
export type SectionKey = keyof Messages;
export type Section<TSection extends SectionKey> = Messages[TSection];
export type TranslationId<TSection extends SectionKey> = string & keyof Section<TSection>;

export const messagesIndex = {
	es: () => import('../../messages/es.json').then((module) => module.default),
	en: () => import('../../messages/en.json').then((module) => module.default),
	ja: () => import('../../messages/ja.json').then((module) => module.default),
};

export function isValidLocale(locale: string): locale is Locale {
	return locale != null && locales.includes(locale as Locale);
}

export async function getMessages(locale: Locale) {
	try {
		const messages = await messagesIndex[locale]();
		return messages;
	} catch {
		return undefined;
	}
}
