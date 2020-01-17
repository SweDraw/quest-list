import './select.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  selectItemList: string[];
  selectName: string;
};

const Select: React.FC<Props> = ({ selectItemList, selectName }) => {
  const { register } = useFormContext();
  const SelectList = selectItemList.map((element, index) => (
    <option key={index}>{element}</option>
  ));
  return (
    <select name={selectName} ref={register} className="select">
      {SelectList}
    </select>
  );
};

export default Select;
