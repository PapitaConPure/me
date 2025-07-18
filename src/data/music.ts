export type ExternalLink = {
	source: 'youtube' | 'soundcloud' | 'spotify' | 'other';
	label: string;
	url: string;
};

export type DownloadData = {
	url: string;
	size: string;
	label: string;
	external?: boolean;
};

export type AssetSpecification =
	| {
			kind: 'audio';
			format: 'mp3' | 'flac' | 'wav' | 'other';
	  }
	| {
			kind: 'image';
			format: 'jpg' | 'png' | 'gif' | 'webp' | 'other';
	  }
	| {
			kind: 'video';
			format: 'mp4' | 'mov' | 'webm' | 'other';
	  }
	| {
			kind: 'file';
			format: 'zip' | 'rar' | 'other';
	  };

export type DownloadUrl = DownloadData & AssetSpecification;

export type CategoryKey = 'original' | 'arrangement' | 'touhou' | 'piano' | 'medley';

export type FullArtistCredit = {
	name: string;
	url: string;
};

export type CreditsField = (string | FullArtistCredit)[];

export type BaseMusicItem = {
	id: string;
	artists: CreditsField;
	title: string;
	date: Date;
	categories: CategoryKey[];
	coverUrl: string;
	thumbnailUrl: string;
};

export type ExtendedMusicItemMetadata = {
	displayArtist?: string;
	composers?: CreditsField;
	arrangers?: CreditsField;
	mixers?: CreditsField;
	videoIllustrators?: CreditsField;
	thumbIllustrators?: CreditsField;
	coverIllustrators?: CreditsField;
	videoUrl?: string;
	externalLinks?: ExternalLink[];
	downloadUrls?: DownloadUrl[];
	tags?: string[];
};

export type SingleMusicItem = {
	kind: 'single';
	parentId?: string;
};

export type ChildMusicItemData = {
	kind: 'id' | 'name';
	data: string;
};

export type AlbumMusicItem = {
	kind: 'album' | 'ep';
	children: ChildMusicItemData[];
};

export type CompilationMusicItem = {
	kind: 'compilation';
	parentId?: string;
	childrenTitles: string[];
};

export type MusicItem = BaseMusicItem &
	ExtendedMusicItemMetadata &
	(SingleMusicItem | AlbumMusicItem | CompilationMusicItem);

const tewaCredit: FullArtistCredit = {
	name: 'Tewa',
	url: 'https://www.youtube.com/channel/UCEq9JPjn7HY9fH-zIcw4Qbg',
};

const karlCredit: FullArtistCredit = {
	name: 'Karl Zuñiga',
	url: 'https://www.youtube.com/channel/UCjVTRDb1tX-lDf2pvlj75Gw',
};

