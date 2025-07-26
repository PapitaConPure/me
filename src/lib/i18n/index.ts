import { LocaleMap } from '@/types/i18n';

export const locales = ['es', 'en', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export type Messages<TLocale extends Locale> = Awaited<
	ReturnType<typeof getMessages<TLocale>>
> & {};
export type SectionKey<TLocale extends Locale> = keyof Messages<TLocale>;
export type Section<
	TLocale extends Locale,
	TSectionKey extends SectionKey<TLocale>,
> = Messages<TLocale>[TSectionKey];
export type TranslationId<TLocale extends Locale, TSection extends SectionKey<TLocale>> = string &
	keyof Section<TLocale, TSection>;

export const messagesIndex = {
	es: () => import('../../messages/es.json').then((module) => module.default),
	en: () => import('../../messages/en.json').then((module) => module.default),
	ja: () => import('../../messages/ja.json').then((module) => module.default),
};

export function isValidLocale(locale: string): locale is Locale {
	return locale != null && locales.includes(locale as Locale);
}

export async function getMessages<TLocale extends Locale>(locale: TLocale) {
	try {
		const messages = await messagesIndex[locale]();
		return messages;
	} catch {
		return undefined;
	}
}

export function makeLocaleMap<TKeys extends string>(map: LocaleMap<TKeys>): LocaleMap<TKeys> {
	return map;
}
