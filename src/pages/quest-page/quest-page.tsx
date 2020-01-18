import './quest-page.scss';

import React, { useEffect, useState } from 'react';

import QuestForm from '../../components/quest-form/quest-form.componet';
import { QuestProps } from '../../components/quest/Quest.componet';
import { Quest } from '../../interface/quest.interface';
import { createQuestFieldName } from '../../utils/quest';
import { getQuestDataFromServer } from '../../utils/server';

interface Props {}

const createQusetPropsFromQuest = (
  { quest, answer }: Quest,
  answerFormName: string
): QuestProps => ({
  quest,
  answerParameter: {
    formAnswerName: answerFormName,
    answerType: answer.type,
    answerList: answer.answerList
  }
});

/**
 * Create page where you answer in question
 */
const QuestPage: React.FC<Props> = () => {
  const [questList, setQuestList] = useState<QuestProps[]>([]);
  useEffect(() => {
    const fethData = async () =>
      await getQuestDataFromServer(quests => {
        setQuestList(
          quests.map((quest, index) => {
            quest.quest = `${index + 1}. ${quest.quest}`;
            return createQusetPropsFromQuest(
              quest,
              createQuestFieldName(index + 1)
            );
          })
        );
      });
    fethData();
  }, []);

  return (
    <section className="quest-page">
      <h1 className="quest-page__title">Тест по історії</h1>
      <QuestForm questParameter={questList} />
    </section>
  );
};

export default QuestPage;
