<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let position: string;
	export let company: string;
	export let location: string;
	export let url: string;
	export let years: string[];

	export let details: Array<string | { text: string; hide?: boolean }>;
	export let hide: boolean = false;
</script>

<div class="work-experience">
	<Hideable {hide}>
		<div class="flex flex-col gap-1 mb-2 print:mb-1 print:text-sm">
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
				<div class="flex-1 text-left w-auto font-bold mb-1 sm:mb-0">
					<p>
						{position}
					</p>
				</div>
				<div
					class="flex-1 text-left sm:text-right font-medium sm:font-normal print:text-sm sm:text-base"
				>
					{years.join(' - ')}
				</div>
			</div>
			<div class="work-meta print:text-sm sm:text-base">
				<p class="font-semibold">{company}</p>
				{#if url}
					<a href={url} target="_blank" class="font-semibold break-all" rel="noreferrer"
						>{url.replace('https://', '').replace(/\/$/, '')}</a
					>
				{/if}
				<p class="font-normal">{location}</p>
			</div>
		</div>
		<ul class="work-details text-left list-disc print:pl-6">
			{#each details as detail}
				{#if typeof detail === 'string'}
					<Hideable as="li">
						{detail}
					</Hideable>
				{:else}
					<Hideable as="li" hide={detail.hide}>
						{detail.text}
					</Hideable>
				{/if}
			{/each}
		</ul>
	</Hideable>
</div>

<style lang="postcss">
	.work-experience {
		margin-block: 1rem;
		padding-left: clamp(0rem, 3vw, 2rem);
	}

	.work-meta {
		display: flex;
		min-width: 0;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.2rem 0.5rem;
		text-align: left;
	}

	.work-meta > * {
		min-width: 0;
	}

	.work-details {
		padding-left: clamp(1.25rem, 4vw, 2rem);
	}

	a {
		text-decoration: underline;
	}

	@media print {
		.work-experience {
			@apply my-1 pl-6;
		}
	}
</style>
