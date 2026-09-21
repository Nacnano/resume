<script lang="ts">
	export let hide = false;

	const toggleHide = () => (hide = !hide);
</script>

<span class="group relative inline-block" class:web-only={hide} class:text-gray-500={hide}>
	<span
		on:click|stopPropagation={toggleHide}
		on:keydown|stopPropagation={(e) => (e.key === 'Enter' || e.key === ' ') && toggleHide()}
		role="button"
		tabindex="0"
		class="inline-hideable cursor-pointer"
		class:cursor-copy={hide}
		aria-pressed={hide}
		aria-label={hide ? 'Include item in printed resume' : 'Exclude item from printed resume'}
	>
		<slot />
	</span>

	<style lang="postcss">
		.inline-hideable {
			border-radius: 0.125rem;
		}

		@media (hover: hover) {
			.inline-hideable:hover {
				background: rgb(22 163 74 / 7%);
			}
		}

		@media (pointer: coarse) {
			.inline-hideable {
				display: inline-flex;
				min-height: 44px;
				align-items: center;
			}
		}

		@media print {
			.inline-hideable {
				min-height: 0;
			}
		}
	</style>
</span>
