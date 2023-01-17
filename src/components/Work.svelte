<script lang="ts">
  import HideToggle from "./HideToggle.svelte"

  export let position: string = ""
  export let company: string = ""
  export let url: string = ""
  export let years: string[] = []
  export let details: string[] = []
</script>

<div class="work-experience">
  <HideToggle />
  <div class="flex flex-row font-bold mb-2 print:mb-1 items-baseline">
    <span class="pr-3 text-lg ">{position}, </span>
    <span class="pr-3">
      <a href={url} target="_blank" rel="noreferrer">{company}</a>
    </span>
    <span class="">{years.join(" - ")}</span>
  </div>
  <ul class="text-left list-disc pl-8 print:pl-6">
    {#each details as detail}
      <li>
        <HideToggle />
        {detail}
      </li>
    {/each}
  </ul>
</div>

<style>
  .work-experience {
    @apply my-4;
  }

  a {
    color: rgb(85, 102, 255);
    /* text-decoration: underline; */
  }

  @media print {
    .work-experience {
      @apply my-1;
    }
  }
</style>
