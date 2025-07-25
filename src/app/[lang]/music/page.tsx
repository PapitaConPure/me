import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import items from '@/data/music';
import getRoot from '@/lib/getroot';
import { CategoryKey, FullArtistCredit, MusicItemSummary } from '@/types/music';
import { Metadata, Viewport } from 'next';
import { defaultLocale, getMessages, isValidLocale, Locale, locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Translated from '@/lib/i18n/Translated';
import { localizableCategories, resolveLocalizableField } from '@/lib/music';

export const viewport: Viewport = {
	themeColor: '#c97f72',
};

interface AuthorBriefCreditProps {
	artist: string | FullArtistCredit;
	lang: Locale;
}

const AuthorBriefCredit = ({ artist, lang }: AuthorBriefCreditProps) =>
	typeof artist === 'string' ? (
		<span>{artist}</span>
	) : (
		<span>{resolveLocalizableField(artist.name, lang)}</span>
	);

interface MusicCardProps {
	lang: Locale;
	href: Url;
	imgSrc: string;
	title: string;
	author: React.ReactNode;
	categories: CategoryKey[];
	date: Date;
}

const MusicCard = ({ lang, href, imgSrc, title, author, categories, date }: MusicCardProps) => {
	return (
		<Link
			href={href}
			className='group flex flex-col justify-between rounded-lg border border-secondary-main bg-secondary-800 transition-all hover:bg-secondary-700 active:bg-secondary-900 md:hover:scale-105 md:hover:motion-reduce:scale-100'
			tabIndex={0}>
			<div className='relative aspect-video w-full overflow-hidden rounded-md bg-secondary-900'>
				<div className='absolute h-full w-full flex-shrink-0 animate-pulse rounded-sm'>
					<div className='flex h-full w-full items-center justify-center'>
						<svg
							className='h-10 w-10 text-secondary-700 sm:h-16 sm:w-16 md:h-20 md:w-20'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 18'>
							<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
						</svg>
					</div>
				</div>
				<Image
					src={getRoot(imgSrc)}
					alt='Thumbnail Backdrop'
					fill
					sizes={'95vw, (min-width: 640px) 44.5vw, (min-width: 768px) 307px'}
					className='mx-auto my-auto h-full w-full object-cover blur-md transition-all sm:opacity-100 md:group-hover:blur-lg'
				/>
				<div className='absolute inset-0 mx-auto my-auto h-full w-full transition-all duration-500 md:group-hover:scale-150 md:group-hover:blur-sm md:group-active:scale-125 md:group-active:blur-lg md:group-active:brightness-200 md:group-active:duration-[400ms] md:group-hover:motion-reduce:scale-100 md:group-active:motion-reduce:scale-100'>
					<Image
						src={getRoot(imgSrc)}
						alt='Thumbnail'
						fill
						sizes={'95vw, (min-width: 640px) 44.5vw, (min-width: 768px) 307px'}
						className='object-contain'
					/>
				</div>
				<div className='absolute inset-1 flex items-center justify-center rounded-md bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 md:group-active:opacity-20'>
					<span className='text-md font-semibold text-white'>
						<Translated lang={lang} s='Music' t='musicCardCTA' />
					</span>
				</div>
			</div>

			<div className='m-4 my-3.5 flex flex-grow flex-col justify-between'>
				<h2
					className={`mb-1.5 flex-shrink-0 text-lg ${lang === 'ja' ? 'font-bold' : 'font-semibold'} leading-snug text-foreground`}>
					{title}
				</h2>
				<p className='flex-shrink-0 text-foreground'>{author}</p>
				<div className='mt-5 flex flex-grow items-end justify-between space-x-4 text-secondary-200'>
					<p className='flex-shrink-0 text-sm'>{date.getFullYear()}</p>
					<div
						className={`flex flex-grow flex-wrap-reverse items-end justify-end text-sm ${lang === 'ja' ? 'space-x-2.5' : 'space-x-2'} font-light`}>
						{categories.map((category, index) => (
							<div key={index}>
								{resolveLocalizableField(localizableCategories[category], lang)}
							</div>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};

interface MusicListProps {
	params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: MusicListProps): Promise<Metadata> {
	const lang = params ? (await params)?.lang : defaultLocale;

	if (!lang || !isValidLocale(lang)) return { title: 'Not Found' };

	const messages = await getMessages(lang);
	if (!messages) return { title: 'Not Found' };
	const t = messages.Music;

	return {
		title: t.title,
		description: t.subtitle,
		openGraph: {
			title: t.title,
			description: t.subtitle,
			images: ['https://papitaconpure.github.io/potato.webp'],
			type: 'website',
			siteName: messages.General.metaSiteName,
		},
		twitter: {
			card: 'summary_large_image',
			title: t.title,
			description: t.subtitle,
			creator: messages.General.papitaName,
			site: 'https://papitaconpure.github.io',
			images: ['https://papitaconpure.github.io/potato.webp'],
		},
	};
}

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

const MusicList = async ({ params }: MusicListProps) => {
	const { lang } = await params;

	if (!lang || !isValidLocale(lang)) return notFound();

	const messages = await getMessages(lang);
	if (!messages) return notFound();
	const t = messages.Music;

	const summary = items.map(
		(item): MusicItemSummary => ({
			id: item.id,
			artists: item.displayArtist || item.artists,
			title: item.title,
			date: item.date,
			categories: item.categories,
			thumbnailUrl: item.thumbnailUrl || item.coverUrl || 'potato.webp',
		}),
	);

	return (
		<main>
			<section className='header'>
				<h1 className='title'>{t.title}</h1>
				<p className='subtitle'>{t.subtitle}</p>
			</section>

			<section>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
					{summary.map((item) => (
						<MusicCard
							lang={lang}
							key={item.id}
							href={`/${lang}/music/${item.id}`}
							title={resolveLocalizableField(item.title, lang)}
							author={
								typeof item.artists === 'string'
									? item.artists
									: Array.isArray(item.artists)
										? item.artists.map((artist, index, arr) => (
												<span key={index + 1}>
													<AuthorBriefCredit
														artist={artist}
														lang={lang}
													/>
													{index < arr.length - 1 && (
														<span className='mx-1 text-sm text-secondary-300'>
															&
														</span>
													)}
												</span>
											))
										: resolveLocalizableField(item.artists, lang)
							}
							categories={item.categories}
							date={item.date}
							imgSrc={item.thumbnailUrl}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default MusicList;
