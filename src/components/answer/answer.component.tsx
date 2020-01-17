import './answer.styles.scss';

import React from 'react';

import { AnswerType } from '../../interface/quest.interface';
import CheckedInputList from '../checked-input/checked-input-list.componet';
import Select from '../select/select.component';
import TextArea from '../textarea/textarea.component';

export interface AnswerInputProps {
  type: AnswerType;
  answerList?: string[];
  answerFormName: string;
}
export type AnswerProps = AnswerInputProps & {};

const AnswerInput: React.FC<AnswerProps> = ({
  type,
  answerFormName,
  answerList = []
}) => {
  switch (type) {
    default:
      return <TextArea textareaName={answerFormName} />;
    case "select":
      return <Select selectItemList={answerList} selectName={answerFormName} />;
    case "textarea":
      return <TextArea textareaName={answerFormName} />;
    case "radio":
    case "checkbox":
      return (
        <CheckedInputList
          inputListType={type}
          inputText={answerList}
          listName={answerFormName}
        />
      );
  }
};

const Answer: React.FC<AnswerProps> = ({
  answerFormName,
  type,
  answerList = []
}) => {
  return (
    <div className="answer">
      <AnswerInput
        answerFormName={answerFormName}
        type={type}
        answerList={answerList}
      />
    </div>
  );
};

export default Answer;
