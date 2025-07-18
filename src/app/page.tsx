'use client';

import Link from "next/link";

const Home = () => {
	return (
		<main className="page-active">
			<section className="my-16">
				<h1 className="mx-auto mb-2 w-max bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center font-default-sans text-6xl font-black text-transparent">
					Bienvenido
				</h1>
				<p className="my-2 text-center font-light text-secondary-100">
					¡Hola! Soy Papita con Puré. Este sitio ofrece información actualizada sobre mí,
					mis redes y mis proyectos. Además, para individuos, grupos u organizaciones con
					consultas, dudas, quejas, sugerencias, etc., se ofrece información pública de
					contacto&nbsp;
					<Link
						href="./contact"
						className="text-accent-400 hover:underline"
						aria-label="Información de contacto de Papita con Puré"
					>
						aquí
					</Link>
					.
				</p>
			</section>

			<section>
				<h2 className="section-h2 mb-3 mt-6 text-center">Encuéntrame</h2>

				<button
					className="bg-red-500 text-white"
					onClick={() => alert(`${process.env.PAGES_BASE_PATH} - ${process.env.NODE_ENV}`)}
				>
					AYUDA POR DIOS - {process.env.PAGES_BASE_PATH} - {process.env.NODE_ENV}
				</button>

				<div className="mx-auto w-full pr-2 sm:w-max sm:pr-0">
					<a
						tabIndex={0}
						href="https://www.youtube.com/channel/UCRXbJiF9G6D0nqq3mU38-gw"
						target="_blank"
						className="social-btn flex border-transparent bg-[#ff0000] hover:bg-[#d70000] active:bg-[#bc0000] sm:inline-flex"
						aria-label="YouTube"
					>
						<i className="fa fa-brands fa-youtube fa-lg pr-4"></i>
						<span className="w-full text-center">YouTube</span>
					</a>

					<a
						tabIndex={0}
						href="https://discord.com/users/423129757954211880"
						target="_blank"
						className="social-btn flex border-transparent bg-[#5865f2] hover:bg-[#4752c4] active:bg-[#3c45a5] sm:inline-flex"
						aria-label="Discord"
					>
						<i className="fa fa-brands fa-discord fa-lg pr-4"></i>
						<span className="w-full text-center">Discord</span>
					</a>

					<a
						tabIndex={0}
						href="https://x.com/PapitaPure"
						target="_blank"
						className="social-btn flex border-secondary-900 bg-black hover:bg-[#181919] active:bg-[#2e2f2f] sm:hidden md:inline-flex"
						aria-label="X (Twitter)"
					>
						<i className="fa fa-brands fa-x-twitter fa-lg pr-4"></i>
						<span className="w-full text-center">X (Twitter)</span>
					</a>

					<a
						tabIndex={0}
						href="https://github.com/PapitaConPure"
						target="_blank"
						className="social-btn flex border-transparent bg-[#1e2327] hover:bg-[#252c34] active:bg-[#292f38] sm:hidden md:inline-flex"
						aria-label="GitHub"
					>
						<i className="fa fa-brands fa-github fa-lg pr-4"></i>
						<span className="w-full text-center">GitHub</span>
					</a>
				</div>

				<div className="mx-auto hidden w-max sm:block md:hidden">
					<a
						tabIndex={0}
						href="https://x.com/PapitaPure"
						target="_blank"
						className="social-btn inline-flex border-secondary-900 bg-black hover:bg-[#181919] active:bg-[#2e2f2f]"
						aria-label="X (Twitter)"
					>
						<i className="fa fa-brands fa-x-twitter fa-lg pr-4"></i>
						<span className="w-full text-center">X (Twitter)</span>
					</a>

					<a
						tabIndex={0}
						href="https://github.com/PapitaConPure"
						target="_blank"
						className="social-btn inline-flex border-transparent bg-[#1e2327] hover:bg-[#252c34] active:bg-[#292f38]"
						aria-label="GitHub"
					>
						<i className="fa fa-brands fa-github fa-lg pr-4"></i>
						<span className="w-full text-center">GitHub</span>
					</a>
				</div>
			</section>

			<section>
				<h2 className="section-h2">Preguntas Frecuentes</h2>
				<div className="mb-3 ml-2 mt-6 flex w-2/3 items-center font-default-serif text-lg text-secondary-300 sm:text-xl">
					<i className="fa fa-question ml-2 mr-6 text-accent-main"></i>
					<h3 className="w-full">¿Lorem Ipsum dolor sit amet?</h3>
				</div>
				<div className="mb-3 ml-auto mr-2 mt-6 flex w-2/3 items-center text-right font-default-serif text-secondary-300 sm:text-lg">
					<p className="w-full">Lorem Ipsum dolor sit amet.</p>
					<i className="fa fa-feather ml-6 mr-2 text-accent-main"></i>
				</div>
			</section>

			<section>
				<div className="mx-1 my-6 rounded-md bg-primary-main px-2 py-1">
					<h2 className="mb-1 text-center font-default-sans text-3xl font-bold text-foreground">
						Aprende más sobre mí
					</h2>

					<Link
						href="/about"
						className="btn mx-auto my-4 block w-max bg-foreground font-semibold text-primary-main hover:bg-white active:bg-primary-100"
						aria-label="Acerca de Papita con Puré"
					>
						<span className="w-full select-none text-center">Vamos allá</span>
					</Link>
				</div>
			</section>

			<section>
				<h2 className="mb-1 text-center font-default-sans text-3xl font-bold text-foreground">
					Mis Proyectos
				</h2>

				<p className="text-center font-light text-secondary-100">
					Ofrezco un recopilado de varios de mis proyectos destacados.
				</p>

				<Link href={'/projects'} className="primary-btn mx-auto my-4 block w-max" aria-label="Ver Proyectos">
					<span className="w-full select-none text-center">Veámoslos</span>
				</Link>
			</section>
		</main>
	);
}

export default Home;
