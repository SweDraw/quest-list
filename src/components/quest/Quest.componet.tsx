import './Quest.style.scss';

import React from 'react';

import Answer, { AnswerProps } from '../answer/answer.component';

export interface QuestProps {
  // * Text with quest
  quest: String;
  //* Parameter from answer what
  answerParameter: AnswerProps;
}
/**
 * Create quest component
 */
const Quest: React.FC<QuestProps> = ({ quest, answerParameter }) => {
  return (
    <article className="quest">
      <p className="quest__quest">{quest}</p>
      <Answer {...answerParameter} />
    </article>
  );
};

export default Quest;
