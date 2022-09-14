<script>
  export let type = 'primary';
</script>

<button
  class="{type === 'primary' ? 'bg-sjgreen' : 'bg-sjgreenLight'} 
    {type === 'primary' ? 'text-white' : 'text-black'} 
    {type === 'primary' && 'font-bold'} 
    rounded-lg p-4 w-full mt-2 "
>
  <slot />
</button>
