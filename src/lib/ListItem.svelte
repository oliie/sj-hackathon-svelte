<script>
  import { navStore } from './stores/nav';

  export let path = '';
</script>

<li
  
  on:click={() => {
    path && navStore.goTo(path);
  }}
>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a class="border-t flex justify-between flex-row py-6">
    <span><slot /></span>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    focusable="false"
    aria-hidden="true"
    ><path d="M0 0h24v24H0z" style="fill: none;" /><path
    d="M10 17a1 1 0 0 1-.707-1.707L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A.997.997 0 0 1 10 17Z"
    /></svg
    >
  </a>
</li>
