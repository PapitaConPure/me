import Link from 'next/link';
import items, { itemsById } from '@/data/music';
import Image from 'next/image';
import { Video } from '@/components/Video';
import { OlHTMLAttributes } from 'react';

const BackSection = () => {
	return (
		<section>
			<Link
				href='/music'
				className='text-accent-500 hover:text-accent-600'
				aria-label='Volver a la lista de música'>
				<i className='fa fa-arrow-left mr-2'></i>
				Volver a la lista de música
			</Link>
		</section>
	);
};

const SmallSeparator = () => <div className='my-4 h-[1px] w-full bg-secondary-800 bg-opacity-30' />;

const ChildrenList = ({ children }: OlHTMLAttributes<HTMLDataListElement>) => (
	<ol className='flex flex-col space-y-0.5 rounded-sm border border-secondary-800 px-6 py-3'>
		{children}
	</ol>
);

function formatDateUTC(date: Date, sep = '.'): string {
	const year = `${date.getUTCFullYear()}`.padStart(4, '0');
	const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
	const day = `${date.getUTCDate()}`.padStart(2, '0');
	return `${year}${sep}${month}${sep}${day}`;
}

interface MusicDetailProps {
	searchParams: {
		id?: string;
	};
}

const MusicDetail = async ({ searchParams }: MusicDetailProps) => {
	const { id = '' } = await searchParams;
	const item = items.find((i) => i.id === id);

	if (item == undefined) {
		return (
			<main>
				<section>La ID de Música especificada no existe.</section>
				<BackSection />
			</main>
		);
	}

	return (
		<main>
			<section>
				<div className='flex flex-col items-start justify-start sm:flex-row sm:space-x-8'>
					<div className='mx-auto mb-8 w-[90%] max-w-[30rem] flex-shrink-0 sm:mx-0 sm:mb-0 sm:w-80 md:w-96'>
						<Image
							src={item.coverUrl || item.thumbnailUrl}
							alt='Cover Art'
							width={500}
							height={500}
							priority
							className='w-full rounded-lg'></Image>
					</div>
					<div className='flex-grow'>
						<h2 className='mb-1 text-xl text-foreground text-opacity-90'>
							{item.artists.join('&')}
						</h2>
						<h1 className='mb-2.5 font-default-sans text-3xl font-extrabold text-foreground'>
							{item.title}
						</h1>
						<div className='mb-3 flex flex-wrap space-x-2 text-xs font-light text-foreground text-opacity-80'>
							{item.categories.map((cat, index) => (
								<>
									<div
										key={index}
										className='mb-2 rounded-full border border-primary-500 px-2 py-0.5 text-primary-500'>
										{cat.toUpperCase()}
									</div>
								</>
							))}
						</div>

						{item.externalLinks && item.externalLinks.length > 0 && (
							<>
								<SmallSeparator />
								<h3 className='section-h3 mb-2'>Enlaces</h3>
								<ul className='list-disc pl-6'>
									{item.externalLinks.map((link, index) => (
										<li key={index}>
											<a
												href={link.url}
												target='_blank'
												rel='noopener noreferrer'
												className='text-accent-500 hover:text-accent-600 hover:underline'>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</>
						)}

						{(item.kind === 'album' || item.kind === 'ep') && (
							<>
								<SmallSeparator />
								<h3 className='section-h3 mb-2'>Lista de Pistas</h3>
								<ChildrenList>
									{item.children.map((child, index) => {
										if(child.kind === 'name')
											return (
												<li
													key={index}
													className='flex cursor-default items-start space-x-2 rounded-sm py-0.5 hover:bg-secondary-900'>
													<span className='w-6 flex-shrink-0 text-right text-secondary-600'>
														{`${index + 1}`.padStart(2, '0')}.
													</span>
													<span className='flex-grow text-foreground hover:opacity-90'>
														{child.data}
													</span>
												</li>
											);

										const childItem = itemsById[child.data];

										if (!childItem) return <></>;

										return (
											<li
												key={index}
												className='flex items-start space-x-2 rounded-sm py-0.5 hover:bg-secondary-900'>
												<span className='w-6 flex-shrink-0 text-right text-secondary-600'>
													{`${index + 1}`.padStart(2, '0')}.
												</span>
												<Link
													href={`/music/detail?id=${childItem.id}`}
													className='flex-grow text-accent-500 hover:text-accent-400'>
													{childItem.title}
												</Link>
											</li>
										);
									})}
								</ChildrenList>
							</>
						)}

						{(item.kind === 'compilation') && (
							<>
								<SmallSeparator />
								<h3 className='section-h3 mb-2'>Lista de Pistas</h3>
								<ChildrenList>
									{item.childrenTitles.map((childTitle, index) => {
										return (
											<li
												key={index}
												className='flex cursor-default items-start space-x-2 rounded-sm py-0.5 hover:bg-secondary-900'>
												<span className='w-6 flex-shrink-0 text-right text-secondary-600'>
													{`${index + 1}`.padStart(2, '0')}.
												</span>
												<span className='flex-grow text-foreground hover:opacity-90'>
													{childTitle}
												</span>
											</li>
										);
									})}
								</ChildrenList>
							</>
						)}

						<SmallSeparator />
						<p className='text-right text-base font-light text-foreground text-opacity-80'>
							<span className='text-xs font-thin'>UTC</span>{' '}
							{formatDateUTC(item.date)}
						</p>
					</div>
				</div>
			</section>
			{item.videoUrl && (
				<section>
					<h2 className='section-h2'>Video</h2>
					<div className='mt-4 w-full'>
						<Video
							src={item.videoUrl}
							className='aspect-video w-full rounded-md object-cover'
						/>
					</div>
				</section>
			)}
			{item.downloadUrls && item.downloadUrls.length > 0 && (
				<section>
					<h2 className='section-h2'>Descargas</h2>
					<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
						{item.downloadUrls.map((download, index) => (
							<div
								key={index}
								className='relative flex flex-col items-center justify-start rounded-md border border-secondary-700 bg-secondary-800 p-4 transition-transform duration-500 hover:scale-105'>
								<div className='relative mb-2 flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-secondary-900'>
									{download.kind === 'image' && (
										<div className='absolute inset-0 opacity-25'>
											<Image
												src={download.url}
												alt=' '
												fill
												className='absolute inset-0 rounded-md object-fill blur-md'
											/>
											<Image
												src={download.url}
												alt=' '
												fill
												className='absolute inset-0 rounded-md object-contain'
											/>
										</div>
									)}
									<div className='absolute flex w-full flex-col items-center space-y-1'>
										{download.kind === 'audio' && (
											<i className='fa fa-solid fa-music text-7xl text-yellow-200 sm:text-9xl md:text-8xl'></i>
										)}
										{download.kind === 'image' && (
											<i className='fa fa-solid fa-image text-7xl text-green-300 sm:text-9xl md:text-8xl'></i>
										)}
										{download.kind === 'video' && (
											<i className='fa fa-solid fa-video text-7xl text-purple-400 sm:text-9xl md:text-8xl'></i>
										)}
										{download.kind === 'file' && (
											<i className='fa fa-solid fa-file-alt text-7xl text-blue-400 sm:text-9xl md:text-8xl'></i>
										)}
										<div className='text-2xl font-bold sm:text-4xl md:text-3xl'>
											{download.format.toUpperCase()}
										</div>
									</div>
								</div>
								<h2 className='mb-4 flex-grow'>{download.label}</h2>
								{download.kind === 'audio' && (
									<audio
										controls
										controlsList='nodownload noremoteplayback nofullscreen'
										className='h-13 mb-2 w-full rounded-md bg-white sm:h-12 md:h-9'>
										<source
											src={download.url}
											type={`audio/${download.format}`}
										/>
										Your browser does not support the audio element.
									</audio>
								)}
								<a
									href={download.url}
									target='_blank'
									rel='noopener noreferrer'
									className='flex w-full flex-shrink-0 items-center justify-center rounded-md bg-primary-main px-8 py-4 text-white transition-colors duration-200 hover:bg-primary-700 sm:py-3 md:px-4 md:py-2'>
									<i className='fa fa-solid fa-download mr-2'></i>
									<span className='text-base font-semibold sm:text-lg md:text-sm'>
										{download.size}
									</span>
									{download.external ? (
										<i className='fa fa-external-link-alt mb-0.5 ml-2 text-xs opacity-80'></i>
									) : null}
								</a>
							</div>
						))}
					</div>
				</section>
			)}
			{item.tags && item.tags.length > 0 && (
				<section>
					<h2 className='section-h2'>Etiquetas de Contenido</h2>
					<div className='mt-4 flex flex-wrap space-x-2'>
						{item.tags.map((tag, index) => (
							<span
								key={index}
								className='rounded-md bg-secondary-800 px-3 py-1 text-sm text-secondary-300'>
								{tag.toUpperCase()}
							</span>
						))}
					</div>
				</section>
			)}
			<BackSection />
		</main>
	);
};

export default MusicDetail;
