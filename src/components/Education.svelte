<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let head: string;
	export let school: string;
	export let details: string[] | undefined;
	export let hide: boolean | undefined;
</script>

<div class="education">
	<Hideable bind:hide>
		<strong>{head}</strong>, {school}
		{#if Array.isArray(details)}
			<ul class="text-left list-disc pl-8 print:pl-6">
				{#each details as detail}
					<Hideable>
						<li>{detail}</li>
					</Hideable>
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
