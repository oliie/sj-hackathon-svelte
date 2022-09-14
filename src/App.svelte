<script>
  import { onMount } from 'svelte';
  import MyPage from './routes/MyPage.svelte';
  import MySjPrio from './routes/MySJPrio.svelte';
  import { router } from './stores';

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

  let activeRoute = 'min-sida';
</script>

<main class="flex justify-center pt-10 px-4 w-full">
  <button on:click={() => router.goTo('mitt-sj-prio')}>Min sida</button>
  {#if $router === 'min-sida'}
    <MyPage />
  {:else if $router === 'mitt-sj-prio'}
    <MySjPrio />
  {/if}
</main>
