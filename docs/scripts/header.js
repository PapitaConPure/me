fetch('components/header.html')
.then(response => response.text())
.then(header => {
	const template = document.createElement('template');
	template.innerHTML = header.trim();
	document.body.insertBefore(template.content, document.body.firstChild);

	document.querySelectorAll('button[page]').forEach(link => {
		link.addEventListener('click', async event => {
			const page = link.getAttribute('page');
			await loadPage(page);
		});
    });

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
})
.catch(console.error);
