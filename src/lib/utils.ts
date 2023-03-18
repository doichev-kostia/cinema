import type { Minutes } from "$lib/utility.types";

export const transformDuration = (duration: Minutes) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration % 60;
	return `${hours}h ${minutes}m`;
};
