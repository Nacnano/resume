<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let position: string;
	export let company: string;
	export let location: string;
	export let url: string;
	export let years: string[];
	export let details: string[];
</script>

<div class="work-experience">
	<Hideable>
		<div class="flex flex-col mb-2 print:mb-1">
			<div class="flex-1 text-left w-auto font-bold">
				<p>
					{position}
				</p>
			</div>
			<div class="flex flex-row justify-between items-start">
				<div class="flex flex-wrap gap-2">
					<p class="font-semibold">{company}</p>
					<a href={url} target="_blank" class="font-semibold" rel="noreferrer"
						>{url.replace('https://', '')}</a
					>
					<p class="font-normal">{location}</p>
				</div>
				<div class="flex-1 text-right">{years.join(' - ')}</div>
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
