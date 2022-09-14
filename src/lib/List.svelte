<script>
  import ListItem from './ListItem.svelte';

  const listItems = [
    {
      id: 1,
      title: 'Mitt SJ Prio',
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

<ul class="flex flex-col">
  {#each listItems as item, i}
    <ListItem isLast={listItems.length - 1 === i}>{item.title}</ListItem>
  {/each}
</ul>
