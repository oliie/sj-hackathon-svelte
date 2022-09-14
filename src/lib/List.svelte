<script>
  import ListItem from './ListItem.svelte';

  const listItems = [
    {
      id: 1,
      title: 'Mitt SJ Prio',
      path: 'Mitt SJ Prio',
    },
    {
      id: 2,
      title: 'Poängkonto',
    },
    {
      title: 'Mina resor',
    },
    {
      title: 'Kontokort',
    },
    {
      title: 'Personuppgifter',
    },
    {
      title: 'Logga ut',
    },
  ];
</script>

<!-- <ul class="flex flex-col"> -->
<ul class="menu bg-base-100 w-full border-b">
  {#each listItems as item, i}
    <ListItem path={item.path}
      >{item.title}</ListItem
    >
  {/each}
</ul>
