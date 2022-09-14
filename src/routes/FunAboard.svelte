<script>
  const games = [
    {
      imgUrl:
        'https://imgs.search.brave.com/pD_Q6V_sf5fzVSFXn72scu3mXUUpT9C79lBYw6Cm6ks/rs:fit:668:376:1/g:ce/aHR0cHM6Ly90aHVt/Ym9yLnByb2QudGVs/a2t1LmNvbS91eDZm/RDR0bmlnTXFramtI/SHp0bEVUbE5Bb0U9/LzY2OHgzNzYvc21h/cnQvZmlsdGVyczpx/dWFsaXR5KDg2KTpm/b3JtYXQoanBlZykv/aW1nLnByb2QudGVs/a2t1LmNvbS9wcm9n/cmFtLWltYWdlcy9i/NzA2YTkyNzk3NjY1/YjhlNGMzZWUzZTAz/YWU2OTFkYy5wbmc',
      name: 'På spåret',
      description:
        'Utmana dina vänner i en omgång av vårat alldeles egna spel På Spåret',
    },
    {
      imgUrl:
        'https://imgs.search.brave.com/qjJ-iUGxQOvrRid0O-uAsUUDaK6JVyUj_dAi7FBLjlY/rs:fit:400:246:1/g:ce/aHR0cHM6Ly90Y2Yu/YWRtZWVuLm9yZy9n/YW1lLzE3NTAwLzE3/MjczLzQwMHgyNDYv/dHJhaW4tc25ha2Uu/anBn',
      name: 'Train Snake',
      description:
        'Du måste hjälpa lokföraren att plocka upp alla passagerare. Men se upp för varje passagerare blir tåget längre!',
    },
    {
      imgUrl:
        'https://imgs.search.brave.com/GIiq768RsKx1DA03NzRdNcq5V6n-gJbd1rXbLjlxXCE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzYwOTAwNDgvci9p/bC8zMjZmZDMvMTc0/NDQ0MjczNi9pbF9m/dWxseGZ1bGwuMTc0/NDQ0MjczNl9jMDFt/LmpwZw',
      name: 'Kärlekståget',
      description: 'Träffa kärleken på vägen till Hallsberg! 💘',
    },
    {
      imgUrl:
        'https://imgs.search.brave.com/JXH-f_7F6NDLdm-yDUlk1LShr9n1EttxM_aUskaLRmY/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9R/UDZDSURBbmFKZy9t/YXhyZXNkZWZhdWx0/LmpwZw',
      name: 'Snakes on a Train',
      description:
        'Hjälp Samuel L. Jackson rädda ett X2000 tåg på väg mog Göteborg!',
    },
  ];
</script>

<div class="grid grid-cols-2 gap-8">
  {#each games as { imgUrl, name, description }}
    <div class="border border-slate-300 rounded-xl overflow-hidden">
      <div>
        <img class="w-full h-[200px]" alt={name} src={imgUrl} />
      </div>
      <div class="p-4">
        <h2 class="text-xl">{name}</h2>
        <p class="mt-2 text-sm">{description}</p>
      </div>
    </div>
  {/each}
</div>
