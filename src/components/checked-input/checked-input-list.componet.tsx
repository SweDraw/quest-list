import './input.style.scss';

import React from 'react';

import { CheckedInputType } from '../../interface/quest.interface';
import { getSaveValue } from '../../utils/localStorage';
import CheckedInput from './checked-input.component';

interface Props {
  inputListType: CheckedInputType;
  listName: string;
  inputText: string[];
}

const CheckedInputList: React.FC<Props> = ({
  inputText,
  inputListType,
  listName
}) => {
  const InputItems = inputText.map((text, index) => (
    <CheckedInput
      name={listName}
      type={inputListType}
      key={index}
      text={text}
      value={text}
    />
  ));
  return <article className="input-list">{InputItems}</article>;
};

export default CheckedInputList;
