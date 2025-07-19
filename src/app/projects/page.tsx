import getRoot from '@/lib/getroot';
import { Metadata, Viewport } from 'next';

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

const Projects = () => {
	return (
		<main>
			<section className='header'>
				<h1 className='title'>Proyectos</h1>
				<p className='subtitle'>Cosas curiosas que he hecho</p>
			</section>
			<section>
				<div className='flex justify-center'>
					<div className='flex flex-col items-center space-y-8'>
						<div className='text-9xl'>🥔</div>
						<p className='italic'>En construcción...</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Projects;
