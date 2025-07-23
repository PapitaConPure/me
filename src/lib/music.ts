import { LocalizableField } from '@/types/i18n';
import { defaultLocale, Locale } from './i18n';

export function resolveLocalizableField(field: LocalizableField | undefined, lang: Locale): string {
	if (field == undefined) return '';
	if (typeof field === 'string') return field;
	return field[lang] ?? field[defaultLocale] ?? Object.values(field)[0] ?? `${field}`;
}
