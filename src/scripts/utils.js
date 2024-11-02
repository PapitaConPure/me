function createNavAndFooter() {
	const nav = document.createElement('nav');
	nav.innerHTML = `
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<div class="text-primary-50 text-2xl font-bold">Papita con Puré</div>
			<div class="hidden space-x-4 md:flex">
				<a tabindex="1" href="./" class="navbar-desktop-item">Inicio</a>
				<a tabindex="1" href="./about" class="navbar-desktop-item">Acerca de</a>
				<a tabindex="1" href="./projects" class="navbar-desktop-item">Proyectos</a>
				<a tabindex="1" href="./contact" class="navbar-desktop-item">Contacto</a>
			</div>
			<div class="md:hidden">
				<button tabindex="1" id="menu-reveal" class="menu-icon menu-icon-reveal">
					<i class="fa fa-bars fa-lg"></i>
				</button>
				<button
					tabindex="1"
					id="menu-collapse"
					class="menu-icon menu-icon-collapse hidden"
				>
					<i class="fa fa-bars fa-lg"></i>
				</button>
			</div>
		</div>

		<div id="mobile-menu" class="hidden md:hidden">
			<a tabindex="1" href="./" class="navbar-mobile-item">Inicio</a>
			<a tabindex="1" href="./about" class="navbar-mobile-item">Acerca de</a>
			<a tabindex="1" href="./projects" class="navbar-mobile-item">Proyectos</a>
			<a tabindex="1" href="./contact" class="navbar-mobile-item">Contacto</a>
		</div>
	`.trim();

	const footer = document.createElement('footer');
	footer.innerHTML = `
		<div>
			<span>
				<a href="https://github.com/PapitaConPure/me" target="_blank">
					<i class="fa fa-brands fa-github fa-lg"></i>
				</a>
			</span>
			•
			<span>2024</span>
			•
			<a href="https://github.com/PapitaConPure" target="_blank" class="hover:underline">
				Papita con Puré
			</a>
		</div>
	`.trim();

	document.body.insertBefore(nav, document.body.firstChild);
	document.body.appendChild(footer);
}
