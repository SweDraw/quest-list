import './answer.styles.scss';

import React from 'react';

import { AnswerType } from '../../interface/quest.interface';
import CheckedInputList from '../checked-input/checked-input-list.componet';
import Select from '../select/select.component';
import TextArea from '../textarea/textarea.component';

export interface AnswerInputProps {
  // * Type of answer
  answerType: AnswerType;
  // * List of examples of answer
  answerList?: string[];
  // * Form name
  formAnswerName: string;
}
export type AnswerProps = AnswerInputProps & {};
/**
 * Create answer input elment from type
 */
const AnswerInput: React.FC<AnswerProps> = ({
  answerType: type,
  formAnswerName,
  answerList = []
}) => {
  switch (type) {
    default:
      return <TextArea formTextAreaName={formAnswerName} />;
    case "select":
      return (
        <Select selectItemsText={answerList} formSelectName={formAnswerName} />
      );
    case "textarea":
      return <TextArea formTextAreaName={formAnswerName} />;
    case "radio":
    case "checkbox":
      return (
        <CheckedInputList
          inputListType={type}
          inputText={answerList}
          formListName={formAnswerName}
        />
      );
  }
};
/**
 * Create element where containse input element what use to answer in question
 */
const Answer: React.FC<AnswerProps> = ({
  formAnswerName,
  answerType: type,
  answerList = []
}) => {
  return (
    <div className="answer">
      <AnswerInput
        formAnswerName={formAnswerName}
        answerType={type}
        answerList={answerList}
      />
    </div>
  );
};

export default Answer;
