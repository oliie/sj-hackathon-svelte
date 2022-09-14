<script>
  import Button from '../lib/Button.svelte';

  import Header from '../lib/Header.svelte';
  import List from '../lib/List.svelte';
  import PrioCard from '../lib/PrioCard.svelte';
</script>

<svelte:head><title>Min sida</title></svelte:head>

<div class="container lg:w-2/3">
  <Header />

  <div id="content" class="flex">
    <div id="left" class="flex-grow flex-1 pr-4">
      <PrioCard />
      <Button type="primary">Sök resa</Button>
      <Button type="secondary">Se mina erbjudanden</Button>
    </div>
    <div id="right" class="flex-grow flex-2">
      <List />
    </div>
  </div>
</div>