const items: MusicItem[] = [
	{
		id: 'th-piano-medley-6-17',
		kind: 'compilation',
		artists: ['ZUN', 'Papita con Puré'],
		composers: ['ZUN'],
		arrangers: ['Papita con Puré'],
		title: 'Touhou Piano Medley 6~17 7.5~16.5',
		date: new Date('2020-10-02'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: 'https://i.imgur.com/Br77B9v.png',
		thumbnailUrl: 'https://i.imgur.com/Br77B9v.png',
		videoUrl: 'https://www.youtube.com/watch?v=4FoF9akYFCc',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=4FoF9akYFCc',
			},
			{
				source: 'soundcloud',
				label: 'SoundCloud',
				url: 'https://soundcloud.com/user-158678041/piano-touhou-piano-medley-617-75165',
			},
		],
		childrenTitles: [
			'Entrusting this World to Idols ~ Idolatrize World',
			'Jelly Stone',
			'The Concealed Four Seasons ~ Hidden Star in All Seasons',
			'No More Going Through Doors',
			'Pure Furies ~ Whereabouts of the Heart',
			'Pandemonic Planet',
			'The Reversed Wheel of Fortune',
			'Primordial Beat ~ Pristine Beat',
			'Mysterious Purification Rod',
			'Shoutoku Legend ~ True Administrator',
			'Night Sakura of Dead Spirits',
			'Emotional Skyscraper ~ Cosmic Mind',
			'Rural Makai City Esoteria',
			'Green-Eyed Jealousy',
			'The Sealed Away Youkai ~ Lost Place',
			'The Venerable Ancient Battlefield ~ Suwa Foughten Field',
			'Faith is for the Transient People',
			'Mound of Life',
			'Eastern Judgement of the Sixtieth Year ~ Fate of Sixty Years',
			'Kaeidzuka ~ Higan Retour',
			'Eternal Dream ~ Mystic Maple',
			'Voyage 1969',
			'Flight of the Bamboo Cutter ~ Lunatic Princess',
			'Gensokyo Millennium ~ History of the Moon',
			'Bloom Nobly, Ink-Black Cherry Blossoms ~ Border of Life',
			'Ultimate Truth',
			'The Capital City of Flowers in the Sky',
			'The Doll Maker of Bucuresti',
			'Septette for the Dead Princess',
			'Lunate Elf',
			'Onigashima in the Fairyland',
			'Swift Battle',
			'Wind Circulation ~ Wind Tour',
			'Tengu is Watching ~ Black Eyes',
			'Broken Moon',
			"The Ground's Color is Yellow",
			'Our Hisou Tensoku',
			'The Legendary Titan',
			'Bell of Avici ~ Infinite Nightmare',
			'The Youkai Mountain ~ Mysterious Mountain',
			'Magus Night',
			'Great Fairy Wars ~ Fairy Wars',
			'Shinkirou Orchestra',
			'The Lost Emotion',
			'Cheat Against the Impossible Danmaku',
			'Eternal Short-Lived Reign',
			'Bamboo Forest in Flames',
			'Battlefield of Hanahazama',
			'Tonight Stars an Easygoing Egoist ~ Egoistic Flowers',
			'Spirit Possession Flowers in Full Bloom',
			"The Ground's Color is Yellow ~ Primrose",
			'The Palanquin Ship Flies in the Sky',
			'Constant and Unchanging',
			'Lunatic Dreamer',
			'Nightmare Diary',
			"Kid's Festival ~ Innocent Treasures",
		],
		tags: ['piano medley', 'low quality'],
	},
	{
		id: 'okina-piano-drums',
		kind: 'single',
		artists: ['ZUN', 'Papita con Puré'],
		composers: ['ZUN'],
		arrangers: ['Papita con Puré'],
		title: 'The Concealed Four Seasons',
		date: new Date('2020-04-05'),
		categories: ['arrangement', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=wql8JViepME',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=wql8JViepME',
			},
			{
				source: 'soundcloud',
				label: 'SoundCloud',
				url: 'https://soundcloud.com/user-158678041/the-concealed-four-seasons',
			},
		],
		tags: ['piano arrangement', 'piano and drums', 'low quality'],
	},
	{
		id: 'will-not-to-vanish-in-fragments',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'Will not to Vanish in Fragments',
		date: new Date('2020-04-06'),
		categories: ['original'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=pC9NJpZaBSQ',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=pC9NJpZaBSQ',
			},
		],
		tags: ['rock', 'low quality'],
	},
	{
		id: 'cafe-terrace-memories',
		kind: 'single',
		artists: ['ZUN', 'Papita con Puré'],
		composers: ['ZUN'],
		arrangers: ['Papita con Puré'],
		title: 'Café Terrace Memories',
		date: new Date('2020-04-14'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=bVmKeNlKcww',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=bVmKeNlKcww',
			},
		],
		tags: ['piano arrangement', 'low quality'],
	},
	{
		id: 'popular-emotion',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'Popular Emotion',
		date: new Date('2020-07-12'),
		categories: ['original', 'piano'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=1cQETTxVr54',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=1cQETTxVr54',
			},
		],
		tags: ['pop', 'piano original', 'piano and drums', 'low quality'],
	},
	{
		id: 'reimu-dead-god',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'The Shrine that Worships a Dead God',
		date: new Date('2020-10-07'),
		categories: ['original', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=i6mr_mJn7bw',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=i6mr_mJn7bw',
			},
		],
		tags: ['rock', 'touhou style', 'low quality'],
	},
	{
		id: 'neko-4-op-piano',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'NEKOPARA Vol.4『SWEET×SWEET』',
		date: new Date('2020-10-07'),
		categories: ['arrangement', 'piano'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=hi6XAS9oVME',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=hi6XAS9oVME',
			},
		],
		tags: ['piano arrangement', 'low quality'],
	},
	{
		id: 'last-remote-piano',
		kind: 'single',
		artists: ['ZUN', 'Papita con Puré'],
		composers: ['ZUN'],
		arrangers: ['Papita con Puré'],
		title: 'Last Remote',
		date: new Date('2020-12-19'),
		categories: ['arrangement', 'piano'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=J8RcKwhwtwU',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=J8RcKwhwtwU',
			},
		],
		tags: ['piano arrangement', 'low quality'],
	},
	{
		id: 'former-hell-showdown',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'Former Hell Showdown',
		date: new Date('2020-12-22'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/oni-showdown/onishowdown.webp',
		thumbnailUrl: '/images/music/oni-showdown/onishowdown.webp',
		thumbIllustrators: [
			{
				name: '村上４時',
				url: 'https://www.pixiv.net/artworks/27717558',
			},
			{
				name: 'サニーサイドアップ🍳',
				url: 'https://www.pixiv.net/artworks/79775495',
			},
		],
		videoUrl: 'https://www.youtube.com/watch?v=y0hiITwc4M4',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=y0hiITwc4M4',
			},
		],
		tags: ['touhou fighter style', 'touhou style'],
	},
	{
		id: 'tredecillion-tears',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'Night of a Tredecillion Tears',
		date: new Date('2020-12-29'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/tredecillion-tears/cover.png',
		thumbnailUrl: '/images/music/tredecillion-tears/sadnight.webp',
		videoUrl: 'https://www.youtube.com/watch?v=eMV6GF3DqOE',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=eMV6GF3DqOE',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista de audio (320kbps)',
				size: '16.7 MB',
				url: '/audio/music/tredecillion-tears/Night of a Tredecillion Tears.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Portada (356x356)',
				size: '171 KB',
				url: '/images/music/tredecillion-tears/cover.png',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: 'Portada (200x200)',
				size: '24.8 KB',
				url: '/images/music/tredecillion-tears/Folder.jpg',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.31 MB',
				url: '/images/music/tredecillion-tears/sadnight.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '84.6 KB',
				url: '/images/music/tredecillion-tears/sadnight.webp',
			},
		],
		tags: ['gensofest', 'legacy of lunatic kingdom', 'touhou style'],
	},
	{
		id: 'pateka-1',
		kind: 'single',
		displayArtist: 'PaTeKa',
		artists: ['Papita con Puré', tewaCredit, karlCredit],
		videoIllustrators: [
			{
				name: 'MerlimAmbrosuis',
				url: 'https://www.pixiv.net/artworks/80453394',
			},
		],
		title: 'Rabbit of the Bar ~ Red and White Tubercle',
		date: new Date('2021-01-07'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/pateka-1/cover.png',
		thumbnailUrl: '/images/music/pateka-1/pateka.webp',
		videoUrl: 'https://www.youtube.com/watch?v=uH7cO2KRkuU',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube (por Papita con Puré)',
				url: 'https://www.youtube.com/watch?v=uH7cO2KRkuU',
			},
			{
				source: 'youtube',
				label: 'YouTube (por Karl Zuñiga)',
				url: 'https://www.youtube.com/watch?v=453ZQbXvCXA',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista de audio (320kbps)',
				size: '15.2 MB',
				url: '/audio/music/pateka-1/PaTeKa1.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Portada (5000x5000)',
				size: '14.7 MB',
				url: '/images/music/pateka-1/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.42 MB',
				url: '/images/music/pateka-1/pateka.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '62.5 KB',
				url: '/images/music/pateka-1/pateka.webp',
			},
		],
		tags: ['windows era 1 style', 'touhou style', 'collab'],
	},
	{
		id: 'track1',
		kind: 'single',
		artists: ['Papita con Puré'],
		title: 'TEST TEST TEST',
		date: new Date('2024-01-01'),
		categories: ['original', 'piano'],
		coverUrl: 'https://pbs.twimg.com/media/GwBLbK7WMAATt07?format=jpg',
		thumbnailUrl: 'https://pbs.twimg.com/media/GwBLbK7WMAATt07?format=jpg',
		videoUrl: 'https://www.youtube.com/watch?v=UDjJdx0bxG8',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=UDjJdx0bxG8',
			},
			{
				source: 'soundcloud',
				label: 'SoundCloud',
				url: 'https://soundcloud.com/papitaconpure/touhou-piano-medley-1',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				url: 'https://example.com/download/super-tetas-gordas.mp3',
				size: '5 MB',
				label: 'Pista completa (320 Kbps)',
			},
			{
				kind: 'audio',
				format: 'flac',
				url: 'https://example.com/download/super-tetas-gordas.flac',
				size: '15 MB',
				label: 'Pista completa (24-bit)',
			},
			{
				kind: 'image',
				format: 'webp',
				url: 'https://example.com/download/super-tetas-gordas.webp',
				size: '3 MB',
				label: 'Miniatura',
			},
			{
				kind: 'video',
				format: 'mov',
				url: 'https://example.com/download/super-tetas-gordas.mov',
				size: '95 MB',
				label: 'Escena 1 - Bucle (DNxHR HQ)',
			},
			{
				kind: 'file',
				format: 'zip',
				url: 'https://example.com/download/super-tetas-gordas.zip',
				size: '118 MB',
				label: 'Todos los recursos',
				external: true,
			},
		],
		tags: ['original', 'piano', 'touhou'],
	},
	{
		id: 'track2',
		kind: 'album',
		artists: ['Papita con Puré'],
		title: 'MASIVO',
		date: new Date('2024-01-02'),
		categories: ['original', 'piano'],
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=UDjJdx0bxG8',
			},
			{
				source: 'soundcloud',
				label: 'SoundCloud',
				url: 'https://soundcloud.com/papitaconpure/touhou-piano-medley-1',
			},
		],
		children: [
			{
				kind: 'id',
				data: 'track1',
			},
			{
				kind: 'id',
				data: 'track3',
			},
			{
				kind: 'name',
				data: 'Machu Picchu Serre siete',
			},
			{
				kind: 'id',
				data: 'track4',
			},
		],
		coverUrl: 'https://pbs.twimg.com/media/Gv0nMuOXEAAcJfd?format=jpg',
		thumbnailUrl: 'https://pbs.twimg.com/media/Gv0nMuOXEAAcJfd?format=jpg',
	},
	{
		id: 'track3',
		kind: 'single',
		displayArtist: 'PaTeKa',
		artists: ['Papita con Puré', 'Karl Zuñiga', 'Tewa'],
		title: 'PaTeKa 57',
		date: new Date('2024-01-02'),
		categories: ['original', 'piano'],
		coverUrl: 'https://pbs.twimg.com/media/Gv-IfGPWIAAtOkU?format=jpg',
		thumbnailUrl: 'https://pbs.twimg.com/media/Gv-IfGPWIAAtOkU?format=jpg',
	},
	{
		id: 'track4',
		kind: 'single',
		artists: ['Tokoyami Towa'],
		title: 'BAZUBI BAZAB',
		date: new Date('2024-01-02'),
		categories: ['original'],
		coverUrl: 'https://hololive.hololivepro.com/wp-content/uploads/2025/06/BAZUBIBAZAB.png',
		thumbnailUrl: 'https://hololive.hololivepro.com/wp-content/uploads/2025/06/BAZUBIBAZAB.png',
	},
	{
		id: 'track5',
		kind: 'single',
		artists: ['Bancho'],
		title: 'BANZAI',
		date: new Date('2024-01-02'),
		categories: ['original'],
		coverUrl: 'https://hololive.hololivepro.com/wp-content/uploads/2025/06/BANZAI.png',
		thumbnailUrl: 'https://hololive.hololivepro.com/wp-content/uploads/2025/06/BANZAI.png',
	},
];

const itemsById: Record<string, MusicItem> = {};
items.forEach((item) => {
	itemsById[item.id] = item;
});

items.reverse();

export default items;
export { itemsById };
