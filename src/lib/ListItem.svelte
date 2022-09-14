<script>
  export let isLast = false;
</script>

<li class="p-4 border-t {isLast && 'border-b'} flex justify-between">
  <span><slot /></span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    focusable="false"
    aria-hidden="true"
    ><path d="M0 0h24v24H0z" style="fill: none;" /><path
      d="M10 17a1 1 0 0 1-.707-1.707L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A.997.997 0 0 1 10 17Z"
    /></svg
  >
</li>
