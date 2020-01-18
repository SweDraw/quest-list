import React from 'react';

import { isRightAnswer } from '../../utils/answer';

export type AnswerCheckProps = {
  userAnswer: string | undefined;
  rightAnswer: string | string[];
  quest: string;
};

const AnswerCheck: React.FC<AnswerCheckProps> = ({
  userAnswer = "",
  quest,
  rightAnswer
}) => {
  const isRight = isRightAnswer(userAnswer, rightAnswer);
  return (
    <article className="answer-check">
      <p className="answer-check__question">{quest}</p>
      <p className="answer-check__user-answer">Your answer {userAnswer}</p>
      <p className="answer-check__right-answer">Right answer {rightAnswer}</p>
      <p className="answer-check__result">{isRight ? "Corect" : "Incorect"}</p>
    </article>
  );
};

export default AnswerCheck;
