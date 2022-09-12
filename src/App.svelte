<script>
  import { onMount } from 'svelte';

  import svelteLogo from './assets/svelte.svg';
  import Counter from './lib/Counter.svelte';

  let apiurl =
    'https://d12.www.sj.se/v19/rest/discounts/EnjaY3L29_UNDXENig_xdPZ2DWFmMgACQysDcxMI0xTCDAtlZoJDADK4CPg/prices/2022-09-12';

  onMount(async () => {
    document.cookie =
      'X-api.sj.se-service=EnjaY3IM8IwP8DZkZjIxM7VgZjIwYGYKYgYAMM4Dow; expires=Session;';
    document.cookie =
      'X-api.sj.se-session-v19=I-5ecDtXjBF4mPI21VsYdLRY4UFAnoV2gdhs-P2PMa30eNpjcgzwjA_wNmRmYirO0itOZWYqSKzMyy9L1EvOz2VmZgLBYC_dYFdmJgVmppAgxzBXHx_XIGYmQzMzAwNTA0sLIyNTM4g6CHQNcwNRaYk5QNMA1f4Sbw; expires=Session;';
    document.cookie =
      'mbox=session#890bdfffd7504ef0963092c09064a6a1#1662974358|PC#890bdfffd7504ef0963092c09064a6a1.37_0#1726217298; expires=Session';

    const data = await fetch(apiurl, {
      mode: 'cors',
    });

    console.log(data);
  });
</script>

<!-- https://local.www.sj.se/rest/discounts/EnjaY3L29_UNDXENig_xdPZ2DWFmMgACQysDcxMI0xTCDAtlZoJDADK4CPg/prices/2022-09-12 -->

<h1 class="text-sjgreen">BOOOM</h1>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
