import BackSection from '@/components/BackSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LanguageRedirect from '@/components/LanguageRedirect';
import { isValidLocale } from '@/lib/i18n';
import { M_PLUS_2, Noto_Serif_JP, Outfit, Vollkorn } from 'next/font/google';
import { redirect } from 'next/navigation';

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

interface NotFoundProps {
	params: Promise<{ lang: string }>;
}

export default async function NotFound({ params }: NotFoundProps) {
	const lang = params ? (await params)?.lang : undefined;

	if (!lang || !isValidLocale(lang)) {
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
					<main>
						<section>
							<div className='flex justify-center'>
								<div className='flex flex-col items-center space-y-8'>
									<div className='text-9xl'>🥔</div>
									<p>La dirección especificada no existe.</p>
								</div>
							</div>
						</section>
						<BackSection href='/'>
							Volver a <span className='font-semibold'>Inicio</span>
						</BackSection>
					</main>
                    <Footer lang='es'/>
					<LanguageRedirect conditional />
				</body>
			</html>
		);
	}

	return redirect(`/${lang}/not-found`);
}
