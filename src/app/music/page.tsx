import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import items from '@/data/music';
import getRoot from '@/lib/getroot';
import { FullArtistCredit, MusicItemSummary } from '@/types/music';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#c97f72',
};

export const metadata: Metadata = {
	title: 'Música',
	description: 'Piezas en las que he trabajado',
	openGraph: {
		title: 'Música',
		description: 'Piezas en las que he trabajado',
		images: ['https://papitaconpure.github.io/me/potato.webp'],
		type: 'website',
		siteName: 'Papita con Puré',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Música',
		description: 'Piezas en las que he trabajado',
		creator: 'Papita con Puré',
		site: 'https://papitaconpure.github.io/me',
		images: ['https://papitaconpure.github.io/me/potato.webp'],
	},
};

interface AuthorBriefCreditProps {
	artist: string | FullArtistCredit;
}

const AuthorBriefCredit = ({ artist }: AuthorBriefCreditProps) =>
	typeof artist === 'string' ? <span>{artist}</span> : <span>{artist.name}</span>;

interface MusicCardProps {
	href: Url;
	imgSrc: string;
	title: string;
	author: React.ReactNode;
	categories: string[];
	date: Date;
}

const MusicCard = ({ href, imgSrc, title, author, categories, date }: MusicCardProps) => {
	return (
		<Link
			href={href}
			className='group flex flex-col justify-between rounded-lg border border-secondary-main bg-secondary-800 transition-all hover:bg-secondary-700 sm:hover:scale-105'>
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
					sizes={'(max-width: 768px) 50vw, 33vw'}
					className='mx-auto my-auto h-full w-full object-cover blur-md transition-all md:group-hover:blur-lg'
				/>
				<div className='absolute inset-0 mx-auto my-auto h-full w-full transition-all duration-500 md:group-hover:scale-150 md:group-hover:blur-sm'>
					<Image
						src={getRoot(imgSrc)}
						alt='Thumbnail'
						fill
						sizes={'(max-width: 768px) 50vw, 33vw'}
						className='object-contain'
					/>
				</div>
				<div className='absolute inset-1 flex items-center justify-center rounded-md bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100'>
					<span className='text-md font-semibold text-white'>
						Haz clic para ver más...
					</span>
				</div>
			</div>

			<div className='m-4 flex flex-grow flex-col justify-between'>
				<h2 className='flex-shrink-0 text-lg font-semibold text-foreground'>{title}</h2>
				<p className='flex-shrink-0 text-secondary-100'>{author}</p>
				<div className='mt-4 flex flex-grow items-end justify-between space-x-4 text-secondary-300'>
					<p className='flex-shrink-0 text-sm'>{date.getFullYear()}</p>
					<div className='flex flex-grow flex-wrap-reverse items-end justify-end space-x-2 text-xs font-light'>
						{categories.map((category, index) => (
							<div key={index}>{category}</div>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};

const MusicList = () => {
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
				<h1 className='title'>Música</h1>
				<p className='subtitle'>Piezas en la que he trabajado</p>
			</section>

			<section>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
					{summary.map((item) => (
						<MusicCard
							key={item.id}
							href={`/music/${item.id}`}
							title={item.title}
							author={
								typeof item.artists === 'string'
									? item.artists
									: item.artists.map((artist, index, arr) => (
											<span key={index + 1}>
												<AuthorBriefCredit artist={artist} />
												{index < arr.length - 1 && (
													<span className='mx-1 text-sm text-secondary-500'>
														&
													</span>
												)}
											</span>
										))
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
