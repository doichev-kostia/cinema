import type { PageServerLoad } from "./$types";
import type { Cinema, Movie } from "@prisma/client";

export const load = (async (event): Promise<{ movies: Movie[]; cinemas: Cinema[] }> => {
	const movies = await event.locals.prisma.movie.findMany();
	const cinemas = await event.locals.prisma.cinema.findMany();

	return {
		movies,
		cinemas,
	};
}) satisfies PageServerLoad;
