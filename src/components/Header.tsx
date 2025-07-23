import getRoot from '@/lib/getroot';
import { getMessages, Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderNavButton, HeaderNavMenu } from './HeaderClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome, faLaptopCode, faMusic, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
	lang: Locale;
}

export default async function Header({ lang }: HeaderProps) {
	const messages = await getMessages(lang);
	if (!messages) return <header />;
	const t = messages?.Layout;
	if (!t) return <header />;

	return (
		<header
			id='header'
			className='fixed top-0 z-50 w-full border-b border-b-secondary-800 border-opacity-60 bg-background bg-opacity-60 backdrop-blur-md transition-all'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
				<Link
					href={`/${lang}`}
					className='flex cursor-pointer space-x-4 text-2xl font-bold text-primary-50'
					aria-label={t.headerAria}>
					<Image
						aria-hidden
						src={getRoot('/potato.webp')}
						alt='Logo'
						width={64}
						height={64}
						className='h-8 my-auto w-auto text-sm font-light'
					/>
					<span className='select-none'>{t.headerName}</span>
				</Link>

				<nav className='hidden space-x-1 md:flex'>
					<Link
						href={`/${lang}`}
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						aria-label={t.navHomeAria}
						tabIndex={0}>
						{t.navHome}
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/about`}
						aria-label={t.navAboutAria}
						tabIndex={0}>
						{t.navAbout}
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/projects`}
						aria-label={t.navProjectsAria}
						tabIndex={0}>
						{t.navProjects}
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/music`}
						aria-label={t.navMusicAria}
						tabIndex={0}>
						{t.navMusic}
					</Link>
					<Link
						className='rounded-md bg-secondary-400 bg-opacity-0 px-4 py-1 transition-all duration-75 hover:bg-opacity-20 hover:text-secondary-100'
						href={`/${lang}/contact`}
						aria-label={t.navContactAria}
						tabIndex={0}>
						{t.navContact}
					</Link>
				</nav>
				<div className='md:hidden'>
					<HeaderNavButton
						id='menu-reveal'
						className='h-6 w-6 text-primary-400 focus:text-primary-300 active:text-primary-500'
						aria-label={t.mobileNavShowAria}
						tabIndex={0}>
						<FontAwesomeIcon icon={faBars} size='lg' />
					</HeaderNavButton>
					<HeaderNavButton
						id='menu-collapse'
						className='hidden h-6 w-6 text-primary-50 focus:text-white active:text-primary-100'
						aria-label={t.mobileNavHideAria}
						tabIndex={0}>
						<FontAwesomeIcon icon={faBars} size='lg' />
					</HeaderNavButton>
				</div>
			</div>

			<HeaderNavMenu
				id='mobile-menu'
				className='flex h-0 flex-col overflow-hidden rounded-b-md transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden'>
				<Link
					href={`/${lang}`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label={t.navHomeAria}
					tabIndex={0}>
					<FontAwesomeIcon icon={faHome} className='w-6 mr-2' />
					{t.navHome}
				</Link>
				<Link
					href={`/${lang}/about`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label={t.navAboutAria}
					tabIndex={0}>
					<FontAwesomeIcon icon={faQuestionCircle} className='w-6 mr-2' />
					{t.navAbout}
				</Link>
				<Link
					href={`/${lang}/projects`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label={t.navProjectsAria}
					tabIndex={0}>
					<FontAwesomeIcon icon={faLaptopCode} className='w-6 mr-2' />
					{t.navProjects}
				</Link>
				<Link
					href={`/${lang}/music`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label={t.navMusicAria}
					tabIndex={0}>
					<FontAwesomeIcon icon={faMusic} className='w-6 mr-2' />
					{t.navMusic}
				</Link>
				<Link
					href={`/${lang}/contact`}
					className='block w-full select-none rounded-md bg-secondary-400 bg-opacity-0 px-4 py-2 text-secondary-200 transition-colors duration-75 hover:bg-opacity-10 hover:text-secondary-100 active:bg-opacity-20'
					aria-label={t.navContactAria}
					tabIndex={0}>
					<FontAwesomeIcon icon={faEnvelope} className='w-6 mr-2' />
					{t.navContact}
				</Link>
			</HeaderNavMenu>
		</header>
	);
}
