<script>
  import { navStore } from './lib/stores/nav';
  import Nav from './lib/Nav.svelte';
</script>

<Nav />

<main class="container mx-auto px-4 py-20 w-2/3">
  {#if $navStore === 'Köp'}
    köp
  {:else if $navStore === 'Min Sida'}
    <h1 class="text-4xl font-bold">Min sida</h1>
  {/if}
</main>
