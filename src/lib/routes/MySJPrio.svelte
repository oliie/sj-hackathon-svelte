<script>
  import AcheivementCard from '../AcheivementCard.svelte';
    import Button from '../Button.svelte';
    import { achievements } from '../stores/achievements';

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
  {#each $achievements as achievement}
    <AcheivementCard
      {...achievement}
  
      progress={achievement.points / achievement.pointsPerLevel * 100}
    />
  {/each}
  
  <Button on:click={
    () => {
      achievements.updateAchievement({ id: 'coffee', points: 1})
      console.log($achievements);
    }
    
  }>Köp kaffe</Button>
</div>




    <!-- <AcheivementCard
      icon="🪙"
      name="Priopoäng"
      description="Spendera priopoäng och öka nivån!"
      currentLevel={1}
      maxLevels={3}
      progress={57}
    /> -->
    <!-- <AcheivementCard
      icon="🚂"
      name="Första resan"
      description="Åk din första resa med SJ"
      currentLevel={1}
      maxLevels={1}
      progress={100}
    />
    <AcheivementCard
      icon="🚅"
      name="Res med SJ"
      description="Varje resa ökar din nivå och ger priopoäng"
      currentLevel={2}
      maxLevels={4}
      progress={60}
    /> -->