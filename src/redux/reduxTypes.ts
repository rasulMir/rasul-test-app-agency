
export interface IinitialState {
	loading: boolean;
	error: boolean;
	selected: TSelected;
	data: IData[],
}

export type TSelected = 'all' | 'photo' | 'illustration' | 'vector/ai' | 'vector/svg' | string;

export interface IResponseData {
	total: number;
	totalHits: number;
	hits: IData[];
}

export interface IData {
	id: number,
	pageURL: string,
	type: string,
	tags: string,
	previewURL: string,
	previewWidth: number,
	previewHeight: number,
	webformatURL: string,
	webformatWidth: number,
	webformatHeight: number,
	largeImageURL: string,
	imageWidth: number,
	imageHeight: number,
	imageSize: number,
	views: number,
	downloads: number,
	collections: number,
	likes: number,
	comments: number,
	user_id: number,
	user: string,
	userImageURL: string
}