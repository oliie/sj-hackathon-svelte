import { writable } from 'svelte/store';

function createRouter() {
  const { subscribe, set, update } = writable('min-sida');

  return {
    subscribe,
    goTo: set,
    reset: () => set('min-sida'),
  };
}

export const router = createRouter();
