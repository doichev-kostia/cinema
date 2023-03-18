<script lang="ts">
	import type { Minutes } from "../utility.types";
	import {transformDuration} from "$lib/utils";

	export let title: string;
	export let posterUrl: string;
	export let duration: Minutes;


</script>

<div class="card bg-base-100 shadow-xl max-h-[500px] h-full">
	<figure class="block h-[80%]"><img src={posterUrl} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<time>{transformDuration(duration)}</time>
	</div>
</div>
