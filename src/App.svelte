<script>
  import { onMount } from 'svelte';
  import Counter from './lib/Counter.svelte';
  import { numberWithSpaces } from './lib/helpers';
  import ServiceCard from './lib/ServiceCard.svelte';

  let apiurl =
    '/v19/rest/discounts/EnjaY3L29_UNDXENig_xdPZ2DWFmMgACQysDcxMI0xTCDAtlZoJDADK4CPg/prices/2022-09-12';

  // Reactive statement i Svelte. Kan jämföras med en enklare variant av useEffect
  $: discountServiceGroups = [];
  $: console.log(discountServiceGroups);

  onMount(async () => {
    const data = await fetch(apiurl);
    const results = await data.json();

    discountServiceGroups = results.discountServiceGroups;
  });
</script>

<main class="flex justify-center pt-10 px-4 w-full">
  <div class="container lg:w-1/3">
    <h1 class="text-sjgreen text-9xl text-center">SJ ❤️ Svelte</h1>

    <div class="mt-10 text-center">
      <Counter />
    </div>

    <div class="mt-10">
      {#each discountServiceGroups as group}
        {#each group.discountServices as ds}
          <ServiceCard
            serviceName={ds.service.name}
            price={ds.price.amount}
            description={ds.serviceHelpText}
          />
        {/each}
      {/each}
    </div>
  </div>
</main>
