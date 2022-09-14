<script>
  import AcheivementCard from '../AcheivementCard.svelte';

  const navs = ['Översikt', 'Händelser', 'Kul ombord', 'Achievements'];

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

<div class="grid grid-cols-2 gap-2">
  <AcheivementCard
    icon="🪙"
    name="Priopoäng"
    description="Spendera priopoäng och öka nivån!"
    level={1}
    levels={3}
    progress={57}
  />
  <AcheivementCard
    icon="☕"
    name="Kaffe"
    description="Köp en massa bönjuice för att vakna till liv"
    level={2}
    levels={3}
    progress={20}
  />
  <AcheivementCard
    icon="🚂"
    name="Första resan"
    description="Åk din första resa med SJ"
    level={1}
    levels={1}
    progress={100}
  />
  <AcheivementCard
    icon="🚅"
    name="Res med SJ"
    description="Varje resa ökar din nivå och ger priopoäng"
    level={2}
    levels={4}
    progress={60}
  />
</div>
