import { writable } from "svelte/store";
import { achievementDefaults } from "./achievementDefaults";
import { user } from "./user";

const createAchievements = () => {
  const { subscribe, set, update } = writable(achievementDefaults);

  return {
    subscribe,
    update,
    updateAchievement: ({id, points}) => {
      update((achievements) => {
        const achievement = achievements.find((a) => a.id === id);
        achievement.points += points;

        if (achievement.points >= achievement.pointsPerLevel) {
            achievement.currentLevel++;
            achievement.points = 0;
            achievement.hasLeveledUp = true;
            user.update((user) => {
                user.xp += achievement.xpReward;
                return user;
            });
        }

        return [...achievements];
      });
    }
  }
};

export const achievements = createAchievements();