export const MEDIA_TYPES = ['movie', 'series', 'game', 'book', 'anime'] as const
export type TMediaType = (typeof MEDIA_TYPES)[number]

export const STATUTES = ['want', 'progress', 'done'] as const
export type TStatus = (typeof STATUTES)[number]

export interface ITitle {
	id: string
	type: TMediaType
	name: string
	year: number | null
	cover: string | null
	status: TStatus
}
