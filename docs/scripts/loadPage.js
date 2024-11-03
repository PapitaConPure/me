var currentPage;
var currentX = 0;
var currentY = -1;

//Asegurar que exista una etiqueta main de contenido de página válida
(() => {
	let main = document.getElementById('content') || document.getElementsByTagName('main').item(0);
	if(!main)
		main = document.createElement('main');
	main.id = 'content';
	document.body.appendChild(main);
})();

/**
 * Carga una nueva etiqueta main con nuevo contenido de página, intercambiándola por la anterior etiqueta main de contenido
 * @param {string} page 
 * @param {number} x 
 * @param {number} y 
 */
async function loadPage(page, x = null, y = null) {
	try {
		const main = document.getElementById('content');
		if(!main)
			throw new TypeError('Page content element was not found');

		if(!page)
			throw new TypeError('Page path string was not provided');

		if(!page.endsWith('.html')) {
			console.warn(`HTML extension wasn\'t specified for: "${page}"`);
			page += '.html';
		}

		if(currentPage === page)
			return;

		currentPage = page;

		//Fallback a página de 404
		let response = await fetch(`pages/${page}`);
		if(response.status === 404) {
			console.error(`Page: ${page}`);
			response = await fetch('pages/404.html');
		}
		
		const newMain = document.createElement('main');
		newMain.id = 'content';

		const newMainHTML = await response.text();
		newMain.innerHTML = newMainHTML.trim();

		//#region Transición
		x ??= currentX;
		y ??= currentY;
		x = +x;
		y = +y;
		
		const calcTranslation = (from, to, step) => {
			const diff = to - from;
			const distance = Math.pow(diff, 2);
			const orientation = Math.sign(diff);
			return step * distance * orientation;
		};
		
		const translationX = calcTranslation(currentX, x, 24);
		const translationY = calcTranslation(currentY, y, 18);
		
		console.info(
			'Positional page swap transition',
			'\n(', currentX, ',', currentY, ')  ->  (', x, ',', y, ')',
			'\n{', translationX, 'px,', translationY, 'px }'
		);
		
		const ms = newMain.style;
		ms.setProperty('--page-transition-from-x', `${translationX}px`);
		ms.setProperty('--page-transition-from-y', `${translationY}px`);

		currentX = x;
		currentY = y;
		//#endregion

		//Intercambiar contenidos de página
		document.body.insertBefore(newMain, main);
		main.remove();

		//Esperar a que pase un ciclo de renderizado para comenzar transición
		setTimeout(() => {
			newMain.classList.add('active');
			globalThis.scrollTo({ top: 0, behavior: 'smooth' });
		}, 17);

		//Configurar botones internos en nuevo contenido de página
		newMain.querySelectorAll('button[page]').forEach(link => {
			link.addEventListener('click', async event => {
				const page = link.getAttribute('page');
				const x = link.getAttribute('x') || null;
				const y = link.getAttribute('y') || null;
				const fromX = link.getAttribute('from-x') || null;
				const fromY = link.getAttribute('from-y') || null;
				currentX = fromX ? +fromX : currentX;
				currentY = fromY ? +fromY : currentY;
				await loadPage(page, x, y);
			});
		});
	} catch(error) {
		console.error(error);
	}
}
