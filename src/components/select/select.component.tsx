import './select.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { getSaveValue, saveValueToStorage } from '../../utils/localStorage';

type Props = {
  selectItemList: string[];
  selectName: string;
  beforeValue?: string;
};

const Select: React.FC<Props> = ({
  selectItemList,
  selectName,
  beforeValue
}) => {
  const { register } = useFormContext();
  const SelectList = selectItemList.map((element, index) => (
    <option key={index}>{element}</option>
  ));
  return (
    <select
      value={getSaveValue(selectName)}
      onChange={e => saveValueToStorage(selectName, e.target.value)}
      name={selectName}
      ref={register}
      className="select"
    >
      {SelectList}
    </select>
  );
};

export default Select;
