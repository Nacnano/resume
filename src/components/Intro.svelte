<script lang="ts">
	export let name: string = 'Chotpisit Adunsehawat';
	export let nickname: string = 'Nac';
	export let phone: string = '(+66)96-189-6046';
	export let email: string = 'chotpisit.adu@gmail.com';
	export let github: string = 'nacnano';
	export let linkedin: string = 'chotpisit-adunsehawat-b68912210';
	export let location: string = 'Bangkok, Thailand';
	export let website: string = 'nacnano.dev';
</script>

<div class="flex flex-wrap flex-col sm:flex-row print:flex-row text-sm sm:text-base">
	<div class="flex-1 text-left sm:py-4 w-48">
		<p><a href={`tel:${phone}`}>{phone}</a></p>
		<p><a href={`mailto:${email}`}>{email}</a></p>
		<p>{location}</p>
	</div>

	<h2
		class="flex-none order-first sm:order-none print:order-none text-4xl sm:text-2xl md:text-3xl lg:text-6xl text-center p-4 print:pt-0"
	>
		{name}
		<span class="block -mt-1 text-base lg:text-lg">({nickname})</span>
	</h2>

	<div class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base">
		<p>
			<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
				>github.com/{github}</a
			>
		</p>
		<p>
			<a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
		</p>
		<p>
			<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">Linkedin</a>
		</p>
	</div>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>
