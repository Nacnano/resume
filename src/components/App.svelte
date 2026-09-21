<script lang="ts">
	import {
		intro,
		educations,
		experiences,
		achievements,
		projects,
		technologies,
		others
	} from '../data';

	import Hideable from './Hideable.svelte';
	import InlineHideable from './InlineHideable.svelte';
	import Intro from './Intro.svelte';
	import Work from './Work.svelte';
	import Education from './Education.svelte';
</script>

<header class="editor-header web-only">
	<div class="editor-header__inner">
		<div class="editor-header__copy">
			<h1>Resume editor</h1>
			<p>Tap any section or line to exclude it, then print your tailored resume.</p>
		</div>

		<nav class="editor-header__actions" aria-label="Resume actions">
			<button type="button" on:click={() => window.print()} class="print-button"
				>Print resume</button
			>
			<a href={intro.resumeUrl.sourceLink} target="_blank" rel="noopener">Source</a>
			<a href={intro.resumeUrl.dataLink} target="_blank" rel="noopener">Data</a>
		</nav>
	</div>
</header>

<main class="resume-sheet text-center">
	<section>
		<Intro {...intro} />
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-xl uppercase text-left">Education</h2>
			<hr />

			<ul class="resume-list text-left list-disc">
				{#each educations as education}
					<Education {...education} />
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-xl uppercase text-left">Work Experience</h2>
			<hr />

			{#each experiences as experience}
				<!-- NOTE: The Work component already have Hideable inside -->
				<Work {...experience} />
			{/each}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-xl uppercase text-left">Technologies and Languages</h2>
			<hr />
			<ul class="resume-list text-left list-disc">
				{#each technologies as tech}
					<Hideable as="li" hide={tech.hide}>
						<div class="flex flex-col sm:flex-row items-start">
							<span class="w-full sm:w-28 font-bold mb-1 sm:mb-0">{tech.section}</span>
							<span class="flex-1 text-left">
								{#each tech.details as detail, i (detail.text)}
									<InlineHideable hide={detail.hide}
										><span class="inline-block"
											>{detail.text}{i < tech.details.length - 1 ? ',\u00A0\u00A0' : ''}</span
										>
									</InlineHideable>
								{/each}
							</span>
						</div>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-xl uppercase text-left">Project</h2>
			<hr />

			<ul class="resume-list text-left list-disc">
				{#each projects as project}
					<Hideable as="li" hide={project.hide}>
						<strong>{project.name}</strong>
						- {project.details}
						<!-- <a href={project.url} target="_blank" rel="noreferrer"
								><strong>{project.url}</strong></a
							> -->
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-xl uppercase text-left">Achievement</h2>
			<hr />

			<ul class="resume-list text-left list-disc">
				{#each achievements as achievement}
					<Hideable as="li" hide={achievement.hide}>
						<strong>{achievement.name}</strong>
						- {achievement.details}
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-xl uppercase text-left">Other</h2>
			<hr />

			<ul class="resume-list text-left list-disc">
				{#each others as other}
					<Hideable as="li" hide={other.hide}>
						{other.detail}
						{#if other.details && other.details.length > 0}
							<ul class="nested-list list-disc">
								{#each other.details as subDetail}
									{#if typeof subDetail === 'string'}
										<li>{subDetail}</li>
									{:else}
										<Hideable as="li" hide={subDetail.hide}>
											{subDetail.text}
										</Hideable>
									{/if}
								{/each}
							</ul>
						{/if}
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>
</main>

<style lang="postcss">
	.editor-header {
		color: white;
		background: #15803d;
		padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) 1rem
			max(1rem, env(safe-area-inset-left));
	}

	.editor-header__inner {
		display: flex;
		width: min(100%, 64rem);
		margin-inline: auto;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.editor-header__copy {
		min-width: 0;
		text-align: left;
	}

	.editor-header h1 {
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.025em;
	}

	.editor-header p {
		max-width: 58ch;
		margin-top: 0.35rem;
		color: #f0fdf4;
		font-size: 0.9375rem;
		line-height: 1.45;
	}

	.editor-header__actions {
		display: flex;
		flex: none;
		align-items: center;
		gap: 0.5rem;
	}

	.editor-header__actions a,
	.print-button {
		display: inline-flex;
		min-height: 44px;
		align-items: center;
		justify-content: center;
		border-radius: 0.375rem;
		padding: 0.65rem 0.8rem;
		font-weight: 600;
		line-height: 1;
		text-decoration: none;
	}

	.editor-header__actions a {
		color: white;
	}

	.editor-header__actions a:hover {
		background: rgb(255 255 255 / 12%);
	}

	.print-button {
		color: #14532d;
		background: white;
	}

	.print-button:hover {
		background: #f0fdf4;
	}

	.resume-sheet {
		width: min(100%, 64rem);
		margin: 0 auto;
		padding: clamp(1.25rem, 4vw, 3rem) clamp(1rem, 5vw, 3.5rem);
		background: white;
		overflow-wrap: anywhere;
	}

	a {
		text-decoration: underline;
	}

	section {
		margin-block: clamp(1.25rem, 3vw, 2rem);
	}

	section h2 {
		@apply font-semibold;
	}

	section hr {
		@apply mt-0 mb-3;
		border-color: darkgrey;
	}

	.resume-list {
		padding-left: clamp(1.25rem, 4vw, 2rem);
	}

	.nested-list {
		padding-left: clamp(1.125rem, 4vw, 1.5rem);
	}

	@media (min-width: 640px) {
		.resume-sheet {
			margin-block: 1.5rem;
			border: 1px solid #e5e7eb;
			box-shadow: 0 18px 45px -28px rgb(17 24 39 / 35%);
		}
	}

	@media (max-width: 767px) {
		.editor-header__inner {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.9rem;
		}

		.editor-header__actions {
			width: 100%;
		}

		.print-button {
			flex: 1;
		}

		.editor-header__actions a {
			padding-inline: 0.65rem;
		}

		section h2 {
			font-size: 1.25rem;
			line-height: 1.2;
		}
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		:global(body) {
			@apply text-sm;
		}

		a {
			text-decoration: none !important;
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

		.resume-sheet {
			width: auto;
			margin: 0;
			padding: 0;
			border: 0;
			box-shadow: none;
			overflow-wrap: normal;
		}
	}
</style>
