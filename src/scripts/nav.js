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
