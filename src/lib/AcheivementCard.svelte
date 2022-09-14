<script>
  export let name = '';
  export let description = '';
  export let level = 0;
  export let levels = 1;
  export let progress = 0;
  export let icon = '';
</script>

<div
  class="rounded-xl border border-slate-300 p-4 bg-slate-100 {level === levels
    ? 'bg-gradient-to-br from-amber-300 to-amber-500"'
    : ''}"
>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <ul class="flex">
        {#each Array(levels) as n, i}
          <li class="text-xl {i >= level ? 'grayscale' : ''}">{icon}</li>
        {/each}
      </ul>
    </div>
    <div class="text-right text-xl text-slate-500">{name}</div>
  </div>
  <progress
    class="progress w-full progress-success"
    value={progress}
    max={100}
  />
  <p class="text-slate-600 mt-4">
    {description}
  </p>
  <div class="text-right text-sm text-slate-400 mt-4">
    Nästa nivå: <b>{100 - progress} XP</b>
  </div>
</div>
