<script>
  let count = 0;

  const increment = () => (count += 1);
</script>

<button class="bg-sjgreen rounded-lg text-white p-4" on:click={increment}>
  Count is {count}
</button>
