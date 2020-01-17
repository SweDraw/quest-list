import './select.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { getSaveValue, saveValueToStorage } from '../../utils/localStorage';

type Props = {
  // * Select items text
  selectItemsText: string[];
  // * Form name
  formSelectName: string;
};
/**
 * Create select component with save value to store
 */
const Select: React.FC<Props> = ({ selectItemsText, formSelectName }) => {
  const { register } = useFormContext();
  const SelectList = selectItemsText.map((text, index) => (
    <option key={index}>{text}</option>
  ));
  return (
    <select
      value={getSaveValue(formSelectName)}
      onChange={e => saveValueToStorage(formSelectName, e.target.value)}
      name={formSelectName}
      ref={register}
      className="select"
    >
      {SelectList}
    </select>
  );
};

export default Select;
