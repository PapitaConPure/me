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
 */
async function loadPage(page) {
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

		let response = await fetch(`pages/${page}`);
		if(response.status === 404) {
			console.error(`Page: ${page}`);
			response = await fetch('pages/404.html');
		}

		const mainHTML = await response.text();
		main.innerHTML = mainHTML.trim();
	} catch(error) {
		console.error(error);
	}
}
