import './answer.styles.scss';

import React from 'react';

import InputList from '../input/input-list.componet';
import { InputType } from '../input/input.component';
import Select from '../select';
import TextArea from '../textarea';

export type AnswerType = "radio" | "select" | "textarea" | "checkbox";

export interface AnswerProps {
  type: AnswerType;
  formName: string;
  answerList?: string[];
}

const Answer: React.FC<AnswerProps> = ({ formName, type, answerList = [] }) => {
  const createInputList = (listType: InputType) => (
    <InputList
      inputListType={listType}
      inputText={answerList}
      listName={formName}
    />
  );
  const AnswerInput = () => {
    switch (type) {
      case "select":
        return <Select selectItemList={answerList} selectName={formName} />;
      case "textarea":
        return <TextArea textareaName={formName} />;
      case "radio":
        return createInputList("radio");
      case "checkbox":
        return createInputList("checkbox");
    }
  };

  return <div className="answer">{AnswerInput}</div>;
};

export default Answer;
