import './input.style.scss';

import React from 'react';

import { InputType } from '../../interface/quest.interface';
import Input from './input.component';

interface Props {
  inputListType: InputType;
  listName: string;
  inputText: string[];
}

const InputList: React.FC<Props> = ({ inputText, inputListType, listName }) => {
  const InputItems = inputText.map((text, index) => (
    <Input name={listName} type={inputListType} key={index} text={text} />
  ));
  return <article className="input-list">{InputItems}</article>;
};

export default InputList;
