import React, { useEffect, useState } from 'react';

import QuestForm from '../../components/quest-form/quest-form.componet';
import { QuestProps } from '../../components/quest/Quest.componet';
import { Quest } from '../../interface/quest.interface';

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
        console.log(res);
        const qusets: Quest[] = res as Quest[];
        setQuestList(
          qusets.map((quest, index) =>
            createQusetPropsFromQuest(quest, `quest-${index}`)
          )
        );
      });
  }, []);

  return (
    <section className="quest-page">
      <QuestForm questParameter={questList} />
    </section>
  );
};

export default QuestPage;
