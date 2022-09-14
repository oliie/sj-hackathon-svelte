import { writable } from "svelte/store";

const createUser = () => {
    const { subscribe, set, update } = writable({
        name: "John Doe",
        points: 1200,
        xp: 30,
        achievements: [],
        level: 2,
        nextLevelXp: 100,
    });

    return {
        subscribe,
        update,
        set
    };
};

export const user = createUser();