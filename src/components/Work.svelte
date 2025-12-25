<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let position: string;
	export let company: string;
	export let location: string;
	export let url: string;
	export let years: string[];
	export let details: string[];
	export let hide: boolean;
</script>

<div class="work-experience">
	<Hideable {hide}>
		<div class="flex flex-col mb-2 print:mb-1">
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
				<div class="flex-1 text-left w-auto font-bold mb-1 sm:mb-0">
					<p>
						{position}
					</p>
				</div>
				<div class="flex-1 text-left sm:text-right font-medium sm:font-normal text-sm sm:text-base">
					{years.join(' - ')}
				</div>
			</div>
			<div class="flex flex-wrap gap-2 items-center text-sm sm:text-base">
				<p class="font-semibold">{company}</p>
				{#if url}
					<a href={url} target="_blank" class="font-semibold break-all" rel="noreferrer"
						>{url.replace('https://', '').replace(/\/$/, '')}</a
					>
				{/if}
				<p class="font-normal">{location}</p>
			</div>
		</div>
		<ul class="text-left list-disc pl-8 print:pl-6">
			{#each details as detail}
				<Hideable>
					<li>
						{detail}
					</li>
				</Hideable>
			{/each}
		</ul>
	</Hideable>
</div>

<style lang="postcss">
	.work-experience {
		@apply my-4;
	}

	a {
		text-decoration: underline;
	}

	@media print {
		.work-experience {
			@apply my-1;
		}
	}
</style>
