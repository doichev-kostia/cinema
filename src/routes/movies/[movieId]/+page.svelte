<script lang="ts">
	import { transformDuration } from "$lib/utils";
	import type { PageData } from "./$types";

	export let data: PageData;
	console.log(data.releaseDate);
	const formatter = new Intl.DateTimeFormat("en-GB");
	const date = formatter
		.format(data.releaseDate) // returns a string in the format "dd/MM/yyyy"
		.replaceAll("/", ".");
</script>

<section>
	<div class="grid gap-5 movie-description mb-5">
		<img src={data.posterUrl} class="rounded-lg h-full max-h-96" />

		<div class="min-w-[100px]">
			<h1 class="text-3xl mb-5 font-semibold">{data.title}</h1>
			<p class="text-lg mb-3">{data.description}</p>
			<time class="text-base block mb-1">Duration: {transformDuration(data.duration)}</time>
			<time class="text-base block mb-1">Released: {date}</time>
			<p>Rating: {data.rating / 10} ⭐️</p>
		</div>
	</div>
	<div>
		<h3 class="text-xl mb-2">Actors</h3>
		<p class="mb-8">{data.actors}</p>

		<h3 class="text-xl mb-2">Directors</h3>
		<p class="mb-8">{data.directors}</p>

		<h3 class="text-xl mb-2">Genres</h3>
		<p class="mb-8">{data.genres}</p>
	</div>
</section>

<style>
	.movie-description {
		grid-template-columns: auto 1fr;
	}
</style>
