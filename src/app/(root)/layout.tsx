import type { Metadata } from 'next';
import { Outfit, M_PLUS_2, Vollkorn, Noto_Serif_JP } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const outfit = Outfit({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
});

const mPlus2 = M_PLUS_2({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
});

const vollkorn = Vollkorn({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
});

const notoSerifJp = Noto_Serif_JP({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Papita con Puré',
	description: 'Personal website for Papita con Puré',
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html
			lang='es'
			className={`${outfit.className} ${mPlus2.className} ${vollkorn.className} ${notoSerifJp.className}`}>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body className='w-full bg-background pt-[60px] font-default-sans text-foreground antialiased'>
				<Header lang='es' />
				{children}
				<Footer lang='es' />
			</body>
		</html>
	);
}
