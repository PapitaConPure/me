import getRoot from '@/lib/getroot';
import { defaultLocale, isValidLocale } from '@/lib/i18n';
import Translated from '@/lib/i18n/Translated';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderNavButton, HeaderNavMenu } from './HeaderClient';

interface HeaderProps {
	lang: string;
}

export default function Header({ lang }: HeaderProps) {
	const normalizedLang = isValidLocale(lang) ? lang : defaultLocale;

	return (
		<header
			id='header'
			className='fixed top-0 z-50 w-full border-b border-b-secondary-800 border-opacity-60 bg-background bg-opacity-60 backdrop-blur-md transition-all'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
				<Link
					href={`/${lang}`}
					className='flex cursor-pointer space-x-4 text-2xl font-bold text-primary-50'
					aria-label='Main Page'>
					<Image
						src={getRoot('/potato.webp')}
						alt='Logo'
						width={64}
						height={64}
						className='h-8 w-auto text-sm font-light'
					/>
					<span className='select-none'>
						<Translated lang={normalizedLang} t='Layout/navHome' />
					</span>
				</Link>

				<nav className='hidden space-x-1 md:flex'>
					<Link
						href={`/${lang}`}
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						aria-label='Home'>
						<Translated lang={normalizedLang} t='Layout/navHome' />
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/about`}
						aria-label='About'>
						<Translated lang={normalizedLang} t='Layout/navAbout' />
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/projects`}
						aria-label='Proyectos'>
						<Translated lang={normalizedLang} t='Layout/navProjects' />
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/music`}
						aria-label='Proyectos'>
						<Translated lang={normalizedLang} t='Layout/navMusic' />
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/contact`}
						aria-label='Contacto'>
						<Translated lang={normalizedLang} t='Layout/navContact' />
					</Link>
				</nav>
				<div className='md:hidden'>
					<HeaderNavButton
						id='menu-reveal'
						className='h-6 w-6 text-primary-400 focus:text-primary-300 focus:outline-none active:text-primary-500'
						aria-label='Desplegar menú de navegación'>
						<i className='fa fa-bars fa-lg'></i>
					</HeaderNavButton>
					<HeaderNavButton
						id='menu-collapse'
						className='hidden h-6 w-6 text-primary-50 focus:text-white focus:outline-none active:text-primary-100'
						aria-label='Ocultar menú de navegación'>
						<i className='fa fa-bars fa-lg'></i>
					</HeaderNavButton>
				</div>
			</div>

			<HeaderNavMenu
				id='mobile-menu'
				className='flex h-0 flex-col overflow-hidden rounded-b-md transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden'>
				<Link
					href={`/${lang}`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Home'>
					<Translated lang={normalizedLang} t='Layout/navHome' />
				</Link>
				<Link
					href={`/${lang}/about`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='About'>
					<Translated lang={normalizedLang} t='Layout/navAbout' />
				</Link>
				<Link
					href={`/${lang}/projects`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Projects'>
					<Translated lang={normalizedLang} t='Layout/navProjects' />
				</Link>
				<Link
					href={`/${lang}/music`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Music'>
					<Translated lang={normalizedLang} t='Layout/navMusic' />
				</Link>
				<Link
					href={`/${lang}/contact`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label='Contact'>
					<Translated lang={normalizedLang} t='Layout/navContact' />
				</Link>
			</HeaderNavMenu>
		</header>
	);
}
