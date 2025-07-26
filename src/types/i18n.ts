import { Locale, Messages, Section, SectionKey } from '@/lib/i18n';

export type StandaloneLocalization = Partial<Record<Locale, string>>;

export type SectionLike<TTranslationIds extends string> = { [T in TTranslationIds]: string };

export type LocalizableField = string | StandaloneLocalization;

export type AnySectionKey = SectionKey<Locale>;
export type AnySectionWithin<TLocale extends Locale = Locale> = Messages<TLocale>[AnySectionKey];
export type AnySection = AnySectionWithin<Locale>;
export type SectionAcrossLocales<TSectionKey extends AnySectionKey> = Section<Locale, TSectionKey>;

export type SectionMap<TSectionKey extends SectionKey<Locale>> = {
	[L in Locale]: Section<L, TSectionKey>;
};

export type LocaleMap<TTranslationIds extends string> = {
	[L in Locale]: SectionLike<TTranslationIds>;
};

export type TranslationIdsOf<T extends LocaleMap<string>> =
	T extends LocaleMap<infer K> ? K : never;

export interface LocalizedComponentProps<TLocale extends Locale = Locale> {
	lang: TLocale;
}
