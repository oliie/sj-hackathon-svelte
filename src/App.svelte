<script>
  import { navStore } from './lib/stores/nav';
  import Nav from './lib/Nav.svelte';
  import MyPage from './routes/MyPage.svelte';
  import Buy from './routes/Buy.svelte';
  import MySjPrio from './routes/MySJPrio.svelte';
  import { user } from './lib/stores/user';
  import { achievements } from './lib/stores/achievements';

  $: () => {
    // Check if achievement in achievements hasLeveledUp
    console.log('hej');
    achievements.update((achievements) => {
      achievements
        .filter((achievement) => achievement.hasLeveledUp)
        .forEach((achievement) => {
          console.log('hasLeveledUp');
          // If it has, set hasLeveledUp to false
          achievement.hasLeveledUp = false;
          // And add the new level to the user
          user.update((user) => ({
            ...user,
            xp: user.xp + achievement.xpReward,
          }));
        });

      return achievements;
    });
  };
</script>

<Nav />

<main class="container mx-auto px-4 py-8 w-full md:w-2/3">
  <div>
    <p>Nivå 7: Konduktör</p>
    <progress
      class="progress w-full progress-success"
      value={$user.xp}
      max={$user.nextLevelXp}
    />
    <div class="text-right">SJ Priopoäng: <b>7 640p</b></div>
  </div>

  {#if $navStore === 'Köp'}
    <h1 class="text-4xl font-bold">Köp</h1>
    <Buy />
  {:else if $navStore === 'Min Sida'}
    <h1 class="text-4xl font-bold">Min sida</h1>
    <MyPage />
  {:else if $navStore === 'Mitt SJ Prio'}
    <h1 class="text-4xl font-bold mt-4">Mitt SJ Prio</h1>
    <MySjPrio />
  {/if}
</main>
