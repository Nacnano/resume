<script lang="ts">
  export let name: string = "Foo"
  export let nickname: string = ""
  export let phone: string = ""
  export let email: string = ""
  export let github: string = ""
  export let linkedin: string = ""
  export let location: string = ""
  export let website: string = ""
</script>

<div
  class="flex flex-wrap flex-col sm:flex-row print:flex-row text-sm sm:text-base"
>
  <div class="flex-1 text-left sm:py-4 w-48">
    <p>{phone}</p>
    <p>{email}</p>
    <p>{location}</p>
    
  </div>
    

  <h2
    class="flex-none order-first sm:order-none print:order-none text-center p-4 print:pt-0"
  >
    <span class="text-3xl sm:text-2xl md:text-3xl lg:text-6xl"> {name} </span>
    <span class="block -mt-1 text-base text-1xl sm:text-1xl md:text-2xl lg:text-3xl">({nickname})</span>
  </h2>

  <div
    class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base"
  >
  <p>
      <a href={`https://${website}`} target="_blank" rel="noreferrer"
        >{website}</a
      >
    </p>
    <p>
      <a
        href={`https://linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noreferrer">LinkedIn</a
      >
    </p>
    <p>
      <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
        >GitHub</a
      >
    </p>

  </div>
</div>

<style>
  a {
    font-weight: 500;
    color: rgb(30, 42, 148);
    /* text-decoration: underline; */
  }
</style>
