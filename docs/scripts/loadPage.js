let currentPage;
let currentX = 0;
let currentY = -1;

(() => {
	let main = document.getElementById('content') || document.getElementsByTagName('main').item(0);
	if(!main)
		main = document.createElement('main');
	main.id = 'content';
	document.body.appendChild(main);
})();

/**
 * 
 * @param {string} page 
 * @param {number} x 
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

		let response = await fetch(`pages/${page}`);
		if(response.status === 404) {
			console.error(`Page: ${page}`);
			response = await fetch('pages/404.html');
		}

		const newMain = document.createElement('main');
		newMain.id = 'content';

		const newMainHTML = await response.text();
		newMain.innerHTML = newMainHTML.trim();
		document.body.insertBefore(newMain, main);
		main.remove();

		//Transición
		x ??= currentX;
		y ??= currentY;

		console.info('currentX', currentX, '\nx', x);
		console.info('currentY', currentY, '\ny', y);

		const calcTranslation = (from, to, step) => {
			const diff = to - from;
			const distance = Math.pow(diff, 2);
			const orientation = Math.sign(diff);
			return step * distance * orientation;
		};

		const translationX = calcTranslation(currentX, x, 24);
		const translationY = calcTranslation(currentY, y, 18);

		const r = document.querySelector(':root');
		const rs = r.style;
		rs.setProperty('--page-transition-from-x', `${translationX}px`);
		rs.setProperty('--page-transition-from-y', `${translationY}px`);

		currentX = x;
		currentY = y;

		setTimeout(() => {
			newMain.classList.add('active');
			globalThis.scrollTo({ top: 0, behavior: 'smooth' });
		}, 20);
	} catch(error) {
		console.error(error);
	}
}
