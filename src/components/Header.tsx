'use client';

import ROOT from '@/lib/preroot';
import Image from 'next/image';
import Link from 'next/link';

const toggleMenu = () => {
	const menu = document.getElementById('mobile-menu');
	if (menu) {
		menu.classList.toggle('hidden');
		document.getElementById('menu-reveal')?.classList.toggle('hidden');
		document.getElementById('menu-collapse')?.classList.toggle('hidden');
	}
};

export default function Header() {
	return (
		<header className='fixed top-0 z-50 w-full border-b border-b-secondary-800 bg-background bg-opacity-60 border-opacity-60 backdrop-blur-md'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
				<Link
					href='/'
					className='flex space-x-4 cursor-pointer text-2xl font-bold text-primary-50'
					aria-label='Página Principal'
				>
					<Image
						src={`${ROOT}/potato.webp`}
						alt='Logo de Papita con Puré'
						width={64}
						height={64}
						className='h-8 w-auto font-light text-sm'/>
					<span className='select-none'>Papita con Puré</span>
				</Link>

				<nav className='hidden space-x-6 md:flex'>
					<Link href='/' aria-label='Inicio'>
						Inicio
					</Link>
					<Link href='/about' aria-label='Acerca de'>
						Acerca de
					</Link>
					<Link href='/projects' aria-label='Proyectos'>
						Proyectos
					</Link>
					<Link href='/music' aria-label='Proyectos'>
						Música
					</Link>
					<Link href='/contact' aria-label='Contacto'>
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

			<nav id='mobile-menu' className='hidden md:hidden'>
				<Link
					href='/'
					className='block w-full select-none bg-secondary-900 px-4 py-2 text-secondary-500 hover:bg-secondary-800 hover:text-secondary-200'
					aria-label='Inicio'>
					Inicio
				</Link>
				<Link
					href='/about'
					className='block w-full select-none bg-secondary-900 px-4 py-2 text-secondary-500 hover:bg-secondary-800 hover:text-secondary-200'
					aria-label='Acerca de'>
					Acerca de
				</Link>
				<Link
					href='/projects'
					className='block w-full select-none bg-secondary-900 px-4 py-2 text-secondary-500 hover:bg-secondary-800 hover:text-secondary-200'
					aria-label='Proyectos'>
					Proyectos
				</Link>
				<Link
					href='/music'
					className='block w-full select-none bg-secondary-900 px-4 py-2 text-secondary-500 hover:bg-secondary-800 hover:text-secondary-200'
					aria-label='Música'>
					Música
				</Link>
				<Link
					href='/contact'
					className='block w-full select-none bg-secondary-900 px-4 py-2 text-secondary-500 hover:bg-secondary-800 hover:text-secondary-200'
					aria-label='Contacto'>
					Contacto
				</Link>
			</nav>
		</header>
	);
}
