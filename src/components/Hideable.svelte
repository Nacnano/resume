<script lang="ts">
	export let hide = false;
	export let as: 'div' | 'li' = 'div';

	const toggleHide = () => (hide = !hide);
</script>

<svelte:element this={as} class="hideable" class:web-only={hide} class:text-gray-500={hide}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click|stopPropagation={toggleHide}
		class="hideable-content cursor-pointer"
		class:cursor-copy={hide}
	>
		<slot />
	</div>

	<button
		type="button"
		on:click|stopPropagation={toggleHide}
		class="visibility-toggle web-only"
		aria-pressed={hide}
		aria-label={hide ? 'Include content in printed resume' : 'Exclude content from printed resume'}
		title={hide ? 'Include in printed resume' : 'Exclude from printed resume'}
	>
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M2.25 12s3.5-6 9.75-6 9.75 6 9.75 6-3.5 6-9.75 6S2.25 12 2.25 12Z" />
			<circle cx="12" cy="12" r="2.75" />
			{#if hide}
				<path d="m4 4 16 16" />
			{/if}
		</svg>
	</button>
</svelte:element>

<style lang="postcss">
	.hideable {
		position: relative;
	}

	.hideable-content {
		display: block;
		border-radius: 0.125rem;
	}

	.visibility-toggle {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-grid;
		width: 2rem;
		height: 2rem;
		place-items: center;
		border: 1px solid #d1d5db;
		border-radius: 9999px;
		color: #374151;
		background: #ffffff;
		box-shadow: 0 5px 14px -8px rgb(17 24 39 / 55%);
		opacity: 0;
		pointer-events: none;
		transition:
			opacity 140ms cubic-bezier(0.16, 1, 0.3, 1),
			background-color 140ms cubic-bezier(0.16, 1, 0.3, 1);
		z-index: 1;
	}

	.visibility-toggle svg {
		width: 1rem;
		height: 1rem;
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.75;
	}

	.visibility-toggle:focus {
		opacity: 1;
		pointer-events: auto;
	}

	.visibility-toggle:active {
		background: #dcfce7;
	}

	@media (hover: hover) {
		.hideable-content:hover:not(:has(.hideable-content:hover)) {
			background: rgb(22 163 74 / 7%);
		}

		.hideable-content:hover:not(:has(.hideable-content:hover)) + .visibility-toggle,
		.visibility-toggle:hover {
			opacity: 1;
			pointer-events: auto;
		}
	}

	@media (min-width: 768px) {
		.visibility-toggle {
			right: calc(100% + 0.25rem);
		}
	}

	@media (pointer: coarse) {
		.hideable-content {
			display: grid;
			min-height: 44px;
			align-content: center;
		}

		.visibility-toggle {
			width: 44px;
			height: 44px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.visibility-toggle {
			transition: none;
		}
	}

	@media print {
		.hideable-content {
			display: block;
			min-height: 0;
		}
	}
</style>
