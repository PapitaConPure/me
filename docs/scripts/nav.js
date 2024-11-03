const nav = document.createElement('nav');
nav.innerHTML = `
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
		<div class="text-primary-50 text-2xl font-bold">Papita con Puré</div>
		<div class="hidden space-x-4 md:flex">
			<a tabindex="1" href="./index.html" class="navbar-desktop-item">Inicio</a>
			<a tabindex="1" href="./about.html" class="navbar-desktop-item">Acerca de</a>
			<a tabindex="1" href="./projects.html" class="navbar-desktop-item">Proyectos</a>
			<a tabindex="1" href="./contact.html" class="navbar-desktop-item">Contacto</a>
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
		<a tabindex="1" href="./index.html" class="navbar-mobile-item">Inicio</a>
		<a tabindex="1" href="./about.html" class="navbar-mobile-item">Acerca de</a>
		<a tabindex="1" href="./projects.html" class="navbar-mobile-item">Proyectos</a>
		<a tabindex="1" href="./contact.html" class="navbar-mobile-item">Contacto</a>
	</div>
`.trim();

document.body.insertBefore(nav, document.body.firstChild);

const menuToggleReveal = document.getElementById('menu-reveal');
const menuToggleCollapse = document.getElementById('menu-collapse');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
	mobileMenu.classList.toggle('hidden');
	menuToggleReveal.classList.toggle('hidden');
	menuToggleCollapse.classList.toggle('hidden');
}

menuToggleReveal.addEventListener('click', toggleMobileMenu);
menuToggleCollapse.addEventListener('click', toggleMobileMenu);
