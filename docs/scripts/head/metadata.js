const site = {
	url: 'https://papitaconpure.github.io/me',
	domain: 'papitaconpure.github.io',
	name: 'Papita con Puré',
	title: 'Papita con Puré',
	description: 'Información acerca de Papita con Puré',
};

const head = document.head || document.getElementsByTagName("head")[0];
const titleElement = head.getElementsByClassName('title').item(0);
const descriptionElement = document.getElementById('description');

if(descriptionElement) {
	descriptionElement.setAttribute('name', 'description');
} else {
	const newDesc = document.createElement('meta');
	newDesc.name = 'description';
	newDesc.content = site.description;
	head.appendChild(newDesc);
}

const page = {
	title: (titleElement && titleElement.textContent) || site.title,
	description: (descriptionElement && descriptionElement.content) || site.description,
};

const metaTags = [
	//General
	[ 'name', 'author', 'Papita con Puré' ],
	[ 'name', 'theme-color', '#9c162d' ],
	[ 'name', 'description', page.description ],

	//Facebook/Redes generales
	[ 'property', 'og:url', site.url ],
	[ 'property', 'og:type', 'website' ],
	[ 'property', 'og:site_name', site.name ],
	[ 'property', 'og:title', page.title ],
	[ 'property', 'og:description', page.description ],

	//Twitter/X
	[ 'name', 'twitter:card', 'summary_large_image' ],
	[ 'property', 'twitter:domain', site.domain ],
	[ 'property', 'twitter:url', site.url ],
	[ 'name', 'twitter:title', page.title ],
	[ 'name', 'twitter:description', page.description ],
];

for(const metaTag of metaTags) {
	const [ key, value, content ] = metaTag;
	const meta = document.createElement('meta');
	meta.setAttribute(key, value);
	meta.content = content;
	head.appendChild(meta);
}
