import { Quest } from '../interface/quest.interface';

export const getQuestDataFromServer = async (
  useData: (questList: Quest[]) => void
) =>
  await fetch("/quests-list")
    .then(res => res.json())
    .then(res => {
      const qusets: Quest[] = res as Quest[];
      useData(qusets);
    });
