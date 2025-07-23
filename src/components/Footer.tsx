import { getMessages, Locale } from '@/lib/i18n';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterSeparator() {
	return (
		<span aria-hidden className='px-1'>
			•
		</span>
	);
}

interface FooterProps {
	lang: Locale;
}

export default async function Footer({ lang }: FooterProps) {
	const messages = await getMessages(lang);
	const t = messages?.Layout;
	if (!t) return <footer></footer>;

	return (
		<footer className='my-4 border-t border-b-secondary-800 border-t-secondary-800 border-opacity-60 py-4 text-center text-sm text-secondary-500'>
			<span>
				<a
					href='https://github.com/PapitaConPure/me'
					target='_blank'
					aria-label='Visitar el repositorio de GitHub de esta página'>
					<FontAwesomeIcon icon={faGithub} size='lg' />
				</a>
			</span>

			<FooterSeparator />

			<span aria-label='Page year'>2024</span>

			<FooterSeparator />

			<a
				href='https://github.com/PapitaConPure'
				target='_blank'
				className='hover:underline active:text-secondary-600'
				aria-label='Visitar el perfil de GitHub de Papita con Puré'>
				Papita con Puré
			</a>
		</footer>
	);
}
