import type { TMediaType, TStatus } from '../../types/src'

export const STATUS_LABELS: Record<TStatus, string> = {
	want: 'Want to Watch',
	progress: 'In Progress',
	done: 'Completed',
}

export const TYPE_LABELS: Record<TMediaType, string> = {
	movie: 'Movie',
	series: 'Series',
	game: 'Game',
	book: 'Book',
	anime: 'Anime',
}
