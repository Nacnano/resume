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
			<h1>Choose what to print</h1>
			<p>Faded items won’t appear in the PDF. Tap any line to change it.</p>
		</div>

		<nav class="editor-header__actions" aria-label="Resume actions">
			<button type="button" on:click={() => window.print()} class="print-button"
				>Print or save PDF</button
			>
			<a href={intro.resumeUrl.sourceLink} target="_blank" rel="noopener">View source</a>
			<a href={intro.resumeUrl.dataLink} target="_blank" rel="noopener">Resume data</a>
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
		color: #292524;
		background: #fafaf9;
		border-bottom: 1px solid #e7e5e4;
		padding: max(0.625rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) 0.625rem
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
		display: flex;
		min-width: 0;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 0.25rem 0.75rem;
		text-align: left;
	}

	.editor-header h1 {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.35;
		letter-spacing: -0.01em;
	}

	.editor-header p {
		max-width: 60ch;
		color: #78716c;
		font-size: 0.8125rem;
		line-height: 1.45;
	}

	.editor-header__actions {
		display: flex;
		flex: none;
		align-items: center;
		gap: 0.25rem;
	}

	.editor-header__actions a,
	.print-button {
		display: inline-flex;
		min-height: 44px;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		padding: 0.6rem 0.75rem;
		font-weight: 500;
		line-height: 1;
		text-decoration: none;
	}

	.editor-header__actions a {
		color: #57534e;
		text-decoration: underline;
		text-decoration-color: #d6d3d1;
		text-underline-offset: 0.2em;
	}

	.editor-header__actions a:hover {
		color: #1c1917;
		background: #f5f5f4;
		text-decoration-color: #a8a29e;
	}

	.print-button {
		color: #ffffff;
		background: #292524;
	}

	.print-button:hover {
		background: #44403c;
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
			gap: 0.625rem;
		}

		.editor-header__copy {
			display: block;
		}

		.editor-header p {
			margin-top: 0.125rem;
		}

		.editor-header__actions {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			width: 100%;
			gap: 0.25rem 0.5rem;
		}

		.print-button {
			grid-column: 1 / -1;
			width: 100%;
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
