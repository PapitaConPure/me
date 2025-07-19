import { FullArtistCredit, MusicItem } from '@/types/music';

const papitaCredit: FullArtistCredit = {
	name: 'Papita con Puré',
	clarification: 'I. Z.',
};

const zunCredit: FullArtistCredit = {
	name: 'ZUN',
	clarification: '太田 順也',
	url: 'https://x.com/korindo',
};

const tewaCredit: FullArtistCredit = {
	name: 'Aidan',
	clarification: 'Tewa',
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
		artists: [zunCredit, papitaCredit],
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
		},
		title: 'Touhou Piano Medley 6~17 7.5~16.5',
		date: new Date('2020-10-02'),
		categories: ['arrangement', 'piano', 'touhou', 'medley'],
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
		artists: [zunCredit, papitaCredit],
		title: 'The Concealed Four Seasons',
		date: new Date('2020-04-05'),
		categories: ['arrangement', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=wql8JViepME',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
		},
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
		artists: [papitaCredit],
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
		artists: [zunCredit, papitaCredit],
		title: 'Café Terrace Memories',
		date: new Date('2020-04-14'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=bVmKeNlKcww',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
		},
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
		artists: [papitaCredit],
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
		artists: [papitaCredit],
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
		artists: [papitaCredit],
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
		artists: [zunCredit, papitaCredit],
		title: 'Last Remote',
		date: new Date('2020-12-19'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=J8RcKwhwtwU',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
		},
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
		artists: [papitaCredit],
		title: 'Former Hell Showdown',
		date: new Date('2020-12-22'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/oni-showdown/onishowdown.webp',
		thumbnailUrl: '/images/music/oni-showdown/onishowdown.webp',
		videoUrl: 'https://www.youtube.com/watch?v=y0hiITwc4M4',
		credits: {
			music: {
				composers: [papitaCredit],
			},
			visuals: {
				background: [
					{
						name: '🔞 RAT_Huang',
						clarification: 'nsfw',
						url: 'https://x.com/rat_huang_nsfw5',
					},
					{
						name: 'へるにゃー',
						clarification: 'hellnyaa',
						url: 'https://www.pixiv.net/artworks/83338488',
					},
					{
						name: '燗汰朗',
						url: 'https://www.pixiv.net/artworks/43615428',
					},
					{
						name: '光粒子 お仕事募集中',
						url: 'https://www.pixiv.net/artworks/58204203',
					},
					{
						name: 'ARUGERI',
						url: 'https://www.pixiv.net/artworks/42765222',
					},
				],
				thumbnail: [
					{
						name: '村上４時',
						url: 'https://www.pixiv.net/artworks/27717558',
					},
					{
						name: 'サニーサイドアップ🍳',
						url: 'https://www.pixiv.net/artworks/79775495',
					},
				],
			},
		},
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
		artists: [papitaCredit],
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
				label: 'Pista completa (320kbps)',
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
		artists: [papitaCredit, tewaCredit, karlCredit],
		title: 'Rabbit of the Bar ~ Red and White Tubercle',
		description:
			'Composition:\n• Papita con Puré (I. Z.) [Piano; Acoustic Guitar]\n• Karl Zuñiga [Drums; Strings; Bass]\n• Tewi [Violin; RTp]\nMixing: Karl Zuñiga',
		date: new Date('2021-01-07'),
		categories: ['collab', 'original', 'touhou'],
		coverUrl: '/images/music/pateka-1/cover.png',
		thumbnailUrl: '/images/music/pateka-1/pateka.webp',
		videoUrl: 'https://www.youtube.com/watch?v=uH7cO2KRkuU',
		credits: {
			music: {
				composers: [papitaCredit, tewaCredit, karlCredit],
				mixers: [karlCredit],
			},
			visuals: {
				background: [
					{
						name: 'MerlimAmbrosuis',
						url: 'https://www.pixiv.net/artworks/80453394',
					},
					{
						name: 'いと',
						url: 'https://www.pixiv.net/artworks/65190966',
					},
					{
						name: '«? (Potato)»',
						url: 'https://ar.pinterest.com/yomnaibrahim543/',
					},
					{
						name: '«? (Mashed potatoes)»',
						url: 'https://www.pixiv.net/artworks/65190966',
					},
					{
						name: '«? (Beer barrel)»',
						url: 'https://www.vhv.rs/viewpic/hxiwRhm_beer-barrel-png-beer-clipart-barrel-transparent-png/',
					},
				],
				thumbnail: [
					{
						name: 'MerlimAmbrosuis',
						url: 'https://www.pixiv.net/artworks/80453394',
					},
					{
						name: 'いと',
						url: 'https://www.pixiv.net/artworks/65190966',
					},
					{
						name: '«? (Potato)»',
						url: 'https://ar.pinterest.com/yomnaibrahim543/',
					},
					{
						name: '«? (Mashed potatoes)»',
						url: 'https://www.pixiv.net/artworks/65190966',
					},
					{
						name: '«? (Beer barrel)»',
						url: 'https://www.vhv.rs/viewpic/hxiwRhm_beer-barrel-png-beer-clipart-barrel-transparent-png/',
					},
				],
			},
		},
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
				label: 'Pista completa (320kbps)',
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
		tags: ['windows era 1 style', 'touhou style'],
	},
	{
		id: 'komakusa-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: 'The Perpetual Snow of Komakusa Blossoms',
		date: new Date('2021-03-25'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=BUNgOKm5Z8U',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'speckticuls',
						url: 'https://www.pixiv.net/artworks/88612985',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=BUNgOKm5Z8U',
			},
		],
		tags: ['piano arrangement'],
	},
	{
		id: 'sannyo-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: 'Smoking Dragon',
		date: new Date('2021-03-27'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=SeORE1zUuv8',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'ラプトル7',
						url: 'https://x.com/raputoru7/status/1375758441818419205',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=SeORE1zUuv8',
			},
		],
		tags: ['piano arrangement'],
	},
	{
		id: 'deep-green-cliff-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: 'The Cliff Hidden in Deep Green',
		date: new Date('2021-03-31'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/potato.webp',
		thumbnailUrl: '/potato.webp',
		videoUrl: 'https://www.youtube.com/watch?v=QLxJPqjB-kc',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'mefomefo',
						url: 'https://x.com/mefomefomefo/status/1373824227971858435',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=QLxJPqjB-kc',
			},
		],
		tags: ['piano arrangement'],
	},
	{
		id: 'take-and-forsake',
		kind: 'single',
		artists: [papitaCredit],
		title: 'Take and Forsake',
		date: new Date('2021-04-05'),
		categories: ['original'],
		coverUrl: '/images/music/eurotest-1/eurotest2.webp',
		thumbnailUrl: '/images/music/eurotest-1/eurotest2.webp',
		videoUrl: 'https://www.youtube.com/watch?v=tU2d7bvUaKM',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=tU2d7bvUaKM',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				url: '/audio/music/eurotest-1/Take and Forsake.mp3',
				size: '9.16 MB',
				label: 'Pista completa (320 Kbps)',
			},
			{
				kind: 'image',
				format: 'png',
				url: '/images/music/eurotest-1/eurotest2.png',
				size: '1.16 MB',
				label: 'Miniatura (720p)',
			},
			{
				kind: 'image',
				format: 'webp',
				url: '/images/music/eurotest-1/eurotest2.webp',
				size: '95.2 KB',
				label: 'Miniatura (720p)',
			},
		],
		tags: ['electronic', 'eurobeat'],
	},
	{
		id: 'cfteb',
		kind: 'single',
		artists: [papitaCredit],
		title: 'Claim from the Empire Below',
		date: new Date('2021-04-24'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/empire-below/cfteb.webp',
		thumbnailUrl: '/images/music/empire-below/cfteb.webp',
		videoUrl: 'https://www.youtube.com/watch?v=ESBQ5SPCnvc',
		credits: {
			music: {
				composers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'かわやばぐ',
						url: 'https://www.pixiv.net/artworks/88899968',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=ESBQ5SPCnvc',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista completa (320kbps)',
				size: '16.7 MB',
				url: '/audio/music/empire-below/Claim from the Empire Below.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.40 MB',
				url: '/images/music/empire-below/cfteb.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '114 KB',
				url: '/images/music/empire-below/cfteb.webp',
			},
		],
		tags: ['wily beast and weakest creature', 'touhou style'],
	},
	{
		id: 'touhou-18-piano-medley',
		kind: 'compilation',
		artists: [zunCredit, papitaCredit],
		title: 'Unconnected Marketeers Piano Medley',
		date: new Date('2021-05-07'),
		categories: ['arrangement', 'piano', 'touhou', 'medley'],
		coverUrl: '/images/music/th18-piano/cover.png',
		thumbnailUrl: '/images/music/th18-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=6xcmR72KTMk',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				foreground: ['Specktikulz'],
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'Rizzych',
						url: 'https://x.com/OrdinaryRizzych/status/1390359356156358662',
					},
					papitaCredit,
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=6xcmR72KTMk',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista completa (320kbps)',
				size: '43.6 MB',
				url: '/audio/music/th18-piano/Unconnected Marketeers Piano Medley.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Portada (724x724)',
				size: '840 KB',
				url: '/images/music/th18-piano/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.32 MB',
				url: '/images/music/th18-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '107 KB',
				url: '/images/music/th18-piano/thumbnail.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: 'Paquete completo',
				size: '107 KB',
				url: 'https://www.mediafire.com/file/helfrbn2dxukidt/Touhou_18_Piano_Medley.zip/file',
				external: true,
			},
		],
		childrenTitles: [
			'A Rainbow Spanning Gensokyo',
			'A Shower of Strange Occurrences',
			'Fortunate Kitten',
			'The Cliff Hidden in Deep Green',
			'Banditry Technology',
			'The Perpetual Snow of Komakusa Blossoms',
			'Smoking Dragon',
			'The Obsolescent Industrial Ruins',
			'Ore from the Age of the Gods',
			'The Long-Awaited Oumagatoki',
			'Starry Mountain of Tenma',
			'Lunar Rainbow',
			'Where is that Bustling Marketplace now ~ Immemorial Marketeers',
			'The Sunday after the Storm',
			'The Great Fantastic Underground Railway Network',
			'The Princess Who Slays Dragon Kings',
			'A Rainbow-Colored World',
		],
		tags: ['piano medley'],
	},
	{
		id: 'unused-film-strip',
		kind: 'single',
		artists: [papitaCredit],
		title: 'Unused Film Strip',
		description:
			'Character profile:' +
			'\nEishoku Hakuro' +
			'\n映色　白黒' +
			'\n(えいしょく　はくろ)' +
			'\n' +
			'\nShe was once a film strip from the outside world that was thrown away by the author because of a failure during its recording. A hundred years had passed when the strip surpassed reality and reached Gensokyo, becoming a tsukumogami.' +
			"\nShe's a surprisingly calm youkai, but if she finds something interesting in you she'll try to add you to her film. She doesn't know her strip got damaged, which could explain why she's trying to dump people into it." +
			'\nHer film starts with an old, black and white Kabuki performance and then distorts into incomprehensible frames.' +
			'\nAbility: Video Manipulation. This also allows her to add and remove people into and from her video.',
		date: new Date('2021-07-02'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/film-youkai/cover.png',
		thumbnailUrl: '/images/music/film-youkai/miniatura.webp',
		videoUrl: 'https://www.youtube.com/watch?v=tvu7C00Acdc',
		credits: {
			music: {
				composers: [papitaCredit],
			},
			visuals: {
				foreground: [
					'Pastel_Maddie',
				],
				background: [papitaCredit],
				thumbnail: [
					'Pastel_Maddie',
					papitaCredit,
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=tvu7C00Acdc',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista completa (320kbps)',
				size: '8.64 MB',
				url: '/audio/music/film-youkai/Unused Film Strip.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Retrato de Hakuro (2246x3109)',
				size: '1.34 MB',
				url: '/images/music/film-youkai/hakuro.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Portada (1080p)',
				size: '1.14 MB',
				url: '/images/music/film-youkai/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.95 MB',
				url: '/images/music/film-youkai/miniatura.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '155 KB',
				url: '/images/music/film-youkai/miniatura.webp',
			},
		],
		tags: ['touhou style', 'original character'],
	},
	{
		id: 'mind-yet-not-heart',
		kind: 'single',
		artists: [papitaCredit],
		title: 'Mind, Yet Not Heart',
		date: new Date('2021-11-25'),
		categories: ['original', 'piano'],
		coverUrl: '/images/music/heart-cup/cover.jpg',
		thumbnailUrl: '/images/music/heart-cup/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=RZeM2LkFyd0',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=RZeM2LkFyd0',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista completa (320kbps)',
				size: '9.26 MB',
				url: '/audio/music/heart-cup/Mind Yet Not Heart.mp3',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: 'Portada (966x966)',
				size: '117 KB',
				url: '/images/music/heart-cup/cover.jpg',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: 'Animación (MPEG-4 / 1080p)',
				size: '6.17 MB',
				url: '/video/music/heart-cup/mynh.mp4',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.13 MB',
				url: '/images/music/heart-cup/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '43.3 KB',
				url: '/images/music/heart-cup/thumbnail.webp',
			},
		],
		tags: ['emotional', 'piano original'],
	},
	{
		id: 'kaisou-ressha-piano',
		kind: 'single',
		artists: [
			{
				name: '湊あくあ',
				clarification: 'Minato Aqua',
				url: 'https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg',
			},
			papitaCredit,
		],
		title: '海想列車',
		description: 'Piano arrangament to celebrate former Hololive member Minato Aqua\'s 2021 birthday.',
		date: new Date('2021-12-01'),
		categories: ['arrangement', 'piano'],
		coverUrl: '/images/music/kaisouressha/cover.png',
		thumbnailUrl: '/images/music/kaisouressha/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=fOB5qKXhjqA',
		credits: {
			music: {
				composers: [
					{
						name: '40mp',
						url: 'https://www.40mp-official.com',
					},
				],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [papitaCredit],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'Arreglo (YouTube)',
				url: 'https://www.youtube.com/watch?v=fOB5qKXhjqA',
			},
			{
				source: 'youtube',
				label: 'Tema original (YouTube)',
				url: 'https://www.youtube.com/watch?v=tuWw5EQPGlc',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: 'Pista completa (320kbps)',
				size: '9.60 MB',
				url: '/audio/music/kaisouressha/kaisouressha.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Portada «?» (1920x1080)',
				size: '2.30 MB',
				url: '/images/music/kaisouressha/cover.png',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: 'Animación (Entrada) (MPEG-4 / 1080p)',
				size: '12.3 MB',
				url: '/video/music/kaisouressha/ksrs_intro.mp4',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: 'Animación (Bucle) (MPEG-4 / 1080p)',
				size: '12.2 MB',
				url: '/video/music/kaisouressha/ksrs_loop.mp4',
			},
			{
				kind: 'image',
				format: 'png',
				label: 'Miniatura (720p)',
				size: '1.24 MB',
				url: '/images/music/kaisouressha/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: 'Miniatura (720p)',
				size: '33.9 KB',
				url: '/images/music/kaisouressha/thumbnail.webp',
			},
		],
		tags: ['piano arrangement'],
	},
	{
		id: 'test',
		kind: 'single',
		artists: [papitaCredit],
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
				label: 'Miniatura (720p)',
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
				label: 'Paquete completo',
				external: true,
			},
		],
		tags: ['original', 'piano', 'touhou'],
	},
];

const itemsById: Record<string, MusicItem> = {};
items.forEach((item) => {
	itemsById[item.id] = item;
});

items.reverse();

export default items;
export { itemsById };
