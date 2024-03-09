export function getLongFormattedDate(dateString: string): string {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(dateString))
}

export function getShortFormattedDate(dateString: string): string {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(new Date(dateString))
}