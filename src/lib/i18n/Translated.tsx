import { getMessages, Locale, Messages, SectionKey, TranslationId } from '.';

interface TranslatedProps<TSectionKey extends SectionKey> {
	readonly lang: Locale;
	readonly t: `${TSectionKey}/${TranslationId<TSectionKey>}`;
}

async function Translated<TSectionKey extends SectionKey>({
	lang,
	t,
}: TranslatedProps<TSectionKey>): Promise<string> {
	const messages = await getMessages(lang);
	if (!messages) throw new ReferenceError(`Couldn't find translations for locale: ${lang}`);

	const [sectKey, id] = t.split('/') as [TSectionKey, TranslationId<TSectionKey>];
	const section = messages[sectKey] as Messages[TSectionKey];

	return section[id] as string || '';
}

export default Translated;
