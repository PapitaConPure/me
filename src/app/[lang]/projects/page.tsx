import { getMessages, isValidLocale, locales } from '@/lib/i18n';
import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';

export const viewport: Viewport = {
	themeColor: '#c97f72',
};

export const metadata: Metadata = {
	title: 'Proyectos',
	description: 'Cosas curiosas que he hecho',
	openGraph: {
		title: 'Proyectos',
		description: 'Cosas curiosas que he hecho',
		images: ['https://papitaconpure.github.io/me/potato.webp'],
		type: 'website',
		siteName: 'Papita con Puré',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Proyectos',
		description: 'Cosas curiosas que he hecho',
		creator: 'Papita con Puré',
		site: 'https://papitaconpure.github.io/me',
		images: ['https://papitaconpure.github.io/me/potato.webp'],
	},
};

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

interface ProjectsProps {
	params: Promise<{ lang: string }>;
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
