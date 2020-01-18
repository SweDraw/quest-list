import './result.style.scss';

import React, { useEffect, useState } from 'react';

import AnswerCheck, {
    AnswerCheckProps
} from '../../components/answer-check/answer-check.component';
import { Quest } from '../../interface/quest.interface';
import { getRightAnswerList } from '../../utils/answer';
import { getSaveValue } from '../../utils/localStorage';
import { createQuestFieldName } from '../../utils/quest';
import { getQuestDataFromServer } from '../../utils/server';

interface Props {}

const createAnswerCheck = (
  { quest, answer }: Quest,
  answerStorageName: string
): AnswerCheckProps => {
  const userAnswer: string | undefined = getSaveValue(answerStorageName);
  const rightAnswer: string | string[] = getRightAnswerList(
    answer.right_answers,
    answer.answerList !== undefined ? answer.answerList : []
  );
  return {
    rightAnswer,
    quest,
    userAnswer
  };
};

/*
 * Create page where you answer in question
 */
const ResultPage: React.FC<Props> = () => {
  const [answers, setAnswer] = useState<AnswerCheckProps[]>([]);
  useEffect(() => {
    const fethData = async () =>
      await getQuestDataFromServer(quests => {
        setAnswer(
          quests.map((quest, index) =>
            createAnswerCheck(quest, createQuestFieldName(index + 1))
          )
        );
      });
    fethData();
  }, []);

  const answerCheckList = answers.map((answer, index) => (
    <AnswerCheck key={index} {...answer} />
  ));

  return (
    <main className="result-page">
      <h1 className="result-page__title title">Результати тесту по історії</h1>
      <section className="result-page__answer-list">{answerCheckList}</section>
    </main>
  );
};

export default ResultPage;
