<script lang="ts">
	import { onMount } from 'svelte';
	import type { IProfileResp } from '../types';
	import Hideable from './Hideable.svelte';
	import Intro from './Intro.svelte';
	import Work from './Work.svelte';
	import Education from './Education.svelte';

	let profile: IProfileResp;

	$: dataLink = `${sourceLink}/blob/main/static/data/profile.json`;
	$: ({
		intro = {} as IProfileResp['intro'],
		objective = '',
		projects = [],
		technologies = [],
		workExperiences = [],
		educations = [],
		achievements = [],
		others = [],
		resumeUrl: { sourceLink = '', fullVersionLink = '' } = {}
	} = profile || {});

	onMount(async () => (profile = await fetchResumeProfile()));

	async function fetchResumeProfile() {
		const resp = await fetch('/data/profile.json');
		return await resp.json();
	}
</script>

<header
	class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen"
>
	<h1 class="text-4xl">Resumette</h1>
	<h3>
		<button on:click={() => window.print()} class="underline text-lg"
			>[Print]</button
		>
	</h3>
	<p>
		Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS
		class will be hidden on print.
	</p>
	<p>
		You can click at any sections or lines hide some information before
		printing.
	</p>
	<a href={sourceLink} target="_blank" rel="noopener">[Source]</a>
	<a href={dataLink} target="_blank" rel="noopener">[Data]</a>
</header>

<main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
	<Intro {...intro} />

	<section>
		<Hideable>
			<hr />
			{objective}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Education</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each educations as edu}
					<Hideable>
						<Education {...edu} />
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">
				Work Experience
			</h2>
			<hr />

			{#each workExperiences as exp}
				<Hideable hide={exp.hide}>
					<Work {...exp} />
				</Hideable>
			{/each}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">
				Technologies and Languages
			</h2>
			<hr />
			<ul class="text-left list-disc pl-8">
				{#each technologies as tech}
					<Hideable hide={tech.hide}>
						<li>
							<span class="w-28 inline-block">{tech.section}</span>
							<span>{tech.details}</span>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Project</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each projects as project}
					<Hideable hide={project.hide}>
						<li>
							<strong>{project.name}</strong>
							- {project.details}
							<a href="https://{project.url}" target="_blank" rel="noreferrer"
								><strong>{project.url}</strong></a
							>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Achievement</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each achievements as achievement}
					<Hideable hide={achievement.hide}>
						<li>
							<strong>{achievement.name}</strong>
							- {achievement.details}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Other</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each others as other}
					<Hideable hide={other.hide}>
						<li>
							{other.detail}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>
</main>

<style lang="postcss">
	main {
		overflow-x: hidden;
	}

	a {
		text-decoration: underline;
	}

	section {
		@apply my-4;
	}

	section h2 {
		@apply font-semibold;
	}

	section hr {
		@apply mt-0 mb-2;
		border-color: darkgrey;
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		* {
			@apply text-xs;
		}

		:global(.print-only) {
			display: inherit;
		}

		:global(.web-only) {
			display: none;
		}

		ul {
			@apply pl-6;
		}

		section {
			@apply my-2;
		}

		section hr {
			@apply mt-0 mb-1;
		}

		main {
			margin: 1;
		}
	}
</style>
