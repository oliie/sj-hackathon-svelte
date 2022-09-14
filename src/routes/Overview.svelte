<script>
  import raekmacka from '../assets/raekmacka.png';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
  <!-- Left -->
  <div>
    <h2 class="text-xl">Medlemsnivå</h2>
    <div class="grid grid-cols-2 mt-4">
      <div>Silver</div>
      <div class="text-right">Guld</div>
    </div>

    <progress class="progress w-full progress-warning" value={40} max={100} />

    <div class="mt-4">
      <div class="underline">Köp resa för dina priopoäng</div>
    </div>

    <div class="mt-4">
      <div class="underline">Använd poäng i Poängshoppen</div>
    </div>

    <div class="mt-4">
      <button class="w-full bg-sjmoss p-4 text-left rounded-xl"
        >Res till Stockholm för dina poäng</button
      >
    </div>

    <div class="mt-4">
      <button class="w-full bg-sjmoss p-4 text-left rounded-xl"
        >Res till Uppsala för dina poäng
      </button>
    </div>

    <div class="mt-8">
      <h3 class="text-xl">Senaste Achievements</h3>
      <ul class="flex mt-8">
        <li class="text-8xl flex flex-col">
          <span>☕</span>
          <div class="text-center text-sm mt-4">Kaffe</div>
        </li>
        <li class="text-8xl flex flex-col">
          <span>🪙</span>
          <div class="text-center text-sm mt-4">Priopoäng</div>
        </li>
        <li class="text-8xl flex flex-col">
          <span>🚅</span>
          <div class="text-center text-sm mt-4">Resa</div>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <h3 class="text-xl">Miljö</h3>
      <p class="mt-4">
        Du har sparat motsvarande <b>4st</b> fat bensin kontra ifall du istället
        använt flyg
      </p>

      <ul class="flex mt-4">
        {#each Array(4) as n}
          <li class="text-7xl text-amber-500">🛢</li>
        {/each}
      </ul>
    </div>

    <div class="mt-12">
      <h3 class="text-xl">Senaste poängen</h3>
      <div class="mt-4">
        <div class="grid grid-cols-12 my-2">
          <div class="col-span-1">12/9</div>
          <div class="col-span-11">
            Bokad resa <b class="text-sjgreen">(+100 pp)</b>
          </div>
        </div>
        <div class="grid grid-cols-12 my-2">
          <div class="col-span-1">7/9</div>
          <div class="col-span-11">
            Tågförsening <b class="text-sjgreen">(+50 pp)</b>
          </div>
        </div>
        <div class="grid grid-cols-12 my-2">
          <div class="col-span-1">12/7</div>
          <div class="col-span-11">
            Entusiasten <b class="text-sjgreen">(+75 pp)</b>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right -->
  <div>
    <h2 class="text-xl">Använd dina PrioPoäng</h2>

    <div class="rounded-xl overflow-hidden mt-4 border border-slate-200">
      <div>
        <div class="h-[200px] overflow-hidden">
          <img class="-mt-12" alt="Räkmacka" src={raekmacka} />
        </div>
        <div class="p-4">
          <div class="grid grid-cols-2">
            <div class="text-xl">Räkmacka</div>
            <div class="text-right text-xl">11 000pp</div>
          </div>
          <p class="mt-4">
            Sätt guldkant på tillvaron med vår populära räkmacka med ägg och
            dillmajonnäs. Måltidsdryck ingår.
          </p>
        </div>
      </div>
    </div>

    <h2 class="text-xl mt-8">Snart kan du köpa</h2>

    <div class="border border-slate-200 p-4 mt-4 rounded-xl">
      <div class="grid grid-cols-2">
        <div class="text-xl">Valfri resa i Sverige</div>
        <div class="text-xl text-right">14 500pp</div>
      </div>
      <p class="text-sm mt-4">Åk till en valfri ort. SJ bjuder!</p>
      <div class="text-6xl my-8">🚂</div>

      <button class="bg-sjgreenLight text-xl rounded-xl w-full p-4">
        Samla mer poäng
      </button>
    </div>
  </div>
</div>
