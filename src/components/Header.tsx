import getRoot from '@/lib/getroot';
import { getMessages, Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderLanguagePicker, HeaderNavButton, MenuItem } from './HeaderClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faEnvelope,
	faHome,
	faLaptopCode,
	faMusic,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { HTMLAttributes } from 'react';
import { SectionAcrossLocales } from '@/types/i18n';

interface HeaderMenuProps<TLocale extends Locale> extends HTMLAttributes<HTMLUListElement> {
	mobile?: boolean;
	lang: TLocale;
	t: SectionAcrossLocales<'Layout'>;
}

function HeaderMenu<TLocale extends Locale>({
	mobile,
	lang,
	t,
	...props
}: HeaderMenuProps<TLocale>) {
	return (
		<ul {...props}>
			<MenuItem
				mobile={mobile}
				href={`/${lang}`}
				icon={mobile ? faHome : undefined}
				label={t.navHome}
				aria-label={t.navHomeAria}
				tabIndex={0}
			/>
			<MenuItem
				mobile={mobile}
				href={`/${lang}/about`}
				icon={mobile ? faQuestionCircle : undefined}
				label={t.navAbout}
				aria-label={t.navAboutAria}
				tabIndex={0}
			/>
			<MenuItem
				mobile={mobile}
				href={`/${lang}/projects`}
				icon={mobile ? faLaptopCode : undefined}
				label={t.navProjects}
				aria-label={t.navProjectsAria}
				tabIndex={0}
			/>
			<MenuItem
				mobile={mobile}
				href={`/${lang}/music`}
				icon={mobile ? faMusic : undefined}
				label={t.navMusic}
				aria-label={t.navMusicAria}
				tabIndex={0}
			/>
			<MenuItem
				mobile={mobile}
				href={`/${lang}/contact`}
				icon={mobile ? faEnvelope : undefined}
				label={t.navContact}
				aria-label={t.navContactAria}
				tabIndex={0}
			/>
			<HeaderLanguagePicker
				mobile={mobile}
				label={(mobile) ? t.langPicker : undefined}
				langPickerAria={t.langPickerAria}
			/>
		</ul>
	);
}

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
			className='fixed top-0 z-50 w-full border-b border-b-secondary-800 border-opacity-60 bg-background bg-opacity-60 backdrop-blur-md transition-all motion-reduce:bg-opacity-80 motion-reduce:backdrop-blur-lg'>
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
						className='my-auto h-8 w-auto text-sm font-light'
					/>
					<span className='select-none'>{t.headerName}</span>
				</Link>

				<nav className='hidden md:block'>
					<HeaderMenu
						role='menubar'
						lang={lang}
						t={t}
						className='flex list-none items-stretch space-x-1'
					/>
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

			<nav
				id='mobile-menu'
				className='flex h-0 list-none flex-col overflow-hidden rounded-b-md transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none md:hidden'>
				<HeaderMenu mobile role='menu' lang={lang} t={t} />
			</nav>
		</header>
	);
}
