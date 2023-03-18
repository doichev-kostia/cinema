import { PrismaClient } from "@prisma/client";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
	event.locals.prisma = new PrismaClient();
	const response = await resolve(event);

	return response;
}) satisfies Handle;
