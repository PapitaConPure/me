import { defaultLocale, getMessages, isValidLocale, locales } from '@/lib/i18n';
import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';

export const viewport: Viewport = {
	themeColor: '#c97f72',
};

interface ProjectsProps {
	params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ProjectsProps): Promise<Metadata> {
	const lang = params ? (await params)?.lang : defaultLocale;

	if (!lang || !isValidLocale(lang)) return { title: 'Not Found' };

	const messages = await getMessages(lang);
	if (!messages) return { title: 'Not Found' };
	const t = messages.Projects;

	return {
		title: t.title,
		description: t.subtitle,
		openGraph: {
			title: t.title,
			description: t.subtitle,
			images: ['https://papitaconpure.github.io/me/potato.webp'],
			type: 'website',
			siteName: messages.General.metaSiteName,
		},
		twitter: {
			card: 'summary_large_image',
			title: t.title,
			description: t.subtitle,
			creator: messages.General.papitaName,
			site: 'https://papitaconpure.github.io/me',
			images: ['https://papitaconpure.github.io/me/potato.webp'],
		},
	};
}

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

const Projects = async ({ params }: ProjectsProps) => {
	const lang = (await params).lang;

	if (!isValidLocale(lang)) return notFound();

	const messages = await getMessages(lang);
	if (!messages) return notFound();
	const t = messages.Projects;

	return (
		<main>
			<section className='header'>
				<h1 className='title'>{t.title}</h1>
				<p className='subtitle'>{t.subtitle}</p>
			</section>

			<section>
				<div className='flex justify-center'>
					<div className='flex flex-col items-center space-y-8'>
						<div className='text-9xl'>🥔</div>
						<p className='italic'>{t.notice}</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Projects;
