import BackSection from '@/components/BackSection';
import { defaultLocale, getMessages, isValidLocale, locales } from '@/lib/i18n';
import Tr from '@/lib/i18n/Tr';

interface NotfoundProps {
	params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

const NotFound = async ({ params }: NotfoundProps) => {
	const lang = params ? (await params)?.lang : defaultLocale;
	const normalizedLang = isValidLocale(lang) ? lang : defaultLocale;
	const messages = await getMessages(normalizedLang);
	if (!messages)
		throw ReferenceError("Couldn't find proper internationalization messages in index");

	<main>
		<section>
			<div className='flex justify-center'>
				<div className='flex flex-col items-center space-y-8'>
					<div className='text-9xl'>🥔</div>
					<p>{messages.NotFound.notice}</p>
				</div>
			</div>
		</section>
		<BackSection href='/'>
			<Tr
				t={messages.General.backSectionButton}
				components={{ 1: <span className='font-semibold' /> }}
			/>
		</BackSection>
	</main>;
};

export default NotFound;
