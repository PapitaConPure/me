import { defaultLocale, getMessages, isValidLocale, locales } from '@/lib/i18n';
import Tr from '@/lib/i18n/Tr';
import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';

export const viewport: Viewport = {
	themeColor: '#c97f72',
};

interface AboutProps {
	params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AboutProps): Promise<Metadata> {
	const lang = params ? (await params)?.lang : defaultLocale;

	if (!lang || !isValidLocale(lang)) return { title: 'Not Found' };

	const messages = await getMessages(lang);
	if (!messages) return { title: 'Not Found' };
	const t = messages.About;

	return {
		title: t.title,
		description: t.subtitle,
		openGraph: {
			title: t.title,
			description: t.subtitle,
			images: ['https://papitaconpure.github.io/potato.webp'],
			type: 'website',
			siteName: messages.General.metaSiteName,
		},
		twitter: {
			card: 'summary_large_image',
			title: t.title,
			description: t.subtitle,
			creator: messages.General.papitaName,
			site: 'https://papitaconpure.github.io',
			images: ['https://papitaconpure.github.io/potato.webp'],
		},
	};
}

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

const About = async ({ params }: AboutProps) => {
	const lang = (await params).lang;

	if (!isValidLocale(lang)) return notFound();

	const messages = await getMessages(lang);
	if (!messages) return notFound();
	const t = messages.About;

	return (
		<main>
			<section className='header'>
				<h1 className='title'>{t.title}</h1>
				<p className='subtitle'>{t.subtitle}</p>
			</section>

			<section>
				<div className='grid auto-rows-max grid-cols-1 md:grid-cols-10'>
					<div className='col-start-1 mx-1 my-1 rounded-md bg-primary-600 px-4 py-3 md:col-end-8'>
						<div className='flex h-full flex-col items-center'>
							<h2 className='mb-2 text-center text-2xl font-bold text-foreground'>
								{t.basicInfoTitle}
							</h2>
							<div className='flex flex-grow flex-col items-center justify-center'>
								<ul className='mb-1 grid list-disc grid-cols-1 gap-x-2 gap-y-1 text-primary-50 marker:text-white md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:gap-x-6 lg:gap-y-3'>
									<li className='ml-6 text-wrap'>
										<Tr components={{ 1: <b /> }} t={t.basicInfoInitials} />
									</li>
									<li className='ml-6 text-wrap'>
										<Tr components={{ 1: <b /> }} t={t.basicInfoNickname} />
									</li>
									<li className='ml-6 text-wrap'>
										<Tr components={{ 1: <b /> }} t={t.basicInfoBirthyear} />
									</li>
									<li className='ml-6 text-wrap'>
										<Tr components={{ 1: <b /> }} t={t.basicInfoBirthday} />
									</li>
									<li className='ml-6 text-wrap'>
										<Tr components={{ 1: <b /> }} t={t.basicInfoNationality} />
									</li>
									<li className='ml-6 text-wrap'>
										<Tr components={{ 1: <b /> }} t={t.basicInfoLanguages} />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-span-full mx-1 my-1 rounded-md bg-secondary-900 px-4 py-3 md:col-start-8'>
						<div className='flex h-full flex-col items-center'>
							<h2 className='mb-2 text-center text-2xl font-bold text-foreground'>
								{t.likesTitle}
							</h2>
							<div className='flex flex-grow flex-col items-center justify-center'>
								<ul className='mb-1 grid list-disc grid-cols-1 gap-x-2 gap-y-1 text-secondary-100 marker:text-accent-300 md:gap-y-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-3'>
									<li className='ml-6 text-wrap'>{t.likesCoffee}</li>
									<li className='ml-6 text-wrap'>{t.likesPiano}</li>
									<li className='ml-6 text-wrap'>Risk of Rain</li>
									<li className='ml-6 text-wrap'>{t.likesKonoSuba}</li>
									<li className='ml-6 text-wrap'>{t.likesVTubers}</li>
									<li className='ml-6 text-wrap'>{t.likesTouhou}</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-start-1 mx-1 my-1 rounded-md bg-foreground px-4 py-3 md:col-end-7'>
						<div className='flex h-full flex-col items-center'>
							<h2 className='mb-2 text-center text-2xl font-bold text-background'>
								{t.hobbiesTitle}
							</h2>
							<div className='flex flex-grow flex-col items-center justify-center'>
								<ul className='mb-1 grid list-disc grid-cols-1 gap-x-2 gap-y-1 text-secondary-900 marker:text-accent-300 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-4 lg:gap-x-6 lg:gap-y-3'>
									<li className='ml-6 text-wrap'>{t.hobbiesGaming}</li>
									<li className='ml-6 text-wrap'>{t.hobbiesProgramming}</li>
									<li className='ml-6 text-wrap'>{t.hobbiesProduction}</li>
									<li className='ml-6 text-wrap'>{t.hobbiesDesign}</li>
									<li className='ml-6 text-wrap'>{t.hobbiesModeling}</li>
									<li className='ml-6 text-wrap'>{t.hobbiesDrawing}</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-span-full mx-1 my-1 rounded-md bg-accent-600 px-4 py-3 md:col-start-7'>
						<div className='flex h-full flex-col items-center'>
							<h2 className='mb-2 text-center text-2xl font-bold text-foreground'>
								{t.professionsTitle}
							</h2>
							<div className='flex flex-grow flex-col items-center justify-center'>
								<ul className='mb-1 grid list-disc grid-cols-1 gap-x-2 gap-y-1 text-accent-50 marker:text-white md:gap-x-4 md:gap-y-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-3'>
									<li className='ml-6 text-wrap'>{t.professionsGameDev}</li>
									<li className='ml-6 text-wrap'>
										{t.professionsProgrammer}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<h2 className='section-h2'>{t.briefDescriptionTitle}</h2>
				<p className='mt-2'>
					Soy un programador profesional. Por hobby, desarrollo videojuegos; hago
					composiciones y arreglos musicales; diseño, modelo y renderizo en 3D; dibujo
					pixelart y hago diseño gráfico.
				</p>
			</section>

			<section>
				<h2 className='section-h2'>{t.storyTitle}</h2>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					Desde muy pequeño me interesa todo el proceso creativo del desarrollo de
					videojuegos y la producción musical. Aprendí por mi cuenta con recursos en línea
					y a medida que crecí no fui sino refinando ambas habilidades. Ambas me gustan
					por razones a veces similares y a veces particulares.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					Por un lado, la idea de crear tu propio mundo con tus propias reglas y verlo
					crecer con el tiempo es algo que me fascina y nunca me podría aburrir al
					desarrollar videojuegos. Durante mi niñez siempre me gustó construir casitas y
					otras cosas con piezas de madera que le sobraban a mi padre o a veces incluso
					con LEGOs que en ese entonces eran relativamente económicos en el país. Es el
					esfuerzo y fallo constante el que hace que el resultado final se sienta tan
					satisfactorio. ¿Es muchísimo trabajo? Claramente. Hacer un juego es un proceso
					multi-disciplinario que suele ser realizado por grandes grupos de personas. Sin
					embargo, hay un encanto muy particular en lograr desarrollar un juego por tu
					cuenta. Hacer juegos es genuinamente de las cosas que más me ilumina el alma y
					se ha vuelto algo irremplazable en mi vida. Es de esas cosas que te hacen seguir
					adelante.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					Por otro lado, la música es un lenguaje universal y uno en el que a veces
					resulta más fácil comunicarse que en idiomas hablados. Aprecio mucho la
					capacidad de la música de comunicar emociones y contar historias sin palabras ni
					imágenes. No me veo dejando de lado la producción musical en los años por venir.
					De inicio a fin resulta muy mágico y agradezco a mi curiosidad de inicios de
					secundaria por empujar esto a mi mente. Realmente solo entiendo teoría musical
					básica, y el único instrumento que sé tocar un poco es el piano. Me encantaría
					aprender a tocar mejor cuando tenga suficiente tiempo y la motivación. La
					programación de melodías no le quita el mérito a la producción musical. Sin
					embargo, tengo muchas ganas de experimentar el dinamismo y la expresividad de
					instrumentos reales en una composición propia.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					A medida que pasó el tiempo, fui explorando e incorporando nuevos intereses a la
					mezcla. Esto incluye destacablemente: 3D, diseño gráfico y dibujo.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					La creación de animaciones 3D es algo de lo que recuerdo mostrar interés
					alrededor de mis 12 años. No le di mayor importancia sino hasta más o menos
					mis... ¿18 años? que comencé a realizar animaciones para subir en YouTube junto
					a mi música. Hay miles de ramificaciones en las que uno se puede especializar
					cuando se trata de 3D y todas son bastante difíciles. Realmente respeto mucho a
					aquellos que pueden realizar animaciones profesionales por su cuenta. De
					momento, solo puedo imaginar crear algo profesional mientras sigo intentando
					hacer algo mejor que la última vez. Dicho esto, ignorando las ocasiones de
					dificultades técnicas, puede resultar un proceso muy terapéutico.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					En cuanto a diseño gráfico, particularmente digital, en realidad es un interés
					relativamente reciente que se me ha pegado. Cualquier cosa que tenga que ver con
					teoría de color, tipografía y disposición de elementos me mantiene distraído por
					largos periodos de tiempo. Que &quot;las cosas se vean bien&quot; es algo que
					busco constantemente desde hace unos 4 años.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					Desde que empecé a desarrollar videojuegos, surgió la necesidad de crear
					gráficos para estos. Inicialmente, nunca mostré un interés por arte tradicional
					o arte digital de alta resolución. Sin embargo, fue en esta época que comencé a
					dibujar mis primeros sprites pixel-art. Eventualmente agarré un gusto por
					dibujar de esta forma y eso eventualmente se tradujo a un interés en otras
					formas de arte visual. Actualmente, sigo siendo decenas de veces mejor dibujando
					pixel-art que cualquier otra forma de arte visual. No obstante, dibujar sigue
					siendo uno de mis hobbies y tengo planeado dominarlo.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					Entre otras cosas, tuve un periodo en el que me interesó ser escritor, pero mis
					habilidades narrativas dejan bastante que desear cuando se trata de textos
					largos. De todas formas, uno nunca sabe. Tal vez algún día lo retome. De
					momento, me gusta escribir documentación técnica sobre cosas que desarrollo cada
					tanto.
				</p>
				<p className='mb-8 mt-2 font-default-serif text-secondary-100 sm:text-lg'>
					Cambiando de tema, el café también me gusta desde pequeño. Aunque eso no es muy
					saludable a esa edad jaja.
				</p>
			</section>
		</main>
	);
};

export default About;
