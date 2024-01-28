<script lang="ts">
	export let hide = false;

	const toggleHide = () => (hide = !hide);
</script>

<div class="group relative" class:web-only={hide} class:text-gray-300={hide} role="button">
	<button
		on:click|stopPropagation={toggleHide}
		class="select-none cursor-pointer"
		class:cursor-copy={hide}
		aria-label="Hide Content"
	>
		<slot />
	</button>
</div>
