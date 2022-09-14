import { writable } from 'svelte/store';

function createNavStore() {
  const { subscribe, set } = writable('Min Sida');

  return {
    subscribe,
    goTo: set,
    reset: () => set('Min Sida'),
  };
}

export const navStore = createNavStore();
