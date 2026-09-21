<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let head: string;
	export let school: string;
	export let details: Array<string | { text: string; hide?: boolean }>;
	export let hide: boolean = false;
</script>

<Hideable as="li" bind:hide>
	<div class="education">
		<strong>{head}</strong>, {school}
		{#if Array.isArray(details) && details.length > 0}
			<ul class="education-details text-left list-disc print:pl-6">
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
		{/if}
	</div>
</Hideable>

<style lang="postcss">
	.education {
		@apply my-4;
	}

	.education-details {
		padding-left: clamp(1.25rem, 4vw, 2rem);
	}

	@media print {
		.education {
			@apply my-1;
		}
	}
</style>
