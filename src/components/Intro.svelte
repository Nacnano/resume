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

<div class="flex flex-col items-center justify-center print:flex-col text-sm sm:text-base gap-3">
	<h2
		class="flex-none order-first sm:order-none print:order-none text-3xl sm:text-4xl lg:text-5xl print:text-4xl text-center print:pt-0 font-semibold tracking-tight leading-tight"
	>
		{name}
	</h2>

	<div
		class="contact-list w-full print:flex print:flex-row print:flex-wrap print:justify-center print:text-center print:text-xs"
	>
		<p class="contact-location">{location}</p>

		<span class="hidden sm:inline print:inline">•</span>
		<p><a href={`tel:${phone}`}>{phone}</a></p>

		<span class="hidden sm:inline print:inline">•</span>
		<p><a href={`mailto:${email}`}>{email}</a></p>

		<span class="hidden sm:inline print:inline">•</span>
		<p>
			<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer"
				>linkedin.com/in/{linkedin}</a
			>
		</p>

		<span class="hidden sm:inline print:inline">•</span>
		<p>
			<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
				>github.com/{github}</a
			>
		</p>

		<span class="hidden sm:inline print:inline">•</span>
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
	.contact-list {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 0.45rem 1rem;
		font-size: 0.875rem;
		text-align: center;
	}

	.contact-list p,
	.contact-list a {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	a {
		text-decoration: underline;
	}

	section hr {
		@apply mt-0 mb-2;
		border-color: darkgrey;
	}

	@media (min-width: 480px) {
		.contact-list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.contact-location {
			grid-column: 1 / -1;
		}
	}

	@media (min-width: 640px) {
		.contact-list {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 0.25rem 0.45rem;
		}
	}

	@media print {
		.contact-list {
			gap: 0.15rem 0.35rem;
		}
	}
</style>
