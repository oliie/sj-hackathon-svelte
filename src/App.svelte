<script>
  import { navStore } from './lib/stores/nav';
  import Nav from './lib/Nav.svelte';
  import MyPage from './routes/MyPage.svelte';
</script>

<Nav />

<main class="container mx-auto px-4 py-20 w-2/3">
  {#if $navStore === 'Köp'}
    köp
  {:else if $navStore === 'Min Sida'}
    <MyPage />
  {/if}
</main>
