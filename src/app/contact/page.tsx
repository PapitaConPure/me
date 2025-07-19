import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Contact = () => {
	return (
		<main>
			<section className='header'>
				<h1 className='title'>Contacto</h1>
				<p className='subtitle'>Información para contactarme</p>
			</section>

			<section>
				<div className='rounded-md border border-secondary-800 px-6 py-2'>
					<h3 className='mb-1 section-h3'>Profesional y Negocios</h3>
					<Link
						href='mailto:papitapurecontact@gmail.com'
						className='w-full overflow-hidden text-accent-400 hover:underline'
					>
						papitapurecontact@gmail.com
					</Link>

					<div className='mt-4 grid w-full grid-cols-1 sm:w-max sm:grid-cols-2 sm:pr-0 md:grid-cols-4'>
						<a
							tabIndex={0}
							href='mailto:papitapurecontact@gmail.com'
							target='_blank'
							className='social-btn flex border-transparent bg-primary-main transition-colors hover:bg-primary-700 sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
							aria-label='GitHub'>
							<FontAwesomeIcon icon={faEnvelope} fontSize={24} />
							<span className='w-full text-center'>Enviar Correo</span>
						</a>
						<a
							tabIndex={0}
							href='https://github.com/PapitaConPure'
							target='_blank'
							className='social-btn flex border-transparent bg-[#1e2327] transition-colors duration-75 hover:bg-[#252c34] active:bg-[#292f38] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
							aria-label='GitHub'>
							<FontAwesomeIcon icon={faGithub} fontSize={24} />
							<span className='w-full text-center'>GitHub</span>
						</a>
					</div>
				</div>
			</section>

			<section>
				<div className='rounded-md border border-secondary-800 px-6 py-2'>
					<h3 className='mb-1 section-h3'>Social y Otros</h3>
					<p className='font-sm'>Puedes hablarme en la mayoría de mis redes sin problemas, pero en estas puede que responda más rápido.</p>
					<div className='mt-4 grid w-full grid-cols-1 sm:w-max sm:grid-cols-2 sm:pr-0 md:grid-cols-4'>
						<a
							tabIndex={0}
							href='https://discord.com/users/423129757954211880'
							target='_blank'
							className='social-btn flex border-transparent bg-[#5865f2] transition-colors duration-75 hover:bg-[#4752c4] active:bg-[#3c45a5] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
							aria-label='Discord'>
							<FontAwesomeIcon icon={faDiscord} fontSize={24} />
							<span className='w-full text-center'>Discord</span>
						</a>

						<a
							tabIndex={0}
							href='https://x.com/PapitaPure'
							target='_blank'
							className='social-btn flex border-secondary-900 bg-black transition-colors duration-75 hover:bg-[#181919] active:bg-[#2e2f2f] sm:w-64 md:w-36 md:px-4 lg:mx-1 lg:w-44'
							aria-label='X (Twitter)'>
							<FontAwesomeIcon icon={faXTwitter} fontSize={24} />
							<span className='w-full text-center'>X (Twitter)</span>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
};

Contact.position = { x: 3, y: 0 };

export default Contact;
