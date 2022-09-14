<script>
    import Button from '../Button.svelte';
    import { achievements } from '../stores/achievements';
</script>


<div class="rounded-xl overflow-hidden mt-4 border border-slate-200">

    <div>

      <div class="h-[200px] overflow-hidden">
        <div class="text-9xl text-center mt-8">
            ☕ 

        </div>
    

      </div>

      <div class="p-4">

        <div class="grid grid-cols-2">

          <div class="text-xl">Kaffe</div>

          <div class="text-right text-xl">11 000pp</div>

        </div>

        <p class="mt-4">

          Sätt guldkant på tillvaron med vår populära räkmacka med ägg och

          dillmajonnäs. Måltidsdryck ingår.

        </p>


        <Button on:click={
            () => {
              achievements.updateAchievement({ id: 'coffee', points: 1})
              console.log($achievements);
            }
            
          }>Köp kaffe</Button>

      </div>

    </div>

  </div>
