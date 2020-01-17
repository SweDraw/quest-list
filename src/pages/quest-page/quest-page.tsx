import './quest-page.scss';

import React, { useEffect, useState } from 'react';

import QuestForm from '../../components/quest-form/quest-form.componet';
import { QuestProps } from '../../components/quest/Quest.componet';
import { Quest } from '../../interface/quest.interface';
import { createQuestFieldName } from '../../utils/quest';

interface Props {}

const createQusetPropsFromQuest = (
  { quest, answer }: Quest,
  answerFormName: string
): QuestProps => ({
  quest,
  answerParameter: {
    answerFormName,
    type: answer.type,
    answerList: answer.answerList
  }
});

const QuestPage: React.FC<Props> = () => {
  const [questList, setQuestList] = useState<QuestProps[]>([]);
  useEffect(() => {
    fetch("/quests-list")
      .then(res => res.json())
      .then(res => {
        const qusets: Quest[] = res as Quest[];
        setQuestList(
          qusets.map((quest, index) => {
            quest.quest = `${index + 1}. ${quest.quest}`;
            return createQusetPropsFromQuest(
              quest,
              createQuestFieldName(index + 1)
            );
          })
        );
      });
  }, []);

  return (
    <section className="quest-page">
      <h1 className="quest-page__title">Тест по історії</h1>
      <QuestForm questParameter={questList} />
    </section>
  );
};

export default QuestPage;
