<script lang="ts">
	export let hide = false;

	const toggleHide = () => (hide = !hide);
</script>

<span
	class="inline-hideable-wrapper group relative inline-block"
	class:web-only={hide}
	class:excluded={hide}
>
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
			transition:
				opacity 140ms cubic-bezier(0.16, 1, 0.3, 1),
				color 140ms cubic-bezier(0.16, 1, 0.3, 1);
		}

		.inline-hideable-wrapper.excluded > .inline-hideable {
			color: #6b7280;
			opacity: 0.42;
		}

		.inline-hideable-wrapper.excluded > .inline-hideable:focus {
			opacity: 0.78;
		}

		@media (hover: hover) {
			.inline-hideable:hover {
				background: rgb(22 163 74 / 4%);
			}

			.inline-hideable-wrapper.excluded > .inline-hideable:hover {
				opacity: 0.78;
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

		@media (prefers-reduced-motion: reduce) {
			.inline-hideable {
				transition: none;
			}
		}
	</style>
</span>
