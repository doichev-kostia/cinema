import type { PageServerLoad } from "./$types";
import type { Movie } from "@prisma/client";

export const load = (async (event): Promise<Movie> => {
	const movie = await event.locals.prisma.movie.findUniqueOrThrow({
		where: {
			id: event.params.movieId,
		},
	});

	return movie;
}) satisfies PageServerLoad;
