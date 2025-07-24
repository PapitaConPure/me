import { getMessages, Locale, Section, SectionKey, TranslationId } from '.';

interface TranslatedProps<
	TLocale extends Locale,
	TSectionKey extends SectionKey<TLocale>,
	TTranslationId extends TranslationId<TLocale, TSectionKey>,
> {
	readonly lang: TLocale;
	readonly s: TSectionKey;
	readonly t: TTranslationId;
}

async function Translated<
	TLocale extends Locale,
	TSectionKey extends SectionKey<TLocale>,
	TTranslationId extends TranslationId<TLocale, TSectionKey>,
>({
	lang,
	s,
	t,
}: TranslatedProps<TLocale, TSectionKey, TTranslationId>): Promise<
	Section<TLocale, TSectionKey>[TTranslationId]
> {
	const messages = await getMessages(lang);
	if (!messages) throw new ReferenceError(`Couldn't find translations for locale: ${lang}`);

	const section = messages[s];

	return section[t];
}

export default Translated;
