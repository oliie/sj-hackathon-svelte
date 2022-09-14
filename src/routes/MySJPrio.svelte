<script>
  import Achievements from './Achievements.svelte';
  import FunAboard from './FunAboard.svelte';
  import Overview from './Overview.svelte';

  const navs = ['Översikt', 'Öka dina poäng', 'Kul ombord', 'Achievements'];

  let selected = 'Översikt';
</script>

<nav class="mb-4">
  <div class="mt-4">
    <ul class="flex border-b">
      {#each navs as nav}
        <li
          on:click={() => (selected = nav)}
          class="p-4 cursor-pointer transition-all border-b-2 border-transparent {selected ===
          nav
            ? 'border-sjgreen'
            : ''}"
        >
          {nav}
        </li>
      {/each}
    </ul>
  </div>
</nav>

{#if selected === 'Översikt'}
  <Overview />
{:else if selected === 'Öka dina poäng'}
  aa
{:else if selected === 'Kul ombord'}
  <FunAboard />
{:else if selected === 'Achievements'}
  <Achievements />
{/if}
