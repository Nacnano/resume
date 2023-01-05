<script lang="ts">
  import Tailwind from "./Tailwind.svelte"
  import Intro from "./components/Intro.svelte"
  import Work from "./components/Work.svelte"
  import Kofi from "./Kofi.svelte"
  import HideToggle from "./components/HideToggle.svelte"
  import {
    educations,
    fullVersionLink,
    others,
    introData,
    projects,
    sourceLink,
    technologies,
    workExperiences,
    achievements,
  } from "./data"

  let editMode = false

  function toggleMode() {
    editMode = !editMode
  }
</script>

<!-- Remove this is you does not want Kofi widget on your site -->
{#if introData.github == "narze"}
  <Kofi name={introData.github} />
{/if}

<Tailwind />

<header
  class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen"
>
  <h1 class="text-4xl">Resumette</h1>
  <h3>
    <button on:click={toggleMode} class="underline text-lg"
      >{editMode ? "[View]" : "[Edit]"}</button
    >
    <button on:click={() => window.print()} class="underline text-lg"
      >[Print]</button
    >
  </h3>
  <p>
    Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS
    class will be hidden on print.
  </p>
  <p>
    You can toggle <button on:click={toggleMode} class="underline"
      >[Edit Mode]</button
    > to hide some sections before printing.
  </p>
  (<a href={sourceLink} target="_blank" rel="noopener">Source</a>)
</header>

<main
  class="text-center flex flex-col p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl {editMode
    ? 'edit-mode'
    : 'display-mode'}"
>
  <Intro {...introData} />

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">
      Technologies and Languages
    </h2>
    <hr />
    <ul class="text-left list-disc pl-8">
      {#each technologies as tech}
        <li>
          <HideToggle />
          <span class="w-48 inline-block">{tech.section}</span>
          <span>{tech.details}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Educations</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each educations as edu}
        <li>
          <HideToggle />
          <strong>{edu.head}</strong>, {edu.details}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Work Experience</h2>
    <hr />

    {#each workExperiences as exp}
      <Work {...exp} />
    {/each}
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Achievements</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
    {#each achievements as ach}
    <li>
      <HideToggle />
      <strong>{ach.name}</strong>
      - {ach.details}
    </li>
    {/each}
  </ul>
    
  </section>

  <section>
    <HideToggle />
    <div class="flex items-center">
    <h2 class="text-2xl print:text-4xl uppercase text-left mr-1">Projects</h2>
    <h3 class="text-1xl print:text-2xl uppoercase text-left items-center"> (Available on GitHub) </h3>
    </div>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each projects as project}
        <li>
          <HideToggle />
          <strong><a href="https://{project.url}" target="_blank" rel="noreferrer">{project.name}</a></strong>
          - {project.details}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <HideToggle />
    <h2 class="text-2xl print:text-4xl uppercase text-left">Others</h2>
    <hr />

    <ul class="text-left list-disc pl-8">
      {#each others as other}
        <li>
          <HideToggle />
          {other}
        </li>
      {/each}
    </ul>
  </section>

  <!-- <note style="font-size:xx-large">
      Add more soon...
    </note> -->

  <!-- <footer class="print-only print:hidden">
    (See <a href={fullVersionLink} target="_blank" rel="noopener"
      >full version</a
    >
    or <a href={sourceLink} target="_blank" rel="noopener">source</a>)
  </footer> -->
</main>

<style>
  @page { 
    size: auto;  
    margin: 5mm;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  main {
    overflow-x: hidden;
  }

  a {
    color: rgb(85, 102, 255);
    /* text-decoration: underline; */
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

  :global(main.display-mode .hide-toggle) {
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
      margin: 0 0;
      padding: 0;
      size: auto;  
    }
  }
</style>
