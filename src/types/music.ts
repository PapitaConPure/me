export interface ExternalLink {
	source: 'youtube' | 'soundcloud' | 'spotify' | 'other';
	label: string;
	url: string;
}

export type AudioAssetFormat = 'mp3' | 'flac' | 'wav' | 'other';
export type ImageAssetFormat = 'jpg' | 'png' | 'gif' | 'webp' | 'other';
export type VideoAssetFormat = 'mp4' | 'mov' | 'webm' | 'other';
export type OtherAssetFormat = 'zip' | 'rar' | 'midi' | 'other';

export type AssetFormat =
	| AudioAssetFormat
	| ImageAssetFormat
	| VideoAssetFormat
	| OtherAssetFormat;

interface AssetSpecificationTemplate<TKind extends string, TFormat extends AssetFormat> {
	kind: TKind;
	format: TFormat;
}

export type AssetSpecification =
	| AssetSpecificationTemplate<'audio', AudioAssetFormat>
	| AssetSpecificationTemplate<'image', ImageAssetFormat>
	| AssetSpecificationTemplate<'video', VideoAssetFormat>
	| AssetSpecificationTemplate<'file', OtherAssetFormat>;

export interface AssetPreviewData {
	previewUrl?: string;
	previewFormat?: AssetFormat;
}

export interface DownloadData {
	url: string;
	size: `${number} ${'K' | 'M' | 'G' | ''}${'B' | 'b'}`;
	label: string;
	external?: boolean;
}

export type DownloadUrl = AssetSpecification & AssetPreviewData & DownloadData;

export type CategoryKey = 'original' | 'arrangement' | 'collab' | 'touhou' | 'piano' | 'medley';

export interface FullArtistCredit {
	name: string;
	clarification?: string;
	url?: string;
}

export type CreditsField = (string | FullArtistCredit)[];

export interface BaseMusicItem {
	id: string;
	artists: CreditsField;
	title: string;
	date: Date;
	categories: CategoryKey[];
	coverUrl: string;
	thumbnailUrl: string;
}

export interface ExtendedMusicItemMetadata {
	description?: string;
	displayArtist?: string;
	videoUrl?: string;
	credits?: ExtendedMusicItemCredits;
	externalLinks?: ExternalLink[];
	downloadUrls?: DownloadUrl[];
	tags?: string[];
}

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

export interface ChildMusicItemData {
	kind: 'id' | 'name';
	data: string;
}

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
