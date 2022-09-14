<script>
  import { navStore } from './stores/nav';

  let navs = ['Köp', 'Min Sida', 'Mitt SJ Prio'];

  const handleNav = (nav) => {
    navStore.goTo(nav);
  };
</script>

<nav>
  <ul class="flex border-b justify-center">
    {#each navs as nav}
      <li
        on:click={() => handleNav(nav)}
        class="p-4 cursor-pointer border border-b-2 border-transparent hover:bg-slate-50 hover:text-black transition-all {nav ===
        $navStore
          ? 'border-b-sjgreen border-b-2 bg-slate-50'
          : ''}"
      >
        {nav}
      </li>
    {/each}
  </ul>
</nav>
