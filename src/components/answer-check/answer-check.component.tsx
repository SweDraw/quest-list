import './answer-check.style.scss';

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
    <article
      className={`answer-check answer-check--${
        isRight ? "correct" : "incorrect"
      }`}
    >
      <p className="answer-check__title">Запитання</p>
      <p className="answer-check__quest">{quest}</p>
      <div className="answer-check__answer-bar">
        <p className="answer-check__user-answer">
          Ваша відповідь:{" "}
          <span className="answer-check__info">{userAnswer}</span>
        </p>
        <p className="answer-check__right-answer">
          Правильна відповідь:{" "}
          <span className="answer-check__info">{rightAnswer}</span>
        </p>
      </div>
      <p className="answer-check__result">
        Ваша відповідь{" "}
        <span className="answer-check__info">
          {isRight ? "правильна!" : "не правильна!"}
        </span>
      </p>
    </article>
  );
};

export default AnswerCheck;
