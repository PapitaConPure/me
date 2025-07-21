import { getMessages, isValidLocale, locales } from '@/lib/i18n';
import Tr from '@/lib/i18n/Tr';
import { faDiscord, faGithub, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFeather, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const viewport: Viewport = {
	themeColor: '#c97f72',
};

export const metadata: Metadata = {
	title: 'Inicio',
	description: 'Sitio personal para Papita con Puré',
	openGraph: {
		title: 'Inicio',
		description: 'Sitio personal para Papita con Puré',
		images: ['https://papitaconpure.github.io/me/potato.webp'],
		type: 'website',
		siteName: 'Papita con Puré',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Inicio',
		description: 'Sitio personal para Papita con Puré',
		creator: 'Papita con Puré',
		site: 'https://papitaconpure.github.io/me',
		images: ['https://papitaconpure.github.io/me/potato.webp'],
	},
};

const Question = ({ children }: PropsWithChildren) => (
	<div className='-mb-1 ml-2 mt-6 flex w-3/4 items-center font-default-serif text-lg text-secondary-300 sm:text-xl'>
		<FontAwesomeIcon icon={faQuestion} className='ml-2 mr-6 text-accent-main' />
		<h3 className='w-full'>{children}</h3>
	</div>
);

const Answer = ({ children }: PropsWithChildren) => (
	<div className='mb-12 ml-auto mr-2 mt-6 flex w-3/4 items-center text-right font-default-serif text-secondary-200 sm:text-lg'>
		<p className='w-full'>{children}</p>
		<FontAwesomeIcon icon={faFeather} className='ml-6 mr-2 text-accent-main' />
	</div>
);

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

interface HomeProps {
	params: Promise<{ lang: string }>;
}

const Home = async ({ params }: HomeProps) => {
	const lang = (await params).lang;

	if (!isValidLocale(lang)) return notFound();

	const messages = await getMessages(lang);
	if (!messages) return notFound();
	const t = messages.MainPage;

	return (
		<main>
			<section className='my-20'>
				<div className='relative'>
					<h1 className='absolute inset-x-0 mx-auto mb-2 w-max bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center font-default-sans text-6xl font-black text-transparent transition-transform'>
						{t.welcome}
					</h1>
					<h1 className='mx-auto mb-2 w-max animate-ping bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center font-default-sans text-6xl font-black text-transparent opacity-10 transition-transform'>
						{t.welcome}
					</h1>
				</div>
				<p className='my-2 text-center font-light text-secondary-100'>
					<Tr
						t={t.welcomeMessage}
						components={{
							1: (
								<Link
									href={`${lang}/contact`}
									className='text-accent-400 hover:underline'
									aria-label={t.welcomeMessageAriaLabel}
								/>
							),
						}}
					/>
				</p>
			</section>

			<section>
				<h2 className='section-h2 mb-3 mt-6 text-center'>{t.findMe}</h2>

				<div className='mx-auto grid w-full grid-cols-1 sm:w-max sm:grid-cols-2 sm:pr-0 md:grid-cols-4'>
					<a
						tabIndex={0}
						href='https://www.youtube.com/channel/UCRXbJiF9G6D0nqq3mU38-gw'
						rel='noopener noreferrer'
						target='_blank'
						className='social-btn flex border-transparent bg-[#ff0000] transition-colors duration-75 hover:bg-[#d70000] active:bg-[#bc0000] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
						aria-label='YouTube'>
						<FontAwesomeIcon icon={faYoutube} fontSize={24} />
						<div className='w-full flex-grow text-center'>YouTube</div>
					</a>

					<a
						tabIndex={0}
						href='https://discord.com/users/423129757954211880'
						rel='noopener noreferrer'
						target='_blank'
						className='social-btn flex border-transparent bg-[#5865f2] transition-colors duration-75 hover:bg-[#4752c4] active:bg-[#3c45a5] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
						aria-label='Discord'>
						<FontAwesomeIcon icon={faDiscord} fontSize={24} />
						<span className='w-full text-center'>Discord</span>
					</a>

					<a
						tabIndex={0}
						href='https://x.com/PapitaPure'
						rel='noopener noreferrer'
						target='_blank'
						className='social-btn flex border-secondary-900 bg-black transition-colors duration-75 hover:bg-[#181919] active:bg-[#2e2f2f] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
						aria-label='X (Twitter)'>
						<FontAwesomeIcon icon={faXTwitter} fontSize={24} />
						<span className='w-full text-center'>X (Twitter)</span>
					</a>

					<a
						tabIndex={0}
						href='https://github.com/PapitaConPure'
						rel='noopener noreferrer'
						target='_blank'
						className='social-btn flex border-transparent bg-[#1e2327] transition-colors duration-75 hover:bg-[#252c34] active:bg-[#292f38] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
						aria-label='GitHub'>
						<FontAwesomeIcon icon={faGithub} fontSize={24} />
						<span className='w-full text-center'>GitHub</span>
					</a>
				</div>
			</section>

			<section>
				<h2 className='section-h2'>{t.qnaTitle}</h2>
				<Question>{t.qnaQ1}</Question>
				<Answer>{t.qnaA1}</Answer>
				<Question>{t.qnaQ2}</Question>
				<Answer>{t.qnaA2}</Answer>
				<Question>{t.qnaQ3}</Question>
				<Answer>
					<Tr
						t={t.qnaA3}
						components={{
							1: (
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://soundcloud.com/user-158678041'
									className='text-accent-main hover:text-accent-500 hover:underline'
								/>
							),
						}}
					/>
				</Answer>
				<Question>{t.qnaQ4}</Question>
				<Answer>{t.qnaA4}</Answer>
				<Question>{t.qnaQ5}</Question>
				<Answer>{t.qnaA5}</Answer>
				<Question>{t.qnaQ6}</Question>
				<Answer>{t.qnaA6}</Answer>
				<Question>{t.qnaQ7}</Question>
				<Answer>{t.qnaA7}</Answer>
			</section>

			<section>
				<div className='mx-1 my-6 flex flex-col items-center rounded-md bg-primary-main px-2 py-1'>
					<h2 className='my-1 text-center font-default-sans text-3xl font-bold text-foreground'>
						{t.learnMoreTitle}
					</h2>

					<p className='mb-1 text-center'>
						{t.learnMore}
					</p>

					<Link
						href={`${lang}/about`}
						rel='noopener noreferrer'
						className='btn my-4 block w-max bg-foreground font-semibold text-primary-main transition-colors duration-75 hover:bg-white active:bg-primary-100'
						aria-label='Acerca de Papita con Puré'>
						<span className='w-full select-none text-center'>{t.learnMoreCTA}</span>
					</Link>
				</div>
			</section>

			<section>
				<h2 className='mb-1 text-center font-default-sans text-3xl font-bold text-foreground'>
					{t.myProjectsTitle}
				</h2>

				<p className='mb-1 text-center font-light text-secondary-100'>
					{t.myProjects}
				</p>

				<Link
					href={`${lang}/projects`}
					className='primary-btn mx-auto my-4 block w-max'
					aria-label='Ver Proyectos'>
					<span className='w-full select-none text-center'>{t.myProjectsCTA}</span>
				</Link>
			</section>
		</main>
	);
};

export default Home;
