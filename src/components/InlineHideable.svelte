<script lang="ts">
	export let hide = false;

	const toggleHide = () => (hide = !hide);
</script>

<span
	class="group relative inline-block"
	class:web-only={hide}
	class:text-gray-300={hide}
	role="button"
>
	<span
		on:click|stopPropagation={toggleHide}
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleHide()}
		role="button"
		tabindex="0"
		class="cursor-pointer"
		class:cursor-copy={hide}
		aria-label="Hide Content"
	>
		<slot />
	</span>
</span>
