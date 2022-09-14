<script>
  export let type = 'primary';
</script>

{#if type === 'primary'}
  <button on:click class="btn bg-sjgreen text-white w-full mt-2">
    <slot />
  </button>
{:else if type === 'secondary'}
  <button on:click class="btn bg-white text-sjgreen w-full mt-2">
    <slot />
  </button>
{/if}