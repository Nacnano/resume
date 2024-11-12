<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let name: string;
	// export let nickname: string;
	export let phone: string;
	export let email: string;
	export let github: string;
	export let linkedin: string;
	export let location: string;
	export let website: string;
	export let objective: string;
</script>

<div class="flex flex-col items-center justify-center print:flex-col text-sm sm:text-base gap-2">
	<h2
		class="flex-none order-first sm:order-none print:order-none text-4xl sm:text-2xl md:text-3xl lg:text-6xl text-centerprint:pt-0"
	>
		{name}
	</h2>

	<div
		class="w-full flex flex-wrap justify-center items-center gap-1 text-center print:text-center print:text-xs text-xs sm:text-sm"
	>
		<p>{location}</p>

		•
		<p><a href={`tel:${phone}`}>{phone}</a></p>

		•
		<p><a href={`mailto:${email}`}>{email}</a></p>

		•
		<p>
			<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer"
				>linkedin.com/in/{linkedin}</a
			>
		</p>

		•
		<p>
			<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
				>github.com/{github}</a
			>
		</p>

		•
		<p>
			<a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
		</p>
	</div>

	<section>
		<Hideable hide={true}>
			<hr />
			<p class="print:text-xs">
				{objective}
			</p>
		</Hideable>
	</section>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}

	section hr {
		@apply mt-0 mb-2;
		border-color: darkgrey;
	}
</style>
