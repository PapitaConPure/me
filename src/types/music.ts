export type ExternalLink = {
	source: 'youtube' | 'soundcloud' | 'spotify' | 'other';
	label: string;
	url: string;
};

export type DownloadData = {
	url: string;
	size: `${number} ${'K' | 'M' | 'G' | ''}${'B' | 'b'}`;
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
			format: 'zip' | 'rar' | 'midi' | 'other';
	  };

export type DownloadUrl = DownloadData & AssetSpecification;

export type CategoryKey = 'original' | 'arrangement' | 'collab' | 'touhou' | 'piano' | 'medley';

export type FullArtistCredit = {
	name: string;
	clarification?: string;
	url?: string;
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
	description?: string;
	displayArtist?: string;
	videoUrl?: string;
	credits?: ExtendedMusicItemCredits;
	externalLinks?: ExternalLink[];
	downloadUrls?: DownloadUrl[];
	tags?: string[];
};

export type ExtendedMusicItemCredits = {
	music?: {
		composers?: CreditsField;
		arrangers?: CreditsField;
		mixers?: CreditsField;
	};
	visuals?: {
		background?: CreditsField;
		foreground?: CreditsField;
		thumbnail?: CreditsField;
		cover?: CreditsField;
	};
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
