import getRoot from '@/lib/getroot';
import { faDiscord, faGithub, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFeather, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata, Viewport } from 'next';
import Link from 'next/link';
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

const Home = () => {
	return (
		<main>
			<section className='my-20'>
				<div className='relative'>
					<h1 className='absolute inset-x-0 mx-auto mb-2 w-max bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center font-default-sans text-6xl font-black text-transparent transition-transform'>
						Bienvenido
					</h1>
					<h1 className='mx-auto mb-2 w-max animate-ping bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center font-default-sans text-6xl font-black text-transparent opacity-10 transition-transform'>
						Bienvenido
					</h1>
				</div>
				<p className='my-2 text-center font-light text-secondary-100'>
					¡Hola! Soy Papita con Puré. Este sitio ofrece información actualizada sobre mí,
					mis redes y mis proyectos. Además, para individuos, grupos u organizaciones con
					consultas, dudas, quejas, sugerencias, etc., se ofrece información pública de
					contacto&nbsp;
					<Link
						href='./contact'
						className='text-accent-400 hover:underline'
						aria-label='Información de contacto de Papita con Puré'>
						aquí
					</Link>
					.
				</p>
			</section>

			<section>
				<h2 className='section-h2 mb-3 mt-6 text-center'>Encuéntrame</h2>

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
				<h2 className='section-h2'>Preguntas Frecuentes</h2>
				<Question>¿Por qué te haces llamar &quot;Papita con Puré&quot;?</Question>
				<Answer>
					En una madrugada hace muchos años, cerca de las 3, estaba creándome una cuenta
					para jugar algo con unos amigos. Lo que pasa es que tenía muchísima hambre, un
					poco de sueño y además ya estaba pensando reemplazar mi antiguo apodo. Así es
					como se me ocurrió.
					<br /> <br />
					&quot;Papita con Puré&quot; no tiene sentido como tal. Son solo 2 comidas que
					realmente no quedarían bien combinadas. Sin embargo, es un apodo gracioso, y
					para la gente que no sabe español, &quot;Papita&quot; no suena mal.
				</Answer>
				<Question>¿Has pensado subir tus futuros juegos a Steam?</Question>
				<Answer>
					Subir un juego a Steam cuesta 100 dólares inicialmente. Es algo que deseo
					fuertemente, pero tener una página ahí va a tener que esperar.
				</Answer>
				<Question>¿Has pensado subir tu música a Spotify o SoundCloud?</Question>
				<Answer>
					Ahora mismo no tengo intenciones de hacer eso. Manejando solamente un canal de
					YouTube me siento bastante cómodo, de momento.
					<br /> <br />
					Sin embargo,{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://soundcloud.com/user-158678041'
						className='text-accent-main hover:text-accent-500 hover:underline'>
						ZFF
					</a>{' '}
					cada tanto sube mi música a SoundCloud con mi permiso.
					<br /> <br />
					Además, si participo en collabs y otra persona sube la música, hay una
					posibilidad de que sea en SoundCloud/Spotify/otro, ya que yo no me hago problema
					por eso.
				</Answer>
				<Question>¿Personajes favoritos?</Question>
				<Answer>
					Megumin (めぐみん) de KonoSuba, Minato Aqua (湊あくあ) de Hololive y Kishin
					Sagume (稀神サグメ) de Touhou 15.
				</Answer>
				<Question>¿Juegos favoritos?</Question>
				<Answer>Risk of Rain 2 y Conker&apos;s Bad Fur Day.</Answer>
				<Question>¿Realmente te han hecho estas preguntas?</Question>
				<Answer>No.</Answer>
				<Question>¿Entonces por qué &quot;Preguntas Frecuentes&quot;?</Question>
				<Answer>Podrían serlo algún día 👍</Answer>
			</section>

			<section>
				<div className='mx-1 my-6 flex flex-col items-center rounded-md bg-primary-main px-2 py-1'>
					<h2 className='my-1 text-center font-default-sans text-3xl font-bold text-foreground'>
						Aprende más sobre mí
					</h2>

					<p className='mb-1 text-center'>
						Soy otro grano de arena en el desierto de la vida. Sin embargo, puedo tener
						un par de cosas que sean de tu interés.
					</p>

					<Link
						href='/about'
						rel='noopener noreferrer'
						className='btn my-4 block w-max bg-foreground font-semibold text-primary-main transition-colors duration-75 hover:bg-white active:bg-primary-100'
						aria-label='Acerca de Papita con Puré'>
						<span className='w-full select-none text-center'>Vamos allá</span>
					</Link>
				</div>
			</section>

			<section>
				<h2 className='mb-1 text-center font-default-sans text-3xl font-bold text-foreground'>
					Mis Proyectos
				</h2>

				<p className='mb-1 text-center font-light text-secondary-100'>
					Ofrezco un recopilado de varios de mis proyectos destacados.
				</p>

				<Link
					href={'/projects'}
					className='primary-btn mx-auto my-4 block w-max'
					aria-label='Ver Proyectos'>
					<span className='w-full select-none text-center'>Veámoslos</span>
				</Link>
			</section>
		</main>
	);
};

export default Home;
