<script>
  import { numberWithSpaces } from './helpers';

  export let price = 0;
  export let serviceName = '';
  export let description = '';
</script>

<div class="grid border border-gray-300 rounded-xl p-4 mb-4">
  <div class="grid grid-cols-2">
    <h3 class="font-bold text-2xl">{serviceName}</h3>

    <p class="font-bold text-4xl text-right">{numberWithSpaces(price)}:-</p>
  </div>

  <p class="mt-2">{description}</p>
</div>
