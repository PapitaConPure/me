import { FullArtistCredit, MusicItem } from '@/types/music';

const papitaCredit: FullArtistCredit = {
	name: {
		es: 'Papita con Puré',
		en: 'Papita con Pure',
		ja: 'Papita',
	},
	clarification: {
		es: 'I. Z.',
		ja: 'パピタ・コン・プレ / I. Z.',
	},
};

const zunCredit: FullArtistCredit = {
	name: 'ZUN',
	clarification: {
		en: "Jun'ya Ota",
		ja: '太田 順也',
	},
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
	//Perhaps my worst public creation ever
	{
		id: 'th-piano-medley-6-17',
		kind: 'compilation',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Touhou Piano Medley (6~17) (7.5~16.5)',
			ja: ' 東方ピアノメドレー 【紅~鬼】【萃~秘】',
		},
		date: new Date('2020-10-02'),
		categories: ['arrangement', 'piano', 'touhou', 'medley'],
		coverUrl: 'https://i.imgur.com/Br77B9v.png',
		thumbnailUrl: '/images/music/th-6-17-75-165/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=piWjxTchKeo',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=piWjxTchKeo',
			},
			{
				source: 'soundcloud',
				label: 'SoundCloud',
				url: 'https://soundcloud.com/user-158678041/piano-touhou-piano-medley-617-75165',
			},
		],
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				foreground: [
					{
						name: 'baba',
						url: 'https://www.pixiv.net/en/users/3422465',
					},
				],
				background: [
					{
						name: 'ieka95',
						url: 'https://www.pixiv.net/artworks/45062673',
					},
					{
						name: 'Pixerite',
						url: 'https://www.pixiv.net/artworks/76379535',
					},
					{
						name: 'Bzsk.',
						url: 'https://www.pixiv.net/artworks/77560891',
					},
					{
						name: 'LENK64',
						url: 'https://www.deviantart.com/lenk64/art/Satono-and-Mai-wallpaper-698776166',
					},
					'musteflott419',
					{
						name: 'あおいくじら',
						url: 'https://www.pixiv.net/artworks/52591025',
					},
					{
						name: '🦢 がらうどん',
						url: 'https://www.pixiv.net/artworks/73027481',
					},
					{
						name: '一ノ瀬ロム',
						url: 'https://www.pixiv.net/artworks/42405274',
					},
					'sheya',
					{
						name: 'もねてぃ',
						url: 'https://www.pixiv.net/artworks/26890409',
					},
					{
						name: '春世',
						url: 'https://www.pixiv.net/artworks/74110148',
					},
					{
						name: '庭鶏',
						url: 'https://www.pixiv.net/artworks/49291728',
					},
					{
						name: '結城辰也',
						url: 'https://www.pixiv.net/artworks/2217502',
					},
					{
						name: 'Capura.L',
						url: 'https://www.pixiv.net/en/users/2475',
					},
					{
						name: 'itomugi-kun',
						url: 'https://gelbooru.com/index.php?page=post&s=view&id=1611373',
					},
					{
						name: 'a-ru',
						url: 'https://www.pixiv.net/artworks/20921732',
					},
					{
						name: 'amibazh',
						url: 'https://www.pixiv.net/artworks/65477498',
					},
					{
						name: {
							es: '🔞 Sayori (NEKO WORKS)',
							ja: '🔞 さより (NEKO WORKS)',
						},
						url: 'https://x.com/sayori_nw',
					},
					'bridow',
					{
						name: 'けも　ちはる',
						url: 'https://www.pixiv.net/artworks/80129938',
					},
					{
						name: '串子',
						url: 'https://www.pixiv.net/artworks/48305869',
					},
					{
						name: 'Snozaki篠崎',
						url: 'https://www.pixiv.net/artworks/75533537',
					},
					{
						name: 'ヤーベン',
						url: 'https://www.pixiv.net/artworks/73352466',
					},
					'asakura masatoki',
					'mizumoto tadashi',
					{
						name: 'りすたる',
						url: 'https://www.pixiv.net/artworks/56995903',
					},
					{
						name: '喧静',
						url: 'https://www.pixiv.net/artworks/57125086',
					},
					{
						name: '猫水瀬',
						url: 'https://www.pixiv.net/artworks/26660725',
					},
					{
						name: 'たつきち',
						url: 'https://www.pixiv.net/artworks/2529461',
					},
					'desuran',
					{
						name: '村上４時',
						url: 'https://www.pixiv.net/artworks/16142353',
					},
					{
						name: 'ちょんちょん',
						url: 'https://www.pixiv.net/artworks/9460669',
					},
					{
						name: '氷紋',
						url: 'https://www.pixiv.net/artworks/49512330',
					},
					{
						name: 'mayo',
						clarification: 'miyusa',
					},
					{
						name: '路地子',
						url: 'https://www.pixiv.net/artworks/17104037',
					},
					{
						name: 'U-Joe',
						url: 'https://www.pixiv.net/artworks/76629784',
					},
					{
						name: 'AFZero',
						url: 'https://www.pixiv.net/artworks/36113767',
					},
					{
						name: '明輝(あきてる)',
						url: 'https://www.pixiv.net/artworks/70378517',
					},
					{
						name: 'NGA是创世的爸爸',
						url: 'https://www.pixiv.net/artworks/72859380',
					},
					{
						name: '渊子',
						url: 'https://www.pixiv.net/artworks/67759529',
					},
					{
						name: 'キ サ ム',
						url: 'https://www.pixiv.net/artworks/68028464',
					},
					{
						name: '抽风男',
						url: 'https://www.pixiv.net/artworks/80891190',
					},
					'r2sais',
					{
						name: 'wjstpwls4',
						url: 'https://www.pixiv.net/en/artworks/58653985',
					},
					{
						name: 'KUYA',
						url: 'https://www.pixiv.net/artworks/83858729',
					},
					{
						name: '有るごん (No.18)',
						url: 'https://www.pixiv.net/en/artworks/73667322',
					},
					{
						name: 'しろもる',
						url: 'https://www.pixiv.net/en/artworks/67253607',
					},
				],
			},
		},
		childrenTitles: [
			{
				es: 'Entrusting this World to Idols ~ Idolatrize World',
				ja: '偶像に世界を委ねて ～ Idolatrize World',
			},
			{
				es: 'Jelly Stone',
				ja: 'ジェリーストーン',
			},
			{
				es: 'Secret God Matara ~ Hidden Star in All Seasons',
				ja: '秘神マターラ ～ Hidden Star in All Seasons.',
			},
			{
				es: 'No More Going Through Doors',
				ja: 'もうドアには入れない',
			},
			{
				es: 'Pure Furies ~ Whereabouts of the Heart',
				ja: 'ピュアヒューリーズ ～ 心の在処',
			},
			{
				es: 'Pandemonic Planet',
				ja: 'パンデモニックプラネット',
			},
			{
				es: 'The Reversed Wheel of Fortune',
				ja: '逆転するホイールオブフォーチュン',
			},
			{
				es: 'Primordial Beat ~ Pristine Beat',
				ja: '始原のビート ～ Pristine Beat',
			},
			{
				es: 'Mysterious Purification Rod',
				ja: '不思議なお祓い棒',
			},
			{
				es: 'Shoutoku Legend ~ True Administrator',
				ja: '聖徳伝説 ～ True Administrator',
			},
			{
				es: 'Night Sakura of Dead Spirits',
				ja: '死霊の夜桜',
			},
			{
				es: 'Emotional Skyscraper ~ Cosmic Mind',
				ja: '感情の摩天楼 ～ Cosmic Mind',
			},
			{
				es: 'Rural Makai City Esoteria',
				ja: '魔界地方都市エソテリア',
			},
			{
				es: 'Green-Eyed Jealousy',
				ja: '緑眼のジェラシー',
			},
			{
				es: 'The Sealed Away Youkai ~ Lost Place',
				ja: '封じられた妖怪 ～ Lost Place',
			},
			{
				es: 'The Venerable Ancient Battlefield ~ Suwa Foughten Field',
				ja: '神さびた古戦場 ～ Suwa Foughten Field',
			},
			{
				es: 'Faith is for the Transient People',
				ja: '信仰は儚き人間の為に',
			},
			{
				es: 'Mound of Life',
				ja: '此岸の塚',
			},
			{
				es: 'Eastern Judgement of the Sixtieth Year ~ Fate of Sixty Years',
				ja: '六十年目の東方裁判 ～ Fate of Sixty Years',
			},
			{
				es: 'Kaeidzuka ~ Higan Retour',
				ja: '花映塚 ～ Higan Retour',
			},
			{
				es: 'Eternal Dream ~ Mystic Maple',
				ja: 'Eternal Dream ～ 幽玄の槭樹',
			},
			{
				es: 'Voyage 1969',
				ja: 'ヴォヤージュ1969',
			},
			{
				es: 'Flight of the Bamboo Cutter ~ Lunatic Princess',
				ja: '竹取飛翔 ～ Lunatic Princess',
			},
			{
				es: 'Gensokyo Millennium ~ History of the Moon',
				ja: '千年幻想郷 ～ History of the Moon',
			},
			{
				es: 'Bloom Nobly, Ink-Black Cherry Blossoms ~ Border of Life',
				ja: '幽雅に咲かせ、墨染の桜 〜 Border of Life',
			},
			{
				es: 'Ultimate Truth',
				ja: 'アルティメットトゥルース',
			},
			{
				es: 'The Capital City of Flowers in the Sky',
				ja: '天空の花の都 (The Capital City of Flowers in the Sky)',
			},
			{
				es: 'The Doll Maker of Bucuresti',
				ja: 'ブクレシュティの人形師',
			},
			{
				es: 'Septette for the Dead Princess',
				ja: '亡き王女の為のセプテット',
			},
			{
				es: 'Lunate Elf',
				ja: 'ルーネイトエルフ',
			},
			{
				es: 'Onigashima in the Fairyland ~ Missing Power',
				ja: '御伽の国の鬼が島 ～ Missing Power',
			},
			{
				es: 'Swift Battle',
				ja: '戦迅',
			},
			{
				es: 'Wind Circulation ~ Wind Tour',
				ja: '風の循環 ～ Wind Tour',
			},
			{
				es: 'Tengu is Watching ~ Black Eyes',
				ja: '天狗が見ている ～ Black Eyes',
			},
			{
				es: 'Broken Moon',
				ja: '砕月',
			},
			{
				es: "The Ground's Color is Yellow",
				ja: '地の色は黄色',
			},
			{
				es: 'Our Hisou Tensoku',
				ja: 'ぼくらの非想天則',
			},
			{
				es: 'The Legendary Titan',
				ja: '伝説の巨神',
			},
			{
				es: 'Bell of Avici ~ Infinite Nightmare',
				ja: '無間の鐘 ～ Infinite Nightmare',
			},
			{
				es: 'The Youkai Mountain ~ Mysterious Mountain',
				ja: '妖怪の山 ～ Mysterious Mountain',
			},
			{
				es: 'Magus Night',
				ja: 'メイガスナイト',
			},
			{
				es: 'Great Fairy Wars ~ Fairy Wars',
				ja: '妖精大戦争 ～ Fairy Wars',
			},
			{
				es: 'Shinkirou Orchestra',
				ja: '心綺楼囃子',
			},
			{
				es: 'The Lost Emotion',
				ja: '亡失のエモーション',
			},
			{
				es: 'Cheat Against the Impossible Danmaku',
				ja: '不可能弾幕には反則を',
			},
			{
				es: 'Eternal Short-Lived Reign',
				ja: '永遠の三日天下',
			},
			{
				es: 'Bamboo Forest in Flames',
				ja: '竹林インフレイム',
			},
			{
				es: 'Battlefield of Hanahazama',
				ja: '華狭間のバトルフィールド',
			},
			{
				es: 'Tonight Stars an Easygoing Egoist ~ Egoistic Flowers.',
				ja: '今宵は飄逸なエゴイスト(Live ver) ～ Egoistic Flowers.',
			},
			{
				es: 'Spirit Possession Flowers in Full Bloom',
				ja: '咲き誇る憑依華',
			},
			{
				es: "The Ground's Color is Yellow ~ Primrose",
				ja: '地の色は黄色 ～ Primrose',
			},
			{
				es: 'The Palanquin Ship Flies in the Sky',
				ja: '聖輦船空を往く',
			},
			{
				es: 'Constant and Unchanging',
				ja: '恒常不変の参廟祀',
			},
			{
				es: 'Lunatic Dreamer',
				ja: 'ルナティックドリーマー',
			},
			{
				es: 'Nightmare Diary',
				ja: 'ナイトメアダイアリー',
			},
			{
				es: "Kid's Festival ~ Innocent Treasures",
				ja: '童祭 ～ Innocent Treasures',
			},
		],
		tags: ['piano medley', 'low quality'],
	},

	//TH16 Boss 6 Pretty Bad Arrangement
	{
		id: 'okina-piano-drums',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'The Concealed Four Seasons',
			ja: '秘匿されたフォーシーズンズ',
		},
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

	//Will Not to Vanish in Fragments
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

	//Cafe Terrace Memories
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

	//Popular Emotion
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

	//The Shrine that Worships a Dead God
	{
		id: 'reimu-dead-god',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'The Shrine that Worships a Dead God',
			ja: '死んだ神の崇拝神社',
		},
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

	//Nekopara vol.4 OP Piano Arrangement
	{
		id: 'neko-4-op-piano',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'NEKOPARA Vol.4『SWEET×SWEET』',
			ja: 'ネコぱら vol.4『SWEET×SWEET』',
		},
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

	//TH11 Stage X Piano Arrangement
	{
		id: 'last-remote-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Last Remote',
			ja: 'ラストリモート',
		},
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
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '11.2 MB',
				url: '/audio/music/last-remote-piano/Last Remote Piano.mp3',
			},
		],
		tags: ['piano arrangement', 'low quality'],
	},

	//Former Hell Showdown
	{
		id: 'former-hell-showdown',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Former Hell Showdown',
			ja: '旧地獄の対決',
		},
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
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '9.26 MB',
				url: '/audio/music/oni-showdown/Former Hell Showdown.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '2.21 MB',
				url: '/images/music/oni-showdown/onishowdown.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '178 KB',
				url: '/images/music/oni-showdown/onishowdown.webp',
			},
		],
		tags: ['touhou fighter style', 'touhou style'],
	},

	//Night of a Tredecillion Tears
	{
		id: 'tredecillion-tears',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Night of a Tredecillion Tears',
			ja: '夜のトレデシリオンな涙',
		},
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
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '16.7 MB',
				url: '/audio/music/tredecillion-tears/Night of a Tredecillion Tears.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (356x356)',
					en: 'Cover (356x356)',
					ja: '表紙 (356x356)',
				},
				size: '171 KB',
				url: '/images/music/tredecillion-tears/cover.png',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: {
					es: 'Portada (200x200)',
					en: 'Cover (200x200)',
					ja: '表紙 (200x200)',
				},
				size: '24.8 KB',
				url: '/images/music/tredecillion-tears/Folder.jpg',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.31 MB',
				url: '/images/music/tredecillion-tears/sadnight.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '84.6 KB',
				url: '/images/music/tredecillion-tears/sadnight.webp',
			},
		],
		tags: ['gensofest', 'legacy of lunatic kingdom', 'touhou style'],
	},

	//PaTeKa 1
	{
		id: 'pateka-1',
		kind: 'single',
		displayArtist: 'PaTeKa',
		artists: [papitaCredit, tewaCredit, karlCredit],
		title: {
			es: 'Conejo del Bar ~ Tubérculo Rojo y Blanco',
			en: 'Rabbit of the Bar ~ Red and White Tubercle',
			ja: '居酒屋の兎 ～ Red and White Tubercle',
		},
		description: {
			es: 'Composición:\n• Papita con Puré (I. Z.) [Piano; guitarra acústica]\n• Karl Zuñiga [Batería; cuerdas; bajo]\n• Tewi [Violín; trompeta]\n\nMezcla: Karl Zuñiga',
			en: 'Composition:\n• Papita con Puré (I. Z.) [Piano; Acoustic Guitar]\n• Karl Zuñiga [Drums; Strings; Bass]\n• Tewi [Violin; RTp]\n\nMix: Karl Zuñiga',
			ja: '作曲家:\n• Papita con Puré (I. Z.) [ピアノ; アコースティックギター]\n• Karl Zuñiga [ドラム; 弦楽器; ベース]\n• Tewi [バイオリン; トランペット]\n\nMix: Karl Zuñiga',
		},
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
				cover: [karlCredit],
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
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '15.2 MB',
				url: '/audio/music/pateka-1/PaTeKa1.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (5000x5000)',
					en: 'Cover (5000x5000)',
					ja: '表紙 (5000x5000)',
				},
				size: '14.7 MB',
				url: '/images/music/pateka-1/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.42 MB',
				url: '/images/music/pateka-1/pateka.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '62.5 KB',
				url: '/images/music/pateka-1/pateka.webp',
			},
		],
		tags: ['windows era 1 style', 'touhou style'],
	},

	//TH18 Stage 3 Piano Arrangement
	{
		id: 'komakusa-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'The Perpetual Snow of Komakusa Blossoms',
			ja: '駒草咲くパーペチュアルスノー',
		},
		date: new Date('2021-03-25'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/komakusa-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/komakusa-piano/thumbnail.webp',
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
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '14.7 MB',
				url: '/audio/music/komakusa-piano/The Perpetual Snow of Komakusa Blossoms.mp3',
			},
		],
		tags: ['piano arrangement'],
	},

	//TH18 Boss 3 Piano Arrangement
	{
		id: 'sannyo-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Smoking Dragon',
			ja: 'スモーキングドラゴン',
		},
		date: new Date('2021-03-27'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/smoking-dragon-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/smoking-dragon-piano/thumbnail.webp',
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
		downloadUrls: [
			{
				kind: 'audio',
				format: 'wav',
				label: {
					es: 'Pista completa (32-bit float) (archive.org)',
					en: 'Full Track (32-bit float) (archive.org)',
					ja: 'フルトラック (32-bit float) (archive.org)',
				},
				size: '93.6 MB',
				url: 'https://archive.org/download/smoking-dragon/Smoking%20Dragon.wav',
				external: true,
				direct: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//TH18 Stage 2 Piano Arrangement
	{
		id: 'deep-green-cliff-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'The Cliff Hidden in Deep Green',
			ja: '深緑に隠された断崖',
		},
		date: new Date('2021-03-31'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/cliff-deep-green-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/cliff-deep-green-piano/thumbnail.webp',
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
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int) (archive.org)',
					en: 'Full Track (16-bit int) (archive.org)',
					ja: 'フルトラック (16-bit int) (archive.org)',
				},
				size: '46.1 MB',
				url: 'https://archive.org/download/the-cliff-hidden-in-deep-green/The%20Cliff%20Hidden%20in%20Deep%20Green.flac',
				external: true,
				direct: true,
			},
			{
				kind: 'audio',
				format: 'wav',
				label: {
					es: 'Pista completa (32-bit float) (archive.org)',
					en: 'Full Track (32-bit float) (archive.org)',
					ja: 'フルトラック (32-bit float) (archive.org)',
				},
				size: '97.8 MB',
				url: 'https://archive.org/download/the-cliff-hidden-in-deep-green/The%20Cliff%20Hidden%20in%20Deep%20Green.wav',
				external: true,
				direct: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//Take and Forsake
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
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
			},
			{
				kind: 'image',
				format: 'png',
				url: '/images/music/eurotest-1/eurotest2.png',
				size: '1.16 MB',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
			},
			{
				kind: 'image',
				format: 'webp',
				url: '/images/music/eurotest-1/eurotest2.webp',
				size: '95.2 KB',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
			},
		],
		tags: ['electronic', 'eurobeat'],
	},

	//Claim from the Empire Below
	{
		id: 'cfteb',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Claim from the Empire Below',
			ja: '下帝国からの主張',
		},
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
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '16.7 MB',
				url: '/audio/music/empire-below/Claim from the Empire Below.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.40 MB',
				url: '/images/music/empire-below/cfteb.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '114 KB',
				url: '/images/music/empire-below/cfteb.webp',
			},
		],
		tags: ['wily beast and weakest creature', 'touhou style'],
	},

	//TH18 Piano Medley
	{
		id: 'th18-piano-medley',
		kind: 'compilation',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Unconnected Marketeers Piano Medley',
			ja: '東方虹龍洞ピアノメドレー',
		},
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
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '43.6 MB',
				url: '/audio/music/th18-piano/Unconnected Marketeers Piano Medley.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (724x724)',
					en: 'Cover (724x724)',
					ja: '表紙 (724x724)',
				},
				size: '840 KB',
				url: '/images/music/th18-piano/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.32 MB',
				url: '/images/music/th18-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '107 KB',
				url: '/images/music/th18-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle T) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop T) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループT) (h.264 / 1080p@60) (archive.org)',
				},
				size: '7.50 MB',
				url: 'https://archive.org/download/th18-piano-medley/um00_title.mp4',
				previewUrl: '/video/music/th18-piano/um00_title.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S1) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S1) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS1) (h.264 / 1080p@60) (archive.org)',
				},
				size: '10.1 MB',
				url: 'https://archive.org/download/th18-piano-medley/um01_stage1.mp4',
				previewUrl: '/video/music/th18-piano/um01_stage1.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle B1) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop B1) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループB1) (h.264 / 1080p@60) (archive.org)',
				},
				size: '10.1 MB',
				url: 'https://archive.org/download/th18-piano-medley/um02_boss1.mp4',
				previewUrl: '/video/music/th18-piano/um02_boss1.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S2A) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S2A) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS2A) (h.264 / 1080p@60) (archive.org)',
				},
				size: '13.9 MB',
				url: 'https://archive.org/download/th18-piano-medley/um03_stage2.mp4',
				previewUrl: '/video/music/th18-piano/um03_stage2.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Transición S2A→S2B) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Transition S2A→S2B) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (遷移S2A→S2B) (h.264 / 1080p@60) (archive.org)',
				},
				size: '15.0 MB',
				url: 'https://archive.org/download/th18-piano-medley/um04_stage2gotoend.mp4',
				previewUrl: '/video/music/th18-piano/um04_stage2gotoend.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S2B) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S2B) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS2B) (h.264 / 1080p@60) (archive.org)',
				},
				size: '11.7 MB',
				url: 'https://archive.org/download/th18-piano-medley/um05_stage2end.mp4',
				previewUrl: '/video/music/th18-piano/um05_stage2end.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S3) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S3) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS3) (h.264 / 1080p@60) (archive.org)',
				},
				size: '12.1 MB',
				url: 'https://archive.org/download/th18-piano-medley/um06_stage3.mp4',
				previewUrl: '/video/music/th18-piano/um06_stage3.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Salida S3) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Out S3) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (アウトS3) (h.264 / 1080p@60) (archive.org)',
				},
				size: '825 KB',
				url: 'https://archive.org/download/th18-piano-medley/um07_stage3end.mp4',
				previewUrl: '/video/music/th18-piano/um07_stage3end.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Escena (Quieto Salida S3)',
					en: 'Scene (Still Out S3)',
					ja: 'シーン (静止アウトS3)',
				},
				size: '2.50 MB',
				url: '/images/music/th18-piano/um08_stage3endidle.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Escena (Quieto Entrada B3)',
					en: 'Scene (Still In B3)',
					ja: 'シーン (静止インB3)',
				},
				size: '1.93 MB',
				url: '/images/music/th18-piano/um09_stage3endidle2.png',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle B3) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop B3) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループB3) (h.264 / 1080p@60) (archive.org)',
				},
				size: '6.49 MB',
				url: 'https://archive.org/download/th18-piano-medley/um10_boss3.mp4',
				previewUrl: '/video/music/th18-piano/um10_boss3.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Salida B3) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Out B3) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (アウトB3) (h.264 / 1080p@60) (archive.org)',
				},
				size: '9.23 MB',
				url: 'https://archive.org/download/th18-piano-medley/um11_boss3end.mp4',
				previewUrl: '/video/music/th18-piano/um11_boss3end.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Entrada S4) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (In S4) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (インS4) (h.264 / 1080p@60) (archive.org)',
				},
				size: '4.27 MB',
				url: 'https://archive.org/download/th18-piano-medley/um12_stage4start.mp4',
				previewUrl: '/video/music/th18-piano/um12_stage4start.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S4) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S4) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS4) (h.264 / 1080p@60) (archive.org)',
				},
				size: '3.65 MB',
				url: 'https://archive.org/download/th18-piano-medley/um13_stage4.mp4',
				previewUrl: '/video/music/th18-piano/um13_stage4.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S5A) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S5A) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS5A) (h.264 / 1080p@60) (archive.org)',
				},
				size: '4.38 MB',
				url: 'https://archive.org/download/th18-piano-medley/um14_stage5.mp4',
				previewUrl: '/video/music/th18-piano/um14_stage5.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Transición S5A→S5B) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Transition S5A→S5B) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (遷移S5A→S5B) (h.264 / 1080p@60) (archive.org)',
				},
				size: '4.51 MB',
				url: 'https://archive.org/download/th18-piano-medley/um15_stage5gotoboss.mp4',
				previewUrl: '/video/music/th18-piano/um15_stage5gotoboss.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S5B) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S5B) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS5B) (h.264 / 1080p@60) (archive.org)',
				},
				size: '6.45 MB',
				url: 'https://archive.org/download/th18-piano-medley/um16_stage5boss.mp4',
				previewUrl: '/video/music/th18-piano/um16_stage5boss.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S6) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop S6) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループS6) (h.264 / 1080p@60) (archive.org)',
				},
				size: '20.8 MB',
				url: 'https://archive.org/download/th18-piano-medley/um17_stage6.mp4',
				previewUrl: '/video/music/th18-piano/um17_stage6.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Transición S6→B6) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Transition S6→B6) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (遷移S6→B6) (h.264 / 1080p@60) (archive.org)',
				},
				size: '12.0 MB',
				url: 'https://archive.org/download/th18-piano-medley/um18_stage6toboss.mp4',
				previewUrl: '/video/music/th18-piano/um18_stage6toboss.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle B6) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop B6) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループB6) (h.264 / 1080p@60) (archive.org)',
				},
				size: '3.95 MB',
				url: 'https://archive.org/download/th18-piano-medley/um19_boss6.mp4',
				previewUrl: '/video/music/th18-piano/um19_boss6.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle ED) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop ED) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループED) (h.264 / 1080p@60) (archive.org)',
				},
				size: '3.28 MB',
				url: 'https://archive.org/download/th18-piano-medley/um20_ending.mp4',
				previewUrl: '/video/music/th18-piano/um20_ending.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle SX) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop SX) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループSX) (h.264 / 1080p@60) (archive.org)',
				},
				size: '11.8 MB',
				url: 'https://archive.org/download/th18-piano-medley/um21_stagex.mp4',
				previewUrl: '/video/music/th18-piano/um21_stagex.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle BX) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop BX) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループBX) (h.264 / 1080p@60) (archive.org)',
				},
				size: '8.17 MB',
				url: 'https://archive.org/download/th18-piano-medley/um22_bossx.mp4',
				previewUrl: '/video/music/th18-piano/um22_bossx.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle SR) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop SR) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループSR) (h.264 / 1080p@60) (archive.org)',
				},
				size: '4.17 MB',
				url: 'https://archive.org/download/th18-piano-medley/um23_staffroll.mp4',
				previewUrl: '/video/music/th18-piano/um23_staffroll.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '45.51 MB',
				url: 'https://www.mediafire.com/file/helfrbn2dxukidt/Touhou_18_Piano_Medley.zip/file',
				external: true,
			},
		],
		childrenTitles: [
			{
				es: 'A Rainbow Spanning Gensokyo',
				ja: '虹の架かる幻想郷',
			},
			{
				es: 'A Shower of Strange Occurrences',
				ja: '妖異達の通り雨',
			},
			{
				es: 'Fortunate Kitten',
				ja: '大吉キトゥン',
			},
			{
				es: 'The Cliff Hidden in Deep Green',
				ja: '深緑に隠された断崖',
			},
			{
				es: 'Banditry Technology',
				ja: 'バンデットリィテクノロジー',
			},
			{
				es: 'The Perpetual Snow of Komakusa Blossoms',
				ja: '駒草咲くパーペチュアルスノー',
			},
			{
				es: 'Smoking Dragon',
				ja: 'スモーキングドラゴン',
			},
			{
				es: 'The Obsolescent Industrial Ruins',
				ja: '廃れゆく産業遺構',
			},
			{
				es: 'Ore from the Age of the Gods',
				ja: '神代鉱石',
			},
			{
				es: 'The Long-Awaited Oumagatoki',
				ja: '待ちわびた逢魔が時',
			},
			{
				es: 'Starry Mountain of Tenma',
				ja: '星降る天魔の山',
			},
			{
				es: 'Lunar Rainbow',
				ja: 'ルナレインボー',
			},
			{
				es: 'Where is that Bustling Marketplace now ~ Immemorial Marketeers',
				ja: 'あの賑やかな市場は今どこに ～ Immemorial Marketeers',
			},
			{
				es: 'The Sunday after the Storm',
				ja: '嵐の後の日曜日',
			},
			{
				es: 'The Great Fantastic Underground Railway Network',
				ja: '幻想の地下大線路網',
			},
			{
				es: 'The Princess Who Slays Dragon Kings',
				ja: '龍王殺しのプリンセス',
			},
			{
				es: 'A Rainbow-Colored World',
				ja: '虹色の世界',
			},
		],
		tags: ['piano medley'],
	},

	//Unused Film Strip
	{
		id: 'unused-film-strip',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Unused Film Strip',
			ja: '未使用フィルムストリップ',
		},
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
				foreground: ['Pastel_Maddie'],
				background: [papitaCredit],
				thumbnail: ['Pastel_Maddie', papitaCredit],
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
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '8.64 MB',
				url: '/audio/music/film-youkai/Unused Film Strip.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Hakuro (2246x3109)',
					en: 'Hakuro Portrait (2246x3109)',
					ja: '白黒ポートレート (2246x3109)',
				},
				size: '1.34 MB',
				url: '/images/music/film-youkai/hakuro.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (1080p)',
					en: 'Cover (1080p)',
					ja: '表紙 (1080p)',
				},
				size: '1.14 MB',
				url: '/images/music/film-youkai/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.95 MB',
				url: '/images/music/film-youkai/miniatura.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '155 KB',
				url: '/images/music/film-youkai/miniatura.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '10.43 MB',
				url: 'https://www.mediafire.com/file/sy58gn87bpcy3av/Unused_Film_Strip.zip/file',
				external: true,
			},
		],
		tags: ['touhou style', 'original character'],
	},

	//Mind, Yet Not Heart
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
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '9.26 MB',
				url: '/audio/music/heart-cup/Mind Yet Not Heart.mp3',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: {
					es: 'Portada (966x966)',
					en: 'Cover (966x966)',
					ja: '表紙 (966x966)',
				},
				size: '117 KB',
				url: '/images/music/heart-cup/cover.jpg',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (h.264 / 1080p@60)',
					en: 'Animation (h.264 / 1080p@60)',
					ja: 'アニメーション (h.264 / 1080p@60)',
				},
				size: '6.17 MB',
				url: '/video/music/heart-cup/mynh.mp4',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.13 MB',
				url: '/images/music/heart-cup/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '43.3 KB',
				url: '/images/music/heart-cup/thumbnail.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '16.24 MB',
				url: 'https://www.mediafire.com/file/kiqu6crdinh89bw/MindYetNotHeart.zip/file',
				external: true,
			},
		],
		tags: ['emotional', 'piano original'],
	},

	//Kaisou Ressha Piano Arrangement
	{
		id: 'kaisou-ressha-piano',
		kind: 'single',
		artists: [
			{
				name: {
					es: 'Minato Aqua',
					ja: '湊あくあ',
				},
				url: 'https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg',
			},
			papitaCredit,
		],
		title: {
			es: 'Kaisou Ressha',
			ja: '海想列車',
		},
		description: {
			es: 'Arreglo de piano para celebrar el cumpleaños de 2021 de Minato Aqua, quien fue previamente miembro de Hololive.',
			en: "Piano arrangement to celebrate former Hololive member Minato Aqua's 2021 birthday.",
			ja: '元ホロライブメンバー湊あくあさんの2021年の誕生日を祝うピアノアレンジ。',
		},
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
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '9.60 MB',
				url: '/audio/music/kaisouressha/kaisouressha.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada «?» (1920x1080)',
					en: 'Cover «?» (1920x1080)',
					ja: '表紙 «?» (1920x1080)',
				},
				size: '2.30 MB',
				url: '/images/music/kaisouressha/cover.png',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Entrada) (h.264 / 1080p@60)',
					en: 'Animation (In) (h.264 / 1080p@60)',
					ja: 'アニメーション (イン) (h.264 / 1080p@60)',
				},
				size: '12.3 MB',
				url: '/video/music/kaisouressha/ksrs_intro.mp4',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle) (h.264 / 1080p@60)',
					en: 'Animation (Loop) (h.264 / 1080p@60)',
					ja: 'アニメーション (ループ) (h.264 / 1080p@60)',
				},
				size: '12.2 MB',
				url: '/video/music/kaisouressha/ksrs_loop.mp4',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.24 MB',
				url: '/images/music/kaisouressha/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '33.9 KB',
				url: '/images/music/kaisouressha/thumbnail.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '38.19 MB',
				url: 'https://www.mediafire.com/file/twbokfkmyirspna/Kaisou_Ressha.zip/file',
				external: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//Izanagi Bloom Phenomenon
	{
		id: 'izanagi-bloom-phenomenon',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Izanagi Bloom Phenomenon',
			ja: 'イザナギブルーム現象',
		},
		date: new Date('2021-12-30'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/izanagi-bloom/cover.png',
		thumbnailUrl: '/images/music/izanagi-bloom/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=_t8o-IcD_ro',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=_t8o-IcD_ro',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '9.20 MB',
				url: '/audio/music/izanagi-bloom/Izanagi Bloom Phenomenon.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (1080p)',
					en: 'Cover (1080p)',
					ja: '表紙 (1080p)',
				},
				size: '1.50 MB',
				url: '/images/music/izanagi-bloom/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Escena (Quieto 1) (1080p)',
					en: 'Scene (Still 1) (1080p)',
					ja: 'シーン (静止1) (1080p)',
				},
				size: '3.33 MB',
				url: '/images/music/izanagi-bloom/0.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Escena (Quieto 2) (1080p)',
					en: 'Scene (Still 2) (1080p)',
					ja: 'シーン (静止2) (1080p)',
				},
				size: '3.35 MB',
				url: '/images/music/izanagi-bloom/1.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Escena (Quieto 3) (1080p)',
					en: 'Scene (Still 3) (1080p)',
					ja: 'シーン (静止3) (1080p)',
				},
				size: '3.32 MB',
				url: '/images/music/izanagi-bloom/2.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '2.47 MB',
				url: '/images/music/izanagi-bloom/izanagi.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '146 KB',
				url: '/images/music/izanagi-bloom/thumbnail.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '21.50 MB',
				url: 'https://www.mediafire.com/file/dk3ifbdn7kexvnq/Izanagi_Bloom_Phenomenon.rar/file',
				external: true,
			},
		],
		tags: ['touhou fighter style', 'touhou style'],
	},

	//PaTeKa 2
	{
		id: 'pateka-2',
		kind: 'single',
		displayArtist: 'PaTeKa',
		artists: [papitaCredit, tewaCredit, karlCredit],
		title: {
			es: 'Buen Presagio ~ Travesía Inhóspita',
			en: 'Good Omens ~ Inhospitable Crossing',
			ja: 'Good Omens ～ 不親切な交差点',
		},
		description: {
			es: 'Composición:\n• Tewi [Piano; guitarra acústica; leads]\n• Karl Zuñiga [Batería; bajo; detalles]\n• Papita con Puré [Piano; violín; detalles]\n\nMezcla: Karl Zuñiga',
			en: 'Composition:\n• Tewi [Piano; Acoustic Guitar; Leads]\n• Karl Zuñiga [Drums; Bass; Details]\n• Papita con Puré [Piano; Violin; Details]\n\nMix: Karl Zuñiga',
			ja: '作曲家:\n• Tewi [サックス; アコースティックギター; リード]\n• Karl Zuñiga [ドラム; ベース; 詳細]\n• Papita con Puré [ピアノ; バイオリン; 詳細]\n\nMix: Karl Zuñiga',
		},
		date: new Date('2022-01-29'),
		categories: ['collab', 'original', 'touhou'],
		coverUrl: '/images/music/pateka-2/cover.webp',
		thumbnailUrl: '/images/music/pateka-2/cover.webp',
		videoUrl: 'https://www.youtube.com/watch?v=CbWBfKSn34o',
		credits: {
			music: {
				composers: [papitaCredit, tewaCredit, karlCredit],
				mixers: [karlCredit],
			},
			visuals: {
				cover: [karlCredit, tewaCredit],
				thumbnail: [karlCredit, tewaCredit],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube (por Karl Zuñiga)',
				url: 'https://www.youtube.com/watch?v=CbWBfKSn34o',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '5.83 MB',
				url: '/audio/music/pateka-2/Buen Presagio ~ Travesía Inhóspita.mp3',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: {
					es: 'Portada (3000x3000)',
					en: 'Cover (3000x3000)',
					ja: '表紙 (3000x3000)',
				},
				size: '559 KB',
				url: '/images/music/pateka-2/cover.jpg',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Portada (3000x3000)',
					en: 'Cover (3000x3000)',
					ja: '表紙 (3000x3000)',
				},
				size: '139 KB',
				url: '/images/music/pateka-2/cover.webp',
			},
		],
		tags: ['touhou style'],
	},

	//Mountain of Faith Stage x Boss 6 Themes Piano Arrangement
	{
		id: 'kanako-sb-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Cemetery of Onbashira ~ Suwa Foughten Field',
			ja: '御柱の墓場 ～ Suwa Foughten Field',
		},
		description: {
			es: 'Temas de nivel 6 y Yasaka Kanako de Mountain of Faith mezclados en uno, en forma de arreglo de piano.',
			en: "Mountain of Faith Stage 6 Theme and Yasaka Kanako's Theme mixed into one as a piano arrangement.",
			ja: '東方風神録ステージ6のテーマと八坂神奈子のテーマをミックスしたピアノアレンジです。',
		},
		date: new Date('2022-12-02'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/kanako-sb-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/kanako-sb-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=idO4GMelduM',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'Mudimudi Mitama',
						clarification: '三玉 むぢむぢ',
						url: 'https://www.pixiv.net/users/3572241',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=idO4GMelduM',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '12.4 MB',
				url: '/audio/music/kanako-sb-piano/kanako.mp3',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '79.3 KB',
				url: '/images/music/kanako-sb-piano/thumbnail.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '133.96 MB',
				url: 'https://www.mediafire.com/file/d2q5tpim7f3dlmr/COOSFF_by_PapitaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		tags: ['mountain of faith', 'piano arrangement'],
	},

	//Stellar Passage of Lunatic Starway
	{
		id: 'spols',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Stellar Passage of Lunatic Starway',
			ja: 'ルナティックスターウェイのステラー通路',
		},
		date: new Date('2022-12-16'),
		categories: ['original', 'touhou'],
		coverUrl: '/images/music/spols/cover.png',
		thumbnailUrl: '/images/music/spols/spols.webp',
		videoUrl: 'https://www.youtube.com/watch?v=cuf1dibuSJc',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=cuf1dibuSJc',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '11.3 MB',
				url: '/audio/music/spols/Stellar Passage of Lunatic Starway.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (1080p)',
					en: 'Cover (1080p)',
					ja: '表紙 (1080p)',
				},
				size: '1.20 MB',
				url: '/images/music/spols/cover.png',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle) (h.264 / 1080p@60)',
					en: 'Animation (Loop) (h.264 / 1080p@60)',
					ja: 'アニメーション (ループ) (h.264 / 1080p@60)',
				},
				size: '16.7 MB',
				url: '/video/music/spols/loop.mp4',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '2.03 MB',
				url: '/images/music/spols/spols.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '114 KB',
				url: '/images/music/spols/spols.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '28.69 MB',
				url: 'https://www.mediafire.com/file/ymztpu5l95ckw8r/SPoLS_by_PapitaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		tags: ['legacy of lunatic kingdom', 'touhou style'],
	},

	//Gyptos
	{
		id: 'gyptos',
		kind: 'single',
		artists: [papitaCredit, karlCredit],
		title: {
			es: 'Gyptos ~ Symphony of Opposing Forces',
			ja: 'Gyptos ～ 対抗勢力のシンフォニー',
		},
		description: {
			es: 'Base y composición general: Papita con Puré (I. Z.)\n\nArreglo y composición extendida: Karl Zuñiga\n\nMezcla base: Papita con Puré (I. Z.)\n\nMezcla final y masterización: Karl Zuñiga',
			en: 'Base and general composition: Papita con Pure (I. Z.)\n\nArrangement and extended composition: Karl Zuñiga\n\nBase mix: Papita con Puré (I. Z.)\n\nFinal mix and mastering: Karl Zuñiga',
			ja: '基礎と全体的な作曲： Papita con Puré (I. Z.)\n\nアレンジと拡張作曲： Karl Zuñiga\n\n基礎 mix： Papita con Puré (I. Z.)\n\n最終 mix、mastering： Karl Zuñiga',
		},
		date: new Date('2023-02-24'),
		categories: ['collab', 'original'],
		coverUrl: '/images/music/gyptos/cover.png',
		thumbnailUrl: '/images/music/gyptos/gyptos.webp',
		videoUrl: 'https://www.youtube.com/watch?v=5l5MZEWaps0',
		credits: {
			music: {
				composers: [papitaCredit],
				arrangers: [karlCredit],
				mixers: [karlCredit],
			},
			visuals: {
				background: [papitaCredit],
				cover: [papitaCredit],
				thumbnail: [papitaCredit],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=5l5MZEWaps0',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '8.40 MB',
				url: '/audio/music/gyptos/gyptos.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (984x984)',
					en: 'Cover (984x984)',
					ja: '表紙 (984x984)',
				},
				size: '668 KB',
				url: '/images/music/gyptos/cover.png',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle 1) (h.264 / 1080p@60)',
					en: 'Animation (Loop 1) (h.264 / 1080p@60)',
					ja: 'アニメーション (ループ1) (h.264 / 1080p@60)',
				},
				size: '32.3 MB',
				url: '/video/music/gyptos/1_loop1.mp4',
				previewFormat: 'webm',
				previewUrl: '/video/music/gyptos/1_loop1.webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle 2) (h.264 / 1080p@60)',
					en: 'Animation (Loop 2) (h.264 / 1080p@60)',
					ja: 'アニメーション (ループ2) (h.264 / 1080p@60)',
				},
				size: '40.6 MB',
				url: '/video/music/gyptos/2_loop2.mp4',
				previewFormat: 'webm',
				previewUrl: '/video/music/gyptos/2_loop2.webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle 3) (h.264 / 1080p@60)',
					en: 'Animation (Loop 3) (h.264 / 1080p@60)',
					ja: 'アニメーション (ループ3) (h.264 / 1080p@60)',
				},
				size: '38.1 MB',
				url: '/video/music/gyptos/3_loop3.mp4',
				previewFormat: 'webm',
				previewUrl: '/video/music/gyptos/3_loop3.webm',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Escena (Quieto Salida 4) (1080p)',
					en: 'Scene (Still Salida 4) (1080p)',
					ja: 'シーン (静止アウト4) (1080p)',
				},
				size: '2.63 MB',
				url: '/images/music/gyptos/4_end.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '2.21 MB',
				url: '/images/music/gyptos/gyptos.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '124 KB',
				url: '/images/music/gyptos/gyptos.webp',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '120.71 MB',
				url: 'https://www.mediafire.com/file/b4b24wi5ktopx21/Gyptos_by_PapitaPur%25C3%25A9_%2526_KarlZu%25C3%25B1iga.zip/file',
				external: true,
			},
		],
		tags: ['exotic', 'metal'],
	},

	//TH19 Title Theme Piano Arrangement
	{
		id: 'th19-title-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Intelligence of Beast',
			ja: '獣の知性',
		},
		date: new Date('2023-07-28'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/th19-title-piano/cover.png',
		thumbnailUrl: '/images/music/th19-title-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=subk3bDvELI',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'かめぱすた',
						url: 'https://www.pixiv.net/artworks/107306080',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=subk3bDvELI',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '11.5 MB',
				url: '/audio/music/th19-title-piano/th19_01.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (1080p)',
					en: 'Cover (1080p)',
					ja: '表紙 (1080p)',
				},
				size: '1.72 MB',
				url: '/images/music/th19-title-piano/cover.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '187 KB',
				url: '/images/music/th19-title-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle) (h.264 / 1080p@60) (archive.org)',
					en: 'Animation (Loop) (h.264 / 1080p@60) (archive.org)',
					ja: 'アニメーション (ループ) (h.264 / 1080p@60) (archive.org)',
				},
				size: '41.1 MB',
				url: 'https://archive.org/download/th19-title-animation-by-papitapure/loop0.mp4',
				previewFormat: 'webm',
				previewUrl: '/video/music/th19-title-piano/loop0.webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '54.27 MB',
				url: 'https://www.mediafire.com/file/7aj6dsy7azfox34/Intelligence_of_Beast_by_PapitaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//TH19 Early Battle Theme Piano Arrangement
	{
		id: 'th19-cute-world-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'The World is Made in an Adorable Way',
			ja: '世界は可愛く出来ている',
		},
		date: new Date('2023-08-04'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/th19-cute-world-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/th19-cute-world-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=Z_tmPN7w6vQ',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'ぴよ吉',
						url: 'https://www.pixiv.net/artworks/94839064',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=Z_tmPN7w6vQ',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '14.01 MB',
				url: '/audio/music/th19-cute-world-piano/The World is Made From Cuteness.mp3',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI completo (MediaFire)',
					en: 'Full MIDI (MediaFire)',
					ja: 'フルMIDI (MediaFire)',
				},
				size: '89.24 KB',
				url: 'https://www.mediafire.com/file/z5qi4t53qli1yc1/TWMAW_Piano_by_PapitaPur%25C3%25A9.zip/file',
				external: true,
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (960x540)',
					en: 'Thumbnail (960x540)',
					ja: 'サムネイル (960x540)',
				},
				size: '0.98 MB',
				url: '/images/music/th19-cute-world-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (960x540)',
					en: 'Thumbnail (960x540)',
					ja: 'サムネイル (960x540)',
				},
				size: '91.7 KB',
				url: '/images/music/th19-cute-world-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle) (h.264 / 1080p@60)',
					en: 'Animation (Loop) (h.264 / 1080p@60)',
					ja: 'アニメーション (ループ) (h.264 / 1080p@60)',
				},
				size: '9.07 MB',
				url: '/video/music/th19-cute-world-piano/01_battle1_loop.mp4',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '22.95 MB',
				url: 'https://www.mediafire.com/file/z5qi4t53qli1yc1/TWMAW_Piano_by_PapitaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//TH19 Piano Medley
	{
		id: 'th19-piano-medley',
		kind: 'compilation',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Unfinished Dream of All Living Ghost. Piano Medley',
			ja: '東方獣王園ピアノメドレー',
		},
		date: new Date('2023-12-23'),
		categories: ['arrangement', 'piano', 'touhou', 'medley'],
		coverUrl: '/images/music/th19-piano/cover.png',
		thumbnailUrl: '/images/music/th19-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=nuSd8n0iJxw',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				foreground: [
					{
						name: 'Addamelech',
						url: 'https://www.pixiv.net/en/artworks/114488296',
					},
				],
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'Addamelech',
						url: 'https://www.pixiv.net/en/artworks/114488296',
					},
					papitaCredit,
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=nuSd8n0iJxw',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '57.6 MB',
				url: 'https://www.mediafire.com/file/ulc65rv1n6156lm/th19_piano.mp3/file',
				external: true,
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Mano izquierda completa (320 Kbps)',
					en: 'Full Left Hand (320 Kbps)',
					ja: 'フル左手 (320 Kbps)',
				},
				size: '57.6 MB',
				url: 'https://www.mediafire.com/file/onrbt6tuok0nxom/th19_piano_low.mp3/file',
				external: true,
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Mano derecha completa (320 Kbps)',
					en: 'Full Right Hand (320 Kbps)',
					ja: 'フル右手 (320 Kbps)',
				},
				size: '57.6 MB',
				url: 'https://www.mediafire.com/file/vnzwro3785zujho/th19_piano_high.mp3/file',
				external: true,
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI completo',
					en: 'Full MIDI',
					ja: 'フルMIDI',
				},
				size: '320 KB',
				url: '/music-item-misc/th19-piano/f_th19.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Planilla de Rutas de Historia',
					en: 'Story Mode Routes Sheet',
					ja: 'ストーリーモードルートシート',
				},
				size: '591 KB',
				url: '/music-item-misc/th19-piano/routes.pdf',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Reimu (1496x1949)',
					en: 'Reimu Portrait (1496x1949)',
					ja: '霊夢ポートレート (1496x1949)',
				},
				size: '1.41 MB',
				url: '/images/music/th19-piano/01b_col_reimu.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Enoko (601x1628)',
					en: 'Enoko Portrait (601x1628)',
					ja: '慧ノ子ポートレート (601x1628)',
				},
				size: '1.06 MB',
				url: '/images/music/th19-piano/04b_col_enoko.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Biten (1182x2112)',
					en: 'Biten Portrait (1182x2112)',
					ja: '美天ポートレート (1182x2112)',
				},
				size: '1.41 MB',
				url: '/images/music/th19-piano/05b_col_son.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Marisa (1471x1263)',
					en: 'Marisa Portrait (1471x1263)',
					ja: '魔理沙ポートレート (1471x1263)',
				},
				size: '1.54 MB',
				url: '/images/music/th19-piano/06b_col_marisa.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Suika (1471x1263)',
					en: 'Suika Portrait (1471x1263)',
					ja: '萃香ポートレート (1471x1263)',
				},
				size: '1.54 MB',
				url: '/images/music/th19-piano/07b_col_suika.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Chiyari (977x1712)',
					en: 'Chiyari Portrait (977x1712)',
					ja: 'ちやりポートレート (977x1712)',
				},
				size: '1.30 MB',
				url: '/images/music/th19-piano/09b_col_chiyari.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Hisami (657x1877)',
					en: 'Hisami Portrait (657x1877)',
					ja: '日狭美ポートレート (657x1877)',
				},
				size: '1.07 MB',
				url: '/images/music/th19-piano/10b_col_hisami.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Retrato de Zanmu (779x1799)',
					en: 'Zanmu Portrait (779x1799)',
					ja: '残無ポートレート (779x1799)',
				},
				size: '1.62 MB',
				url: '/images/music/th19-piano/11b_col_zanmu.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (1080p)',
					en: 'Cover (1080p)',
					ja: '表紙 (1080p)',
				},
				size: '464 KB',
				url: '/images/music/th19-piano/cover.png',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: {
					es: 'Portada (1080p)',
					en: 'Cover (1080p)',
					ja: '表紙 (1080p)',
				},
				size: '516 KB',
				url: '/images/music/th19-piano/folder.jpg',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.30 MB',
				url: '/images/music/th19-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '131 KB',
				url: '/images/music/th19-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Título (Bucle) (h.264 1080p@60)',
					en: 'Animation - Title (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - タイトル (ループ) (h.264 1080p@60)',
				},
				size: '40.4 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/00a_L1_title.mp4',
				previewUrl: '/video/music/th19-piano/00a_L1_title.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Canal de los sauces (Bucle) (h.264 1080p@60)',
					en: 'Animation - Canal of Willows (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 柳の運河 (ループ) (h.264 1080p@60)',
				},
				size: '9.07 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/01a_L1_canalOfWillows.mp4',
				previewUrl: '/video/music/th19-piano/01a_L1_canalOfWillows.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Valle Inexplorado (Bucle) (h.264 1080p@60)',
					en: 'Animation - Untrodden Valley (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 未踏の渓谷 (ループ) (h.264 1080p@60)',
				},
				size: '23.3 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/02a_L1_untroddenValley.mp4',
				previewUrl: '/video/music/th19-piano/02a_L1_untroddenValley.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Interior del Santuario Moriya (Bucle) (h.264 1080p@60)',
					en: 'Animation - Moriya Shrine Inner Sanctum (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 守矢神社内陣 (ループ) (h.264 1080p@60)',
				},
				size: '25.0 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/03a_L1_moriyaShrineInnerSanctum.mp4',
				previewUrl: '/video/music/th19-piano/03a_L1_moriyaShrineInnerSanctum.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Bosque Mágico (Bucle) (h.264 1080p@60)',
					en: 'Animation - Forest of Magic (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 魔法の森 (ループ) (h.264 1080p@60)',
				},
				size: '10.9 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/04a_L1_forestOfMagic.mp4',
				previewUrl: '/video/music/th19-piano/04a_L1_forestOfMagic.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Pie de la Montaña Youkai (Bucle) (h.264 1080p@60)',
					en: 'Animation - Foot of the Youkai Mountain (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 妖怪の山の麓 (ループ) (h.264 1080p@60)',
				},
				size: '23.6 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/05a_L1_footOfTheYoukaiMountain.mp4',
				previewUrl: '/video/music/th19-piano/05a_L1_footOfTheYoukaiMountain.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Colinas de la Montaña Youkai (Bucle 1) (h.264 1080p@60)',
					en: 'Animation - Youkai Mountain Hills (Loop 1) (h.264 1080p@60)',
					ja: 'アニメーション - 妖怪の山の丘 (ループ1) (h.264 1080p@60)',
				},
				size: '4.47 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/06a_L1_youkaiMountainHills.mp4',
				previewUrl: '/video/music/th19-piano/06a_L1_youkaiMountainHills.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Colinas de la Montaña Youkai (Transición 1→2) (h.264 1080p@60)',
					en: 'Animation - Youkai Mountain Hills (Transition 1→2) (h.264 1080p@60)',
					ja: 'アニメーション - 妖怪の山の丘 (遷移1→2) (h.264 1080p@60)',
				},
				size: '5.77 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/06b_1L2_youkaiMountainHills.mp4',
				previewUrl: '/video/music/th19-piano/06b_1L2_youkaiMountainHills.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Colinas de la Montaña Youkai (Bucle 2) (h.264 1080p@60)',
					en: 'Animation - Youkai Mountain Hills (Loop 2) (h.264 1080p@60)',
					ja: 'アニメーション - 妖怪の山の丘 (ループ2) (h.264 1080p@60)',
				},
				size: '6.00 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/06c_L2_youkaiMountainHills.mp4',
				previewUrl: '/video/music/th19-piano/06c_L2_youkaiMountainHills.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Higan (Bucle) (h.264 1080p@60)',
					en: 'Animation - Higan (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 彼岸 (ループ) (h.264 1080p@60)',
				},
				size: '45.4 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/07a_L1_higan.mp4',
				previewUrl: '/video/music/th19-piano/07a_L1_higan.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Sai no Kawara (Bucle) (h.264 1080p@60)',
					en: 'Animation - Sai no Kawara (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 賽の河原 (ループ) (h.264 1080p@60)',
				},
				size: '15.7 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/08a_L1_saiNoKawara.mp4',
				previewUrl: '/video/music/th19-piano/08a_L1_saiNoKawara.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Infierno de piletas sangrientas (Bucle) (h.264 1080p@60)',
					en: 'Animation - Hell of Blood Pools (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 旧血の池地獄 (ループ) (h.264 1080p@60)',
				},
				size: '7.04 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/09a_L1_hellOfBloodPools.mp4',
				previewUrl: '/video/music/th19-piano/09a_L1_hellOfBloodPools.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Infierno mayor (Bucle 1) (h.264 1080p@60)',
					en: 'Animation - Greater Hell (Loop 1) (h.264 1080p@60)',
					ja: 'アニメーション - 大地獄 (ループ1) (h.264 1080p@60)',
				},
				size: '7.87 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/10a_L1_greaterHell.mp4',
				previewUrl: '/video/music/th19-piano/10a_L1_greaterHell.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Infierno mayor (Transición 1→2) (h.264 1080p@60)',
					en: 'Animation - Greater Hell (Transition 1→2) (h.264 1080p@60)',
					ja: 'アニメーション - 大地獄 (遷移1→2) (h.264 1080p@60)',
				},
				size: '10.3 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/10b_1L2_greaterHell.mp4',
				previewUrl: '/video/music/th19-piano/10b_1L2_greaterHell.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Infierno mayor (Bucle 2) (h.264 1080p@60)',
					en: 'Animation - Greater Hell (Loop 2) (h.264 1080p@60)',
					ja: 'アニメーション - 大地獄 (ループ2) (h.264 1080p@60)',
				},
				size: '12.2 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/10c_L2_greaterHell.mp4',
				previewUrl: '/video/music/th19-piano/10c_L2_greaterHell.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación - Infierno (Bucle) (h.264 1080p@60)',
					en: 'Animation - Hell (Loop) (h.264 1080p@60)',
					ja: 'アニメーション - 地獄 (ループ) (h.264 1080p@60)',
				},
				size: '83.21 MB',
				url: 'https://github.com/PapitaConPure/TH19-Backgrounds/raw/refs/heads/main/11a_L1_hell.mp4',
				previewUrl: '/video/music/th19-piano/11a_L1_hell.webm',
				previewFormat: 'webm',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de título',
					en: 'Title Part MIDI',
					ja: 'タイトルパートMIDI',
				},
				size: '33.1 KB',
				url: '/music-item-misc/th19-piano/p0_title.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de título',
					en: 'Title Part Sheet Music',
					ja: 'タイトルパート楽譜',
				},
				size: '157 KB',
				url: '/music-item-misc/th19-piano/0_title.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de título (MuseScore 4)',
					en: 'Title Part Sheet Music (MuseScore 4)',
					ja: 'タイトルパート楽譜 (MuseScore 4)',
				},
				size: '96.9 KB',
				url: '/music-item-misc/th19-piano/0_title.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Reimu',
					en: 'Reimu Part MIDI',
					ja: '霊夢パートMIDI',
				},
				size: '44.0 KB',
				url: '/music-item-misc/th19-piano/p1_reimu.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Reimu',
					en: 'Reimu Part Sheet Music',
					ja: '霊夢パート楽譜',
				},
				size: '193 KB',
				url: '/music-item-misc/th19-piano/1_reimu.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Reimu (MuseScore 4)',
					en: 'Reimu Part Sheet Music (MuseScore 4)',
					ja: '霊夢パート楽譜 (MuseScore 4)',
				},
				size: '96.9 KB',
				url: '/music-item-misc/th19-piano/1_reimu.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Enoko',
					en: 'Enoko Part MIDI',
					ja: '慧ノ子パートMIDI',
				},
				size: '32.3 KB',
				url: '/music-item-misc/th19-piano/p2_enoko.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Enoko',
					en: 'Enoko Part Sheet Music',
					ja: '慧ノ子パート楽譜',
				},
				size: '167 KB',
				url: '/music-item-misc/th19-piano/2_enoko.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Enoko (MuseScore 4)',
					en: 'Enoko Part Sheet Music (MuseScore 4)',
					ja: '慧ノ子パート楽譜 (MuseScore 4)',
				},
				size: '92.0 KB',
				url: '/music-item-misc/th19-piano/2_enoko.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Biten',
					en: 'Biten Part MIDI',
					ja: '美天パートMIDI',
				},
				size: '33.2 KB',
				url: '/music-item-misc/th19-piano/p3_son.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Biten',
					en: 'Biten Part Sheet Music',
					ja: '美天パート楽譜',
				},
				size: '153 KB',
				url: '/music-item-misc/th19-piano/3_son.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Biten (MuseScore 4)',
					en: 'Biten Part Sheet Music (MuseScore 4)',
					ja: '美天パート楽譜 (MuseScore 4)',
				},
				size: '80.5 KB',
				url: '/music-item-misc/th19-piano/3_son.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Marisa',
					en: 'Marisa Part MIDI',
					ja: '魔理沙パートMIDI',
				},
				size: '32.9 KB',
				url: '/music-item-misc/th19-piano/p4_marisa.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Marisa',
					en: 'Marisa Part Sheet Music',
					ja: '魔理沙パート楽譜',
				},
				size: '123 KB',
				url: '/music-item-misc/th19-piano/4_marisa.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Marisa (MuseScore 4)',
					en: 'Marisa Part Sheet Music (MuseScore 4)',
					ja: '魔理沙パート楽譜 (MuseScore 4)',
				},
				size: '81.2 KB',
				url: '/music-item-misc/th19-piano/4_marisa.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Suika',
					en: 'Suika Part MIDI',
					ja: '萃香パートMIDI',
				},
				size: '33.1 KB',
				url: '/music-item-misc/th19-piano/p5_suika.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Suika',
					en: 'Suika Part Sheet Music',
					ja: '萃香パート楽譜',
				},
				size: '158 KB',
				url: '/music-item-misc/th19-piano/5_suika.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Suika (MuseScore 4)',
					en: 'Suika Part Sheet Music (MuseScore 4)',
					ja: '萃香パート楽譜 (MuseScore 4)',
				},
				size: '88.0 KB',
				url: '/music-item-misc/th19-piano/5_suika.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Chiyari',
					en: 'Chiyari Part MIDI',
					ja: 'ちやりパートMIDI',
				},
				size: '31.4 KB',
				url: '/music-item-misc/th19-piano/p6_chiyari.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Chiyari',
					en: 'Chiyari Part Sheet Music',
					ja: 'ちやりパート楽譜',
				},
				size: '148 KB',
				url: '/music-item-misc/th19-piano/6_chiyari.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Chiyari (MuseScore 4)',
					en: 'Chiyari Part Sheet Music (MuseScore 4)',
					ja: 'ちやりパート楽譜 (MuseScore 4)',
				},
				size: '78.6 KB',
				url: '/music-item-misc/th19-piano/6_chiyari.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Hisami',
					en: 'Hisami Part MIDI',
					ja: '日狭美パートMIDI',
				},
				size: '27.2 KB',
				url: '/music-item-misc/th19-piano/p7_hisami.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Hisami',
					en: 'Hisami Part Sheet Music',
					ja: '日狭美パート楽譜',
				},
				size: '135 KB',
				url: '/music-item-misc/th19-piano/7_hisami.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Hisami (MuseScore 4)',
					en: 'Hisami Part Sheet Music (MuseScore 4)',
					ja: '日狭美パート楽譜 (MuseScore 4)',
				},
				size: '146 KB',
				url: '/music-item-misc/th19-piano/7_hisami.mscz',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI de parte de Zanmu',
					en: 'Zanmu Part MIDI',
					ja: '残無パートMIDI',
				},
				size: '46.2 KB',
				url: '/music-item-misc/th19-piano/p8_zanmu.mid',
			},
			{
				kind: 'file',
				format: 'pdf',
				label: {
					es: 'Partitura de parte de Zanmu',
					en: 'Zanmu Part Sheet Music',
					ja: '残無パート楽譜',
				},
				size: '218 KB',
				url: '/music-item-misc/th19-piano/8_zanmu.pdf',
			},
			{
				kind: 'file',
				format: 'mscz',
				label: {
					es: 'Partitura de parte de Zanmu (MuseScore 4)',
					en: 'Zanmu Part Sheet Music (MuseScore 4)',
					ja: '残無パート楽譜 (MuseScore 4)',
				},
				size: '110 KB',
				url: '/music-item-misc/th19-piano/8_zanmu.mscz',
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '605.56 MB',
				url: 'https://www.mediafire.com/file/2vtqhjy2hee8kqa/Touhou_19_Piano_Medley_by_PapaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		childrenTitles: [
			{
				es: 'Intelligence of Beast',
				ja: '獣の知性',
			},
			{
				es: 'The World is Made in an Adorable Way',
				ja: '世界は可愛く出来ている',
			},
			{
				es: 'A Brave and Leisurely Beast',
				ja: '勇敢で有閑な妖獣',
			},
			{
				es: 'Tiny Shangry La',
				ja: 'タイニーシャングリラ',
			},
			{
				es: 'Magical Beast Scramble',
				ja: '魔獣スクランブル',
			},
			{
				es: 'The Oni Go to the Perpetual Mountain',
				ja: '鬼は悠久の山に',
			},
			{
				es: 'Vampiric Cryptid Chupacabra',
				ja: '吸血怪獣チュパカブラ',
			},
			{
				es: 'The Path to Yomi Where None Turn Back',
				ja: '振り向かない黄泉の道',
			},
			{
				es: "The Deviants' Unobstructed Light ~ Kingdam of Nothingness",
				ja: '逸脱者達の無礙光 ～ Kingdam of Nothingness',
			},
			{
				es: 'Do Beasts Have Intelligence?',
				ja: '獣に知性はあるか',
			},
		],
		tags: ['piano medley'],
	},

	//A Star We Owe to the Sky
	{
		id: 'aswotts',
		kind: 'single',
		artists: [papitaCredit],
		title: 'A Star We Owe to the Sky',
		date: new Date('2024-05-10'),
		categories: ['original'],
		coverUrl: '/images/music/aswotts/thumbnail.webp',
		thumbnailUrl: '/images/music/aswotts/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=xbXkLZToWMY',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=xbXkLZToWMY',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '9.05 MB',
				url: '/audio/music/aswotts/A Star We Owe to the Sky.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (540p)',
					en: 'Thumbnail (540p)',
					ja: 'サムネイル (540p)',
				},
				size: '854 KB',
				url: '/images/music/aswotts/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (540p)',
					en: 'Thumbnail (540p)',
					ja: 'サムネイル (540p)',
				},
				size: '33 KB',
				url: '/images/music/aswotts/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle) (DNxHR 12-bit / 1080p@30) (archive.org)',
					en: 'Animation (Loop) (DNxHR 12-bit / 1080p@30) (archive.org)',
					ja: 'アニメーション (ループ) (DNxHR 12-bit / 1080p@30) (archive.org)',
				},
				size: '350 MB',
				url: 'https://archive.org/download/aswotts-loop1-by-papitapure/loop1.mov',
				previewUrl: '/video/music/aswotts/preview.webm',
				previewFormat: 'webm',
				external: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '359 MB',
				url: 'https://www.mediafire.com/file/5jqwu00nv4t2b2w/ASWOttS_by_PapaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		tags: ['pop', 'rock'],
	},

	//PaTeKa 3
	{
		id: 'pateka-3',
		kind: 'single',
		displayArtist: 'PaTeKa',
		artists: [papitaCredit, tewaCredit, karlCredit],
		title: {
			es: "Maiden's Step ~ Arboleda Renaciente",
			en: "Maiden's Step ~ Reborn Grove",
			ja: '乙女の足音 ～ Reborn Grove',
		},
		description: {
			es: 'Composición:\n• Karl Zuñiga [Base; composición general]\n• Tewi [Sax; detalles]\n• Papita con Puré [1:07 ~ 2:14]\n\nMezcla: Karl Zuñiga',
			en: 'Composition:\n• Karl Zuñiga [Base; general composition]\n• Tewi [Sax; Details]\n• Papita con Puré [1:07 ~ 2:14]\n\nMix: Karl Zuñiga',
			ja: '作曲家:\n• Karl Zuñiga [財団; 作曲全般]\n• Tewi [サックス; 詳細]\n• Papita con Puré [1:07 ~ 2:14]\n\nMix: Karl Zuñiga',
		},
		date: new Date('2025-01-09'),
		categories: ['collab', 'original'],
		coverUrl: '/images/music/pateka-3/cover.webp',
		thumbnailUrl: '/images/music/pateka-3/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=yjuLQ-HOpsY',
		credits: {
			music: {
				composers: [papitaCredit, tewaCredit, karlCredit],
				mixers: [karlCredit],
			},
			visuals: {
				cover: [
					{
						name: '魁莉',
						url: 'https://www.pixiv.net/en/artworks/124705185',
					},
					karlCredit,
				],
				thumbnail: [
					{
						name: '魁莉',
						url: 'https://www.pixiv.net/en/artworks/124705185',
					},
					karlCredit,
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: {
					es: 'YouTube (en canal de Karl Zuñiga)',
					en: "YouTube (in Karl Zuñiga's channel)",
					ja: 'YouTube (Karl Zuñigaのチャンネル内)',
				},
				url: 'https://www.youtube.com/watch?v=yjuLQ-HOpsY',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '33.4 MB',
				url: '/audio/music/pateka-3/pateka3.flac',
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '11.2 MB',
				url: '/audio/music/pateka-3/pateka3.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (3000x3000)',
					en: 'Cover (3000x3000)',
					ja: '表紙 (3000x3000)',
				},
				size: '9.65 MB',
				url: '/images/music/pateka-3/cover.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Portada (3000x3000)',
					en: 'Cover (3000x3000)',
					ja: '表紙 (3000x3000)',
				},
				size: '443 KB',
				url: '/images/music/pateka-3/cover.webp',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '93.2 KB',
				url: '/images/music/pateka-3/thumbnail.webp',
			},
		],
		tags: ['ambiental'],
	},

	//Blade of Warmness
	{
		id: 'blade-of-warmness',
		kind: 'single',
		artists: [papitaCredit],
		title: {
			es: 'Blade of Warmness',
			ja: '暖かさの刃',
		},
		date: new Date('2025-05-01'),
		categories: ['original'],
		coverUrl: '/images/music/blade-of-warmness/cover.png',
		thumbnailUrl: '/images/music/blade-of-warmness/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=G8NjlKAXBvw',
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=G8NjlKAXBvw',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '28.4 MB',
				url: '/audio/music/blade-of-warmness/blade of warmness.flac',
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '9.92 MB',
				url: '/audio/music/blade-of-warmness/blade of warmness.mp3',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (2k)',
					en: 'Cover (2k)',
					ja: '表紙 (2k)',
				},
				size: '4.04 MB',
				url: '/images/music/blade-of-warmness/cover.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (posterior) (2k)',
					en: 'Cover (Back) (2k)',
					ja: '裏表紙 (2k)',
				},
				size: '4.14 MB',
				url: '/images/music/blade-of-warmness/back.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 1 (720p)',
					en: 'Thumbnail 1 (720p)',
					ja: 'サムネイル１ (720p)',
				},
				size: '988 KB',
				url: '/images/music/blade-of-warmness/thumb1.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 3 (720p)',
					en: 'Thumbnail 3 (720p)',
					ja: 'サムネイル３ (720p)',
				},
				size: '876 KB',
				url: '/images/music/blade-of-warmness/thumb3.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 4 (720p)',
					en: 'Thumbnail 4 (720p)',
					ja: 'サムネイル４ (720p)',
				},
				size: '797 KB',
				url: '/images/music/blade-of-warmness/thumb4.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 5 (720p)',
					en: 'Thumbnail 5 (720p)',
					ja: 'サムネイル５ (720p)',
				},
				size: '1.00 MB',
				url: '/images/music/blade-of-warmness/thumb5.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura 5 (720p)',
					en: 'Thumbnail 5 (720p)',
					ja: 'サムネイル５ (720p)',
				},
				size: '47.0 KB',
				url: '/images/music/blade-of-warmness/thumbnail.webp',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 6 (720p)',
					en: 'Thumbnail 6 (720p)',
					ja: 'サムネイル６ (720p)',
				},
				size: '1.09 MB',
				url: '/images/music/blade-of-warmness/thumb6.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 7 (720p)',
					en: 'Thumbnail 7 (720p)',
					ja: 'サムネイル７ (720p)',
				},
				size: '932 KB',
				url: '/images/music/blade-of-warmness/thumb7.png',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura 8 (720p)',
					en: 'Thumbnail 8 (720p)',
					ja: 'サムネイル８ (720p)',
				},
				size: '821 KB',
				url: '/images/music/blade-of-warmness/thumb8.png',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle 1) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Loop 1) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (ループ1) (h.264 / 4k@60) (archive.org)',
				},
				size: '54.8 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/loop_main.mp4',
				previewUrl: '/video/music/blade-of-warmness/loop_main.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle 1) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Loop 1) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (ループ1) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '868 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/loop_main.mov',
				previewUrl: '/video/music/blade-of-warmness/loop_main.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle 2) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Loop 2) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (ループ2) (h.264 / 4k@60) (archive.org)',
				},
				size: '55.2 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/loop_chorus.mp4',
				previewUrl: '/video/music/blade-of-warmness/loop_chorus.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle 2) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Loop 2) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (ループ2) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '229 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/loop_chorus.mov',
				previewUrl: '/video/music/blade-of-warmness/loop_chorus.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Lineal 1) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Linear 1) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (リニア1) (h.264 / 4k@60) (archive.org)',
				},
				size: '89.9 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/straight_1.mp4',
				previewUrl: '/video/music/blade-of-warmness/straight_1.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Lineal 1) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Linear 1) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (リニア1) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '1.69 GB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/straight_1.mov',
				previewUrl: '/video/music/blade-of-warmness/straight_1.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Lineal 2) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Linear 2) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (リニア2) (h.264 / 4k@60) (archive.org)',
				},
				size: '200 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/straight_2.mp4',
				previewUrl: '/video/music/blade-of-warmness/straight_2.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Lineal 2) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Linear 2) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (リニア2) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '1.16 GB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/straight_2.mov',
				previewUrl: '/video/music/blade-of-warmness/straight_2.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Lineal 3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Linear 3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (リニア3) (h.264 / 4k@60) (archive.org)',
				},
				size: '173 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/straight_3.mp4',
				previewUrl: '/video/music/blade-of-warmness/straight_3.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Lineal 3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Linear 3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (リニア3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '676 MB',
				url: 'https://archive.org/download/blade-of-warmness-animation-by-papitapure/straight_3.mov',
				previewUrl: '/video/music/blade-of-warmness/straight_3.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete completo (MediaFire)',
					en: 'Full Pack (MediaFire)',
					ja: 'フルパック (MediaFire)',
				},
				size: '3.42 GB',
				url: 'https://www.mediafire.com/file/a58tjhq1jsom1qt/Blade_of_Warmness_by_PapitaPur%25C3%25A9.zip/file',
				external: true,
			},
		],
		tags: ['electronic', 'orchestral'],
	},

	//TH20 Stage 3 Theme Piano Arrangement
	{
		id: 'th20-prester-john-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Golden Land of Prester John',
			ja: 'プレステ・ジョアンの黄金境',
		},
		date: new Date('2025-06-05'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/th20-prester-john-piano/cover.png',
		thumbnailUrl: '/images/music/th20-prester-john-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=67InEuZUqEs',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'イシム',
						url: 'https://x.com/1shimu/status/1925537080974958856',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=67InEuZUqEs',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '19.6 MB',
				url: '/audio/music/th20-prester-john-piano/th20stage3.flac',
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '10.8 MB',
				url: '/audio/music/th20-prester-john-piano/th20stage3.mp3',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI completo',
					en: 'Full MIDI',
					ja: 'フルMIDI',
				},
				size: '657 KB',
				url: '/music-item-misc/th20-prester-john-piano/th20stage3midi.mid',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Portada (1024X1024)',
					en: 'Cover (1024X1024)',
					ja: '表紙 (1024X1024)',
				},
				size: '0.97 MB',
				url: '/images/music/th20-prester-john-piano/cover.png',
			},
			{
				kind: 'image',
				format: 'jpg',
				label: {
					es: 'Portada (1024X1024)',
					en: 'Cover (1024X1024)',
					ja: '表紙 (1024X1024)',
				},
				size: '222 KB',
				url: '/images/music/th20-prester-john-piano/folder.jpg',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.26 MB',
				url: '/images/music/th20-prester-john-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '101 KB',
				url: '/images/music/th20-prester-john-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Entrada S3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (In S3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (インS3) (h.264 / 4k@60) (archive.org)',
				},
				size: '110 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F1_s3a_in.mp4',
				previewUrl: '/video/music/th20-prester-john-piano/1_s3a_in.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Entrada S3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (In S3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (インS3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '821 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F1_s3a_in.mov',
				previewUrl: '/video/music/th20-prester-john-piano/1_s3a_in.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle S3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Loop S3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (ループS3) (h.264 / 4k@60) (archive.org)',
				},
				size: '206 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F2_s3a_loop.mp4',
				previewUrl: '/video/music/th20-prester-john-piano/2_s3a_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle S3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Loop S3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (ループS3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '1.41 GB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F2_s3a_loop.mov',
				previewUrl: '/video/music/th20-prester-john-piano/2_s3a_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Salida S3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Out S3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (アウトS3) (h.264 / 4k@60) (archive.org)',
				},
				size: '181 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F3_s3a_out.mp4',
				previewUrl: '/video/music/th20-prester-john-piano/3_s3a_out.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Salida S3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Out S3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (アウトS3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '1.56 GB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F3_s3a_out.mov',
				previewUrl: '/video/music/th20-prester-john-piano/3_s3a_out.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Entrada B3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (In B3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (インB3) (h.264 / 4k@60) (archive.org)',
				},
				size: '20.6 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F4_b3a_in.mp4',
				previewUrl: '/video/music/th20-nareko-piano/4_b3a_in.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Entrada B3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (In B3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (インB3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '232 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F4_b3a_in.mov',
				previewUrl: '/video/music/th20-nareko-piano/4_b3a_in.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle B3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Loop B3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (ループB3) (h.264 / 4k@60) (archive.org)',
				},
				size: '89.4 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F5_b3a_loop.mp4',
				previewUrl: '/video/music/th20-nareko-piano/5_b3a_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle B3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Loop B3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (ループB3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '885 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F5_b3a_loop.mov',
				previewUrl: '/video/music/th20-nareko-piano/5_b3a_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de música (archive.org)',
					en: 'Music Pack (archive.org)',
					ja: '音楽パック (archive.org)',
				},
				size: '31.7 MB',
				url: 'https://archive.org/download/th-20-stg-3-piano-by-papita-pure/TH20%20STG3%20Piano%20by%20PapitaPur%C3%A9.zip',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de animación (incluye animación de jefa 3) (archive.org)',
					en: 'Animation Pack (Boss 3 animation included) (archive.org)',
					ja: 'アニメーションパック (ボス3アニメーションを収録) (archive.org)',
				},
				size: '5.30 GB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip',
				external: true,
				direct: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//TH20 Boss 3 Theme Piano Arrangement
	{
		id: 'th20-nareko-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Might as Well Stake Your Life to Solve the Riddle',
			ja: 'どうせなら命を賭けて謎を解け',
		},
		date: new Date('2025-06-12'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/th20-nareko-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/th20-nareko-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=UDjJdx0bxG8',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: 'がらすの',
						url: 'https://www.pixiv.net/artworks/130591161',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=UDjJdx0bxG8',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '19.7 MB',
				url: '/audio/music/th20-nareko-piano/th20boss3.flac',
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '10.9 MB',
				url: '/audio/music/th20-nareko-piano/th20boss3.mp3',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI completo',
					en: 'Full MIDI',
					ja: 'フルMIDI',
				},
				size: '472 KB',
				url: '/music-item-misc/th20-nareko-piano/th20boss3midi.mid',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '970 KB',
				url: '/images/music/th20-nareko-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '94.6 KB',
				url: '/images/music/th20-nareko-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Entrada B3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (In B3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (インB3) (h.264 / 4k@60) (archive.org)',
				},
				size: '20.6 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F4_b3a_in.mp4',
				previewUrl: '/video/music/th20-nareko-piano/4_b3a_in.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Entrada B3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (In B3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (インB3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '232 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F4_b3a_in.mov',
				previewUrl: '/video/music/th20-nareko-piano/4_b3a_in.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle B3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Loop B3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (ループB3) (h.264 / 4k@60) (archive.org)',
				},
				size: '89.4 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F5_b3a_loop.mp4',
				previewUrl: '/video/music/th20-nareko-piano/5_b3a_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle B3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Loop B3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (ループB3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '885 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F5_b3a_loop.mov',
				previewUrl: '/video/music/th20-nareko-piano/5_b3a_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Salida B3) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Out B3) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (アウトB3) (h.264 / 4k@60) (archive.org)',
				},
				size: '41.1 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F6_b3a_out.mp4',
				previewUrl: '/video/music/th20-nareko-piano/6_b3a_out.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Salida B3) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Out B3) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (アウトB3) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '251 MB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F6_b3a_out.mov',
				previewUrl: '/video/music/th20-nareko-piano/6_b3a_out.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de música (archive.org)',
					en: 'Music Pack (archive.org)',
					ja: '音楽パック (archive.org)',
				},
				size: '30.6 MB',
				url: 'https://archive.org/download/th-20-boss-3-piano-by-papita-pure/TH20%20Boss%203%20Piano%20by%20PapitaPur%C3%A9.zip',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de animación (incluye animación de nivel 3) (archive.org)',
					en: 'Animation Pack (Stage 3 animation included) (archive.org)',
					ja: 'アニメーションパック (ステージ3アニメーションを収録) (archive.org)',
				},
				size: '5.30 GB',
				url: 'https://archive.org/download/th-20-stg-3-boss-3-animation-by-papita-pure/TH20%20STG3%2BBOSS3%20Animation%20by%20PapitaPur%C3%A9.zip',
				external: true,
				direct: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//TH20 Title Theme Piano Arrangement
	{
		id: 'th20-title-piano',
		kind: 'single',
		artists: [zunCredit, papitaCredit],
		title: {
			es: 'Shrine Maiden Crowned with Glory',
			ja: '錦の上の巫女',
		},
		date: new Date('2025-06-20'),
		categories: ['arrangement', 'piano', 'touhou'],
		coverUrl: '/images/music/th20-title-piano/thumbnail.webp',
		thumbnailUrl: '/images/music/th20-title-piano/thumbnail.webp',
		videoUrl: 'https://www.youtube.com/watch?v=-zVIfDTc1gQ',
		credits: {
			music: {
				composers: [zunCredit],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
				thumbnail: [
					{
						name: '白昼桃草子',
						url: 'https://www.pixiv.net/en/artworks/130985089',
					},
				],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=-zVIfDTc1gQ',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '14.6 MB',
				url: '/audio/music/th20-title-piano/th20title.flac',
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '8.95 MB',
				url: '/audio/music/th20-title-piano/th20title.mp3',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI completo (MediaFire)',
					en: 'Full MIDI (MediaFire)',
					ja: 'フルMIDI (MediaFire)',
				},
				size: '317 KB',
				url: '/music-item-misc/th20-nareko-piano/th20titlemidi.mid',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.39 MB',
				url: '/images/music/th20-title-piano/thumbnail.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '125 KB',
				url: '/images/music/th20-title-piano/thumbnail.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle) (h.264 / 4k@60) (archive.org)',
					en: 'Animation (Loop) (h.264 / 4k@60) (archive.org)',
					ja: 'アニメーション (ループ) (h.264 / 4k@60) (archive.org)',
				},
				size: '430 MB',
				url: 'https://archive.org/download/th-20-title-animation-by-papita-pure/TH20%20Title%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20Title%20Animation%20by%20PapitaPur%C3%A9%2FMP4%20-%20H.264%204k%4060%2F0_title_loop.mp4',
				previewUrl: '/video/music/th20-title-piano/0_title_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'video',
				format: 'mov',
				label: {
					es: 'Animación (Bucle) (DNxHR HQ / 4k@60) (archive.org)',
					en: 'Animation (Loop) (DNxHR HQ / 4k@60) (archive.org)',
					ja: 'アニメーション (ループ) (DNxHR HQ / 4k@60) (archive.org)',
				},
				size: '1.69 GB',
				url: 'https://archive.org/download/th-20-title-animation-by-papita-pure/TH20%20Title%20Animation%20by%20PapitaPur%C3%A9.zip/TH20%20Title%20Animation%20by%20PapitaPur%C3%A9%2FMOV%20-%20DNxHR%20HQ%204k%4060%2F0_title_loop.mov',
				previewUrl: '/video/music/th20-title-piano/0_title_loop.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de música (archive.org)',
					en: 'Music Pack (archive.org)',
					ja: '音楽パック (archive.org)',
				},
				size: '23.3 MB',
				url: 'https://archive.org/download/th-20-title-piano-by-papita-pure/TH20%20Title%20Piano%20by%20PapitaPur%C3%A9.zip',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de animación (archive.org)',
					en: 'Animation Pack (archive.org)',
					ja: 'アニメーションパック (archive.org)',
				},
				size: '2.10 GB',
				url: 'https://archive.org/download/th-20-title-animation-by-papita-pure/TH20%20Title%20Animation%20by%20PapitaPur%C3%A9.zip',
				external: true,
				direct: true,
			},
		],
		tags: ['piano arrangement'],
	},

	//DS2 Majula Theme Piano Trio Arrangement
	{
		id: 'ds2-majula',
		kind: 'single',
		artists: [
			{
				name: {
					es: 'Sakuraba Motoi',
					ja: '桜庭 統',
				},
				clarification: {
					es: '桜庭 統',
					ja: 'さくらば　もとい',
				},
				url: 'https://www.sakuraba-motion.com',
			},
			papitaCredit,
		],
		title: {
			es: 'Majula Piano Trio Arrangement',
			ja: 'マジュラピアノトリオアレンジ',
		},
		date: new Date('2025-08-07'),
		categories: ['arrangement'],
		coverUrl: '/images/music/ds2-majula/thumb.webp',
		thumbnailUrl: '/images/music/ds2-majula/thumb.webp',
		videoUrl: 'https://www.youtube.com/watch?v=-zVIfDTc1gQ',
		credits: {
			music: {
				composers: [
					{
						name: {
							es: 'Sakuraba Motoi',
							ja: '桜庭 統',
						},
						clarification: {
							es: '桜庭 統',
							ja: 'さくらば　もとい',
						},
						url: 'https://www.sakuraba-motion.com',
					},
				],
				arrangers: [papitaCredit],
			},
			visuals: {
				background: [papitaCredit],
			},
		},
		externalLinks: [
			{
				source: 'youtube',
				label: 'YouTube',
				url: 'https://www.youtube.com/watch?v=ZQd-CzroDS4',
			},
		],
		downloadUrls: [
			{
				kind: 'audio',
				format: 'flac',
				label: {
					es: 'Pista completa (16-bit int)',
					en: 'Full Track (16-bit int)',
					ja: 'フルトラック (16-bit int)',
				},
				size: '14.4 MB',
				url: '/audio/music/ds2-majula/ds_majula.flac',
			},
			{
				kind: 'audio',
				format: 'mp3',
				label: {
					es: 'Pista completa (320 Kbps)',
					en: 'Full Track (320 Kbps)',
					ja: 'フルトラック (320 Kbps)',
				},
				size: '8.52 MB',
				url: '/audio/music/ds2-majula/ds_majula.mp3',
			},
			{
				kind: 'file',
				format: 'midi',
				label: {
					es: 'MIDI completo (MediaFire)',
					en: 'Full MIDI (MediaFire)',
					ja: 'フルMIDI (MediaFire)',
				},
				size: '572 KB',
				url: '/music-item-misc/ds2-majula/ds_majula_midi.mid',
			},
			{
				kind: 'image',
				format: 'png',
				label: {
					es: 'Miniatura (720p)',
					en: 'Thumbnail (720p)',
					ja: 'サムネイル (720p)',
				},
				size: '1.55 MB',
				url: '/images/music/ds2-majula/thumb.png',
			},
			{
				kind: 'image',
				format: 'webp',
				label: {
					es: 'Miniatura (1080p)',
					en: 'Thumbnail (1080p)',
					ja: 'サムネイル (1080p)',
				},
				size: '125 KB',
				url: '/images/music/ds2-majula/thumb.webp',
			},
			{
				kind: 'video',
				format: 'mp4',
				label: {
					es: 'Animación (Bucle) (h.264 / 4k@60) (MediaFire)',
					en: 'Animation (Loop) (h.264 / 4k@60) (MediaFire)',
					ja: 'アニメーション (ループ) (h.264 / 4k@60) (MediaFire)',
				},
				size: '437 MB',
				url: 'https://www.mediafire.com/file/sf0lnt0m9c1kbfx/majula.mov/file',
				previewUrl: '/video/music/ds2-majula/majula.webm',
				previewFormat: 'webm',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de música (archive.org) (Pendiente)',
					en: 'Music Pack (archive.org) (Pendiente)',
					ja: '音楽パック (archive.org) (Pendiente)',
				},
				size: '0 b',
				url: '',
				external: true,
				direct: true,
			},
			{
				kind: 'file',
				format: 'zip',
				label: {
					es: 'Paquete de animación (archive.org) (Pendiente)',
					en: 'Animation Pack (archive.org) (Pendiente)',
					ja: 'アニメーションパック (archive.org) (Pendiente)',
				},
				size: '0 b',
				url: '',
				external: true,
				direct: true,
			},
		],
		tags: ['piano arrangement'],
	},
];

const itemsById: Record<string, MusicItem> = {};
items.forEach((item) => {
	itemsById[item.id] = item;
});

items.reverse();

export default items;
export { itemsById };
