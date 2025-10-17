<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let head: string;
	export let school: string;
	export let details: Array<string | { text: string; hide?: boolean }>;
	export let hide: boolean = false;
</script>

<div class="education">
	<Hideable bind:hide>
		<strong>{head}</strong>, {school}
		{#if Array.isArray(details) && details.length > 0}
			<ul class="text-left list-disc pl-8 print:pl-6">
				{#each details as detail}
					{#if typeof detail === 'string'}
						<Hideable>
							<li>{detail}</li>
						</Hideable>
					{:else}
						<Hideable hide={detail.hide}>
							<li>{detail.text}</li>
						</Hideable>
					{/if}
				{/each}
			</ul>
		{/if}
	</Hideable>
</div>

<style lang="postcss">
	.education {
		@apply my-4;
	}

	@media print {
		.education {
			@apply my-1;
		}
	}
</style>
