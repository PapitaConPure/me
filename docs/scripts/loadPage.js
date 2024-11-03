let currentPage;
let currentX = 0;

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
async function loadPage(page, x = 0) {
	console.info('currentX', currentX, '\nx', x);
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
		const r = document.querySelector(':root');
		const rs = r.style;
		if(currentX === x) {
			rs.setProperty('--page-transition-from-x', 0);
			rs.setProperty('--page-transition-from-y', '32px');
		} else {
			const step = 24;
			const diff = x - currentX;
			const distance = Math.pow(diff, 2);
			const orientation = Math.sign(diff);
			const translation = step * distance * orientation;
			rs.setProperty('--page-transition-from-x', `${translation}px`);
			rs.setProperty('--page-transition-from-y', 0);
		}

		currentX = x;

		setTimeout(() => newMain.classList.add('active'), 20);

		globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth', speed });
	} catch(error) {
		console.error(error);
	}
}

function swapPages() {
	page1.classList.toggle('active');
	page2.classList.toggle('active');
	
	if (page1.classList.contains('active')) {
		page2.classList.add('inactive');
		setTimeout(() => {
			page2.classList.remove('inactive');
		}, 500); // Wait for the fade out to finish
	} else {
		page1.classList.add('inactive');
		setTimeout(() => {
			page1.classList.remove('inactive');
		}, 500);
	}
}