import './input.style.scss';

import React from 'react';

import { CheckedInputType } from '../../interface/quest.interface';
import CheckedInput from './checked-input.component';

interface Props {
  // * Type of all input in list
  inputListType: CheckedInputType;
  // * Form Name
  formListName: string;
  // * Text what write inner input
  inputText: string[];
}
/**
 * Create checkbox or radiobutton list
 */
const CheckedInputList: React.FC<Props> = ({
  inputText,
  inputListType,
  formListName
}) => {
  /**
   * Create list of checkbox or radiobutton
   */
  const InputItems = inputText.map((text, index) => (
    <CheckedInput
      formName={formListName}
      inputType={inputListType}
      key={index}
      innerText={text}
      value={text}
    />
  ));
  return <article className="input-list">{InputItems}</article>;
};

export default CheckedInputList;
