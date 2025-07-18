'use client';

function FooterSeparator() {
	return <span className='px-1'>•</span>;
}

export default function Footer() {
	return (
		<footer className='my-4 border-t border-b-secondary-800 border-t-secondary-800 border-opacity-60 py-4 text-center text-sm text-secondary-500'>
			<span>
				<a
					href='https://github.com/PapitaConPure/me'
					target='_blank'
					aria-label='Visitar el repositorio de GitHub de esta página'>
					<i className='fa fa-brands fa-github fa-lg'></i>
				</a>
			</span>

			<FooterSeparator />

			<span>2024</span>

			<FooterSeparator />

			<a
				href='https://github.com/PapitaConPure'
				target='_blank'
				className={`${process.env.NODE_ENV === 'production' ? 'bg-green-500' : ''} hover:underline`}
				aria-label='Visitar el perfil de GitHub de Papita con Puré'>
				Papita con Puré
			</a>
		</footer>
	);
}
