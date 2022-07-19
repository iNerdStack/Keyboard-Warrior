import { useStorage, RemovableRef } from '@vueuse/core';
import { GameLevels } from '@/types';

//Analytic Types
interface BestTime {
  name: string;
  time: number;
}

type Analytic = {
  scores: Array<{
    title: string;
    count: RemovableRef<number> | number | string;
    subtitle?: string;
    progressBar?: boolean;
    progressValue?: number;
  }>;
  bestTime: BestTime[];
};

interface IGameData {
  level: GameLevels;
  accuracy: number;
  time: number;
  CPM: number;
}

interface ISavedGameData extends IGameData {
  date: Date;
}

//Analytic States
export const useTotalGamesCount = () => useStorage('totalGamesCount', 0);
export const useBestTimes = () =>
  useStorage('bestTimes', {
    beginner: 0,
    amateur: 0,
    professional: 0,
    expert: 0,
    dieHard: 0,
  });
export const useTotalUncompletedGameCount = () =>
  useStorage('totalUncompletedGameCount', 0);
export const useCompletedGamesList = () => useStorage('CompletedGamesList', []);

//Analytics Functions
function highestAccuracy(): number {
  //if no stored games yet
  if (useCompletedGamesList().value.length === 0) {
    return 0;
  }

  let allAccuracy = [];

  useCompletedGamesList().value.forEach((element) => {
    allAccuracy.push(element.accuracy);
  });

  return Math.max(...allAccuracy);
}

function averageAccuracy(): number {
  //if no stored games yet
  if (useCompletedGamesList().value.length === 0) {
    return 0;
  }

  let allAccuracy = [];

  useCompletedGamesList().value.forEach((element) => {
    allAccuracy.push(element.accuracy);
  });

  let sum = 0;

  allAccuracy.forEach(function (num) {
    sum += num;
  });

  let average = sum / allAccuracy.length;

  return Math.floor(average);
}

function highestCPM(): number {
  //if no stored games yet
  if (useCompletedGamesList().value.length === 0) {
    return 0;
  }

  let allCPM = [];

  useCompletedGamesList().value.forEach((element) => {
    allCPM.push(element.CPM);
  });

  return Math.max(...allCPM);
}

function averageCPM(): number {
  //if no stored games yet
  if (useCompletedGamesList().value.length === 0) {
    return 0;
  }

  let allCPM = [];

  useCompletedGamesList().value.forEach((element) => {
    allCPM.push(element.CPM);
  });

  let sum = 0;

  allCPM.forEach(function (num) {
    sum += num;
  });

  let average = sum / allCPM.length;

  return Math.floor(average);
}

function updateBestTime(level: GameLevels, newTime: number) {
  if (
    useBestTimes().value[level] > newTime ||
    useBestTimes().value[level] === 0
  ) {
    useBestTimes().value[level] = newTime;
  }
}

export function useOnStartGame() {
  useTotalGamesCount().value++;
  useTotalUncompletedGameCount().value++;
}

export function useOnEndGame(gameData: IGameData) {
  useTotalUncompletedGameCount().value--;

  // update best time for level
  updateBestTime(gameData.level, gameData.time);

  //Update Saved Completed Games List
  let completedGamesList = JSON.parse(
    JSON.stringify(useCompletedGamesList().value),
  );

  completedGamesList = [
    {
      ...gameData,
      date: new Date().toLocaleString(),
    },
    ...completedGamesList,
  ];

  //Ensure array of last games dont exceed 50 results
  if (completedGamesList.length > 50) {
    completedGamesList.splice(-1, 1);
  }

  useCompletedGamesList().value = completedGamesList;
}

export function useAnalytics(): Analytic {
  // Computed Analytics
  return {
    scores: [
      {
        title: 'Played',
        count: useTotalGamesCount(),
        subtitle: useTotalGamesCount().value > 1 ? 'Times' : 'Time',
      },
      {
        title: 'Average Accuracy',
        count: averageAccuracy() + '%',
        subtitle: 'Percentage',
        progressBar: true,
        progressValue: averageAccuracy()
      },
      {
        title: 'Highest Accuracy',
        count: highestAccuracy() + '%',
        subtitle: 'Percentage',
        progressBar: true,
        progressValue: highestAccuracy() 
      },
      {
        title: 'Average CPM',
        count: averageCPM(),
        subtitle: 'Characters/Minute',
      },
      {
        title: 'Best CPM',
        count: highestCPM(),
        subtitle: 'Characters/Minute',
      },
      {
        title: 'Uncompleted Games',
        count: useTotalUncompletedGameCount().value,
      },
    ],
    bestTime: [
      {
        time: useBestTimes().value.beginner,
        name: 'Beginner',
      },
      {
        time: useBestTimes().value.amateur,
        name: 'Amateur',
      },
      {
        time: useBestTimes().value.professional,
        name: 'Professional',
      },
      {
        time: useBestTimes().value.expert,
        name: 'Expert',
      },
      {
        time: useBestTimes().value.dieHard,
        name: 'Die Hard',
      },
    ],
  };
}
