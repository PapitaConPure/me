import { Locale } from '@/lib/i18n';

export type LocalizationMap = Partial<Record<Locale, string>>;

export type LocalizableField = string | LocalizationMap;
