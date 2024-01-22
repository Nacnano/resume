<script lang="ts">
	export let name: string = 'Chotpisit Adunsehawat';
	export let phone: string = '(+66)96-189-6046';
	export let email: string = 'chotpisit.adu@gmail.com';
	export let github: string = 'nacnano';
	export let linkedin: string = 'chotpisit-adunsehawat';
	export let location: string = 'Bangkok, Thailand';
	export let website: string = 'nacnano.dev';
	export let objective: string = '';
</script>

<div class="flex flex-col items-center justify-center print:flex-col text-sm sm:text-base gap-2">
	<h2
		class="flex-none order-first sm:order-none print:order-none text-4xl sm:text-2xl md:text-3xl lg:text-6xl text-centerprint:pt-0"
	>
		{name}
	</h2>

	<div
		class="w-full flex flex-wrap justify-center items-center gap-1 text-center print:text-center text-xs sm:text-sm"
	>
		<p>{location}</p>
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
		•
		<p>
			<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">Linkedin</a>
		</p>
		•
		<p><a href={`tel:${phone}`}>{phone}</a></p>
		•
		<p><a href={`mailto:${email}`}>{email}</a></p>
	</div>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>
