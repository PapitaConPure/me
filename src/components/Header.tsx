'use client';

import getRoot from '@/lib/getroot';
import Image from 'next/image';
import Link from 'next/link';

const toggleMenu = () => {
	const header = document.getElementById('header');
	const menu = document.getElementById('mobile-menu');

	if(!menu) return;

	menu.classList.toggle('h-screen');

	document.getElementById('menu-reveal')?.classList.toggle('hidden');
	document.getElementById('menu-collapse')?.classList.toggle('hidden');

	if(header) {
		header.classList.toggle('backdrop-blur-md');
		header.classList.toggle('backdrop-blur-lg');
		header.classList.toggle('bg-opacity-60');
		header.classList.toggle('bg-opacity-80');
	}
};

export default function Header() {
	return (
		<header
			id='header'
			className='fixed top-0 z-50 w-full border-b border-b-secondary-800 border-opacity-60 bg-background bg-opacity-60 backdrop-blur-md transition-all'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
				<Link
					href='/'
					className='flex cursor-pointer space-x-4 text-2xl font-bold text-primary-50'
					aria-label='Página Principal'>
					<Image
						src={getRoot('/potato.webp')}
						alt='Logo de Papita con Puré'
						width={64}
						height={64}
						className='h-8 w-auto text-sm font-light'
					/>
					<span className='select-none'>Papita con Puré</span>
				</Link>

				<nav className='hidden space-x-1 md:flex'>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href='/'
						aria-label='Inicio'>
						Inicio
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href='/about'
						aria-label='Acerca de'>
						Acerca de
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href='/projects'
						aria-label='Proyectos'>
						Proyectos
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href='/music'
						aria-label='Proyectos'>
						Música
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href='/contact'
						aria-label='Contacto'>
						Contacto
					</Link>
				</nav>
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						id='menu-reveal'
						className='h-6 w-6 text-primary-400 focus:text-primary-300 focus:outline-none active:text-primary-500'
						aria-label='Desplegar menú de navegación'>
						<i className='fa fa-bars fa-lg'></i>
					</button>
					<button
						onClick={toggleMenu}
						id='menu-collapse'
						className='hidden h-6 w-6 text-primary-50 focus:text-white focus:outline-none active:text-primary-100'
						aria-label='Ocultar menú de navegación'>
						<i className='fa fa-bars fa-lg'></i>
					</button>
				</div>
			</div>

			<nav
				id='mobile-menu'
				className='flex h-0 flex-col overflow-hidden rounded-b-md transition-all md:hidden duration-300 ease-[cubic-bezier(0.77,0,0.175,1)]'
				onClick={toggleMenu}>
				<Link
					href='/'
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Inicio'>
					Inicio
				</Link>
				<Link
					href='/about'
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Acerca de'>
					Acerca de
				</Link>
				<Link
					href='/projects'
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Proyectos'>
					Proyectos
				</Link>
				<Link
					href='/music'
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Música'>
					Música
				</Link>
				<Link
					href='/contact'
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Contacto'>
					Contacto
				</Link>
			</nav>
		</header>
	);
}
