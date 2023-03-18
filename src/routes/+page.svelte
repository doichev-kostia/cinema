<script lang="ts">
	import type { PageData } from "./$types";
	import MovieCard from "$lib/components/MovieCard.svelte";
	export let data: PageData;

	let selectedCinemaId: string; // mutation
</script>

<section>
	<div class="flex justify-between mb-10">
		<h1 class="text-2xl md:text-4xl">Movies</h1>

		<lablel for="cinema" class="max-w-xs w-full">
			Choose the cinema:
			<select id="cinema" class="select select-primary w-full mt-1" bind:value={selectedCinemaId}>
				<option value="" selected>All</option>
				{#each data.cinemas as cinema (cinema.id)}
					<option value={cinema.id}>{cinema.name}</option>
				{/each}
			</select>
		</lablel>
	</div>

	<div>
		<ul class="movie-list grid justify-items-center gap-x-3 gap-y-5">
			{#each data.movies as movie (movie.id)}
				<li class="max-w-[300px] w-full">
					<a href="/movies/{movie.id}">
						<MovieCard posterUrl={movie.posterUrl} title={movie.title} duration={movie.duration} />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.movie-list {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>
